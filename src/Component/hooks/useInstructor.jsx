import { useQuery } from "@tanstack/react-query";


import { useContext } from "react";
import { AuthContext } from "../../route/AuthProvider";
import useAxiosSecure from "../Dashboard/useAxiosSecure";

const useInstructors = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isInstructors, isLoading: isInstructorsLoading} = useQuery({
        queryKey: ['isInstructors', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/Instructors/${user?.email}`);
            return res.data.Instructors;
        }
    })
    return [isInstructors, isInstructorsLoading]
}
export default useInstructors;