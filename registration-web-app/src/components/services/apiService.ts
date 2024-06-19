import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const registerUser = (username: string, password: string, email: string) => {
    return axios.post(`${API_URL}/register`, { username, password, email });
};

export const loginUser = (email: string, password: string) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

export const getRandomText = () => {
    return axios.get(`${API_URL}/random-text`);
};
