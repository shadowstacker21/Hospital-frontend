import axios from 'axios';


const authApiClient = axios.create({
    baseURL:"https://hospital-system-s-imple.vercel.app/api/v1"
})

authApiClient.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem("authtokens")
        if(token){
            config.headers.Authorization = `JWT ${JSON.parse(token)?.access}`
        }
        return config
    },
    (error)=>Promise.reject(error)
)

export default authApiClient;