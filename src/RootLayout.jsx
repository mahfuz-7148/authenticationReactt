import React from 'react'
import {Outlet} from "react-router";
import Navbar from "./components/Navbar.jsx";

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default RootLayout;