import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://blood-server-plum.vercel.app",
  // baseURL: "https://blood-server-plum.vercel.app",
  // baseURL: "https://blood-server-plum.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
