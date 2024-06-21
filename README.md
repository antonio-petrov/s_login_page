This was a test for a job opportunity. React + React Native + Python (backend)

# Task (Unedited):

Figma:
https://www.figma.com/design/5ICsJ7GrvhxsxeKG6aqDD1/Login-page-(Test)-(Copy)?node-id=1-4


1. Mobile:
  -  Use React Native to develop the registration interface for mobile devices.
2. Web:
  - Use React JS to develop the registration interface for the website.
3. Server:
  - Connect to the server using Python.
  - The server should run on Azure cloud.
  - Use MongoDB for database management.
4. Additional Functionality:
  - After registration, send a Toast message to the user.
  - The content of the message should be a random text obtained from an API connection to Open AI's Chat GPT.

# Solution:

## How to run backend:
```
python -m venv venv

source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

pip install -r requirements.txt
```


## How to run web app
[React web app solution](https://s-login-page.vercel.app/)

![web app screenshot](https://i.imgur.com/fYQ5j3G.png)
```
cd registration-web-app

npm start
```
## How to run mobile app
![mobile app screenshots](https://i.imgur.com/MhycoUw.png)

```
cd RegistrationApp

npm install

npx react-native start

npx react-native run-android

npx react-native run-ios

```
