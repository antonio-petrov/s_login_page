import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const registerUser = (password: string, email: string) => {
    return axios.post(`${API_URL}/register`, { password, email });
};

export const loginUser = (email: string, password: string) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

export const getRandomText = () => {
    const token = localStorage.getItem('token');
    return axios.get(`${API_URL}/message`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};