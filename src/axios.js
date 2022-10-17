import axios from 'axios';

const instance = axios.create({
    baseURL: "https://personal-portfolio-eb586-default-rtdb.asia-southeast1.firebasedatabase.app"
});

export default instance;