import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'http://localhost:4500'
})

const useAxiosPublic = () => {
  return axiosPublic
};

export default useAxiosPublic;