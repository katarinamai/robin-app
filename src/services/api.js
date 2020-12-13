import axios from 'axios';

const api = axios.create({
    baseURL: 'https://robin-platform.herokuapp.com'
});

export default api;
