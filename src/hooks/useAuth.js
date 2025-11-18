import React, { useEffect, useState } from 'react';
import apiClient from '../Services/api-client';

const useAuth = () => {
    const [user,setUser]=useState(null)
    const [errorMsg,setErrorMsg]=useState("")
    const [successMsg,setSuccessMsg] = useState("")
    const [loading,setLoading]=useState(false)


    useEffect(()=>{
        if (errorMsg || successMsg){
            const timer = setTimeout(()=>setErrorMsg("")||setSuccessMsg(""),3000)
            return ()=>clearTimeout(timer)

        }
    },[errorMsg,successMsg])

    const getToken = () => {
        const token = localStorage.getItem("authtokens")
        return token?JSON.parse(token):null
    }
    
    // Set Auth tokens take by local storage

    const [authtokens,setAuthtokens] = useState(getToken())


    // Refresh Token
    const refreshToken = async()=>{
        try{
            const res = await apiClient.post("/auth/jwt/refresh/", {
            refresh: authTokens?.refresh,
         });
         const newTokens = {
            access:res.data.access,
            refresh:authtokens.refresh,
         };
         setAuthtokens(newTokens);
         localStorage.setItem("authtokens",JSON.stringify(newTokens))
         return newTokens.access;
    }catch(err){
        console.log("Refresh Token Expired",err);
        logout(()=>window.location.replace("/login"))
        return null
    }
}   


    // Fetch user profile
    const fetchUserProfile = async(token)=>{
        setLoading(true)
        try{
            const res = await apiClient.get("/auth/users/me",{
                headers:{
                    Authorization:`JWT ${token}`
                }
            });
            setUser(res.data)
        } catch(error){
            console.log("Access token failed, trying...",error)
            const newAccess = await refreshToken()
            if(newAccess){
                try{
                const res = await apiClient.get("/auth/users/me",{
                headers:{
                    Authorization:`JWT ${newAccess}`
                }
                })
                setUser(res.data)
            }
            catch(error){
                console.log("User fetch failed after refresh", error);
                setUser(null);
            }
        } else{
            setUser(null)
        }
    }finally{
        setLoading(false)
    }
} ;


// Login User
const loginUser = async(userData)=>{
      setErrorMsg("");
     try{
         const response =  await apiClient.post("/auth/jwt/create/",userData)
      setAuthtokens(response.data)
      localStorage.setItem("authTokens",JSON.stringify(response.data))
      await fetchUserProfile(response.data.access)
      setSuccessMsg("Login Successfully")
      return {success:true}
     }catch(error){
        console.log(error);
        setErrorMsg(error.response.data?.detail)
        
        return {success:false}
     }
   }



    return {user,errorMsg,successMsg,loading,loginUser}
}

export default useAuth;