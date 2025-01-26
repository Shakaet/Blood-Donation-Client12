import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://blood-server-plum.vercel.app",
  // baseURL: "https://blood-server-plum.vercel.app",
  // baseURL: "https://blood-server-plum.vercel.app",
});
const usePublicAxios = () => {
  return axiosPublic;
};

export default usePublicAxios;
