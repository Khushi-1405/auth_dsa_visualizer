import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/auth' });

export const signup = (formData) => API.post('/signup', formData);
export const login = (formData) => API.post('/login', formData);