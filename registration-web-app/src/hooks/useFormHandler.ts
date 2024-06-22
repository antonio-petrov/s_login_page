import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { loginUser, registerUser, getRandomText } from '../services/apiService';

interface FormData {
    email: string;
    password: string;
}

const useFormHandler = (apiFunction: (email: string, password: string) => Promise<any>) => {
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
    const [message, setMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await apiFunction(formData.email, formData.password);
            const token = response.data.access_token;
            localStorage.setItem('token', token);

            const textResponse = await getRandomText();
            setMessage(textResponse.data.message);
            toast.success('Operation successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (err) {
            toast.error('An error occurred. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return { formData, handleChange, handleSubmit, message };
};

export default useFormHandler;
