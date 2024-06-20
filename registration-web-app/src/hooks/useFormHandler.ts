import { useState, useCallback } from 'react';
import { AxiosResponse } from 'axios';
import { getRandomText } from '../services/apiService';

const useFormHandler = (
    submitHandler: (email: string, password: string) => Promise<AxiosResponse<any>>
) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [toastMessage, setToastMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            const { email, password } = formData;

            if (!email || !password) {
                setError('All fields are required');
                return;
            }

            try {
                await submitHandler(email, password);
                const response = await getRandomText();
                setToastMessage(response.data.message);
                alert(response.data.message);
            } catch (error) {
                console.error('Error during submission', error);
                setError('Submission failed. Please try again.');
            }
        },
        [formData, submitHandler]
    );

    return { formData, handleChange, handleSubmit, error, toastMessage };
};

export default useFormHandler;
