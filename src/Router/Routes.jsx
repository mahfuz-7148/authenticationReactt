import {createBrowserRouter} from "react-router";
import RootLayout from "../RootLayout.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Orders from "../components/Orders.jsx";
import Profile from "../components/Profile.jsx";
import Dashboard from "../components/Dashboard.jsx";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path:'/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path:'/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    }
])