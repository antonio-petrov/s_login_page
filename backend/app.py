from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel
from datetime import datetime, timedelta
from motor.motor_asyncio import AsyncIOMotorClient
from openai import OpenAI
from config import settings
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

origins = [
    "http://localhost:3000",
    "https://s-login-page.vercel.app", 
    "https://s-login-page-em6ow3bq2-antonio-petrovs-projects.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB setup
client = AsyncIOMotorClient(settings.MONGO_URI)
db = client.user_db
users_collection = db.users

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# OpenAI setup
openai_client = OpenAI(api_key=settings.OPENAI_API_KEY)

class User(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str | None = None

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

async def get_user(email: str):
    user = await users_collection.find_one({"email": email})
    return user

async def authenticate_user(email: str, password: str):
    user = await get_user(email)
    if not user:
        return False
    if not verify_password(password, user["password"]):
        return False
    return user

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
    except JWTError:
        raise credentials_exception
    user = await get_user(email=token_data.email)
    if user is None:
        raise credentials_exception
    return user

@app.get("/")
async def hello_world():
    return {"message": "Hello, World!"}

@app.get("/test-mongo")
async def test_mongo_connection():
    try:
        # Create a new client and connect (force a new connection)
        client = AsyncIOMotorClient(settings.MONGO_URI, serverSelectionTimeoutMS=5000)
        
        # The ismaster command is cheap and does not require auth.
        await client.admin.command('ismaster')
        
        # If we get here, the connection was successful
        return {
            "message": "Successfully connected to MongoDB",
            "mongo_uri": settings.MONGO_URI.split('@')[-1]  # Only show the host part for security
        }
    except Exception as e:
        # If an exception occurs, the connection failed
        raise HTTPException(status_code=500, detail=f"Failed to connect to MongoDB: {str(e)}")
    finally:
        # Always close the client
        client.close()
        
@app.post("/register", response_model=Token)
async def register(user: User):
    user.password = get_password_hash(user.password)
    await users_collection.insert_one(user.dict())
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"sub": user.email}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/login", response_model=Token)
async def login(user: User):
    authenticated_user = await authenticate_user(user.email, user.password)
    if not authenticated_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"sub": authenticated_user["email"]}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/message")
async def get_message(current_user: User = Depends(get_current_user)):
    chat_completion = openai_client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": "Give me some random short text",
            }
        ],
        model="gpt-3.5-turbo-0125",
    )
    message = chat_completion.choices[0].message.content.strip()
    return {"message": message}