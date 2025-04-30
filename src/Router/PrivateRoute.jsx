import {use} from "react";
import {AuthContext} from "../Contexts/AuthContext.jsx";
import {Navigate, useLocation} from "react-router";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    console.log(location)


    const {user, loading} = use(AuthContext)

    if (loading) {
        return  <span className="loading loading-infinity loading-xl"></span>
    }

    if (! user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }


    return children
};

export default PrivateRoute;