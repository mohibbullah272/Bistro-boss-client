import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://bistro-boss-server-mu-pied.vercel.app'
})

const useAxiosPublic = () => {
  return axiosPublic
};

export default useAxiosPublic;