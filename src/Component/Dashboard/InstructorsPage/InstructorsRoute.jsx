import { Navigate, useLocation } from "react-router";

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import useInstructors from "../../hooks/useInstructor";




const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructors, isInstructorsLoading] = useInstructors();
    const location = useLocation();

    if(loading || isInstructorsLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructors) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;