import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface FormData {
    email: string;
    password: string;
}

const useFormHandler = (apiFunction: (email: string, password: string) => Promise<any>) => {
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();

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
            navigate('/message');
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'response' in err && err.response) {
                const errorMessage = (err as any).response.data?.detail || 'An error occurred. Please try again.';
                toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else {
                toast.error('An error occurred. Please try again.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }
    };

    return { formData, handleChange, handleSubmit, message };
};

export default useFormHandler;
