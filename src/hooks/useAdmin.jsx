import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {


    // admin section
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            return res.data?.admin;
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;