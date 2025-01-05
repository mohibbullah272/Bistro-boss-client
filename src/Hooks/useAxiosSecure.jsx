import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'http://localhost:4500'
})

const useAxiosSecure = () => {
return axiosSecure
};

export default useAxiosSecure;