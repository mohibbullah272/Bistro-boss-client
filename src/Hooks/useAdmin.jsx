import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";

const useAdmin = () => {
    const {user}=useContext(AuthContext)
  const axiosSecure = useAxiosSecure()
   const {data:isAdmin,isLoading}=useQuery({
    queryKey:["Admin",user?.email],
    queryFn:async()=>{
      const {data}= await axiosSecure.get(`/user/isAdmin/${user?.email}`)
 
     return data.admin
    }
   })
 return [isAdmin,isLoading]
};

export default useAdmin;