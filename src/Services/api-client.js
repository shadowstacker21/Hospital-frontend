import axios from 'axios';


const apiClient = axios.create({
    baseURL:"https://hospital-system-s-imple.vercel.app/api/v1"
})

export default apiClient;