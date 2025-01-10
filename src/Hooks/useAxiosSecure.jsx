import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL:'https://bistro-boss-server-mu-pied.vercel.app'
})

const useAxiosSecure = () => {
    const {logOut}=useContext(AuthContext)
    const navigate = useNavigate()
axiosSecure.interceptors.request.use((config)=>{
  const token = localStorage.getItem('access-token')
  config.headers.authorization=`bearer ${token}`
  return config
},err=>{
return Promise.reject(err)
})
axiosSecure.interceptors.response.use((res)=>{
    return res
},async err=>{
if(err.status === 401 || err.status === 403){
await logOut()
navigate('/signIn')
}


    return Promise.reject(err)
})

return axiosSecure
};

export default useAxiosSecure;