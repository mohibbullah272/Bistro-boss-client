import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {
    const axiosPublic = useAxiosPublic()
const {data:menu,isLoading,refetch}=useQuery({
    queryKey:['menu'],
    queryFn:async()=>{
        const {data}=await axiosPublic('/menu')
        
        return data
    }
})
return [menu,isLoading,refetch]
};

export default useMenu;