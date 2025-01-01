import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Page/Home/Home/Home";
import Menu from "../Page/Menu/Menu/Menu";
import Order from "../Page/OrderFood/Order/Order";
import SignUp from "../Page/SignUp/SignUp";
import SignIn from "../Page/SignIn/SignIn";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'menu',
                element:<Menu></Menu>
            },
            {
                path:'order/:category',
                element:<Order></Order>
            }
        ]
        
    },
    {
        path:'/signUp',
        element:<SignUp></SignUp>
    },
    {
        path:'/signIn',
        element:<SignIn></SignIn>
    }
])