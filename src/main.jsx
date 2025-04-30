import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {router} from "./Router/Routes.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";


createRoot(document.getElementById('root')).render(
   <AuthProvider>
       <RouterProvider router={router} />
   </AuthProvider>
)
