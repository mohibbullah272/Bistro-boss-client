import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Page/Home/Home/Home";
import Menu from "../Page/Menu/Menu/Menu";
import Order from "../Page/OrderFood/Order/Order";
import SignUp from "../Page/SignUp/SignUp";
import SignIn from "../Page/SignIn/SignIn";
import Dashboard from "../Page/dashboard/dashboard/dashboard";
import MyCart from "../Page/dashboard/dashboard/cart/MyCart";
import User from "../Page/dashboard/dashboard/User";
import PrivetRoute from "./PrivetRoute";
import AdminRoute from "./AdminRoute";
import AddItem from "../Page/dashboard/dashboard/additem/AddItem";
import MangeItem from "../Page/dashboard/dashboard/ManageItem/MangeItem";
import Payment from "../Page/dashboard/dashboard/Payment/Payment";
import PaymentHistory from "../Page/dashboard/dashboard/paymentHistory/PaymentHistory";


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
    },
    {
        path:"/dashboard",
        element:<PrivetRoute>
            <Dashboard></Dashboard>
        </PrivetRoute>,
        children:[
            {
                path:'cart' ,
                element:<MyCart></MyCart>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            },
            {
                path:"history",
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:'user',
                element:<AdminRoute>
                    <User></User>
                </AdminRoute>
            },
            {
                path:'addItem',
                element:<AddItem></AddItem>
            },
            {
                path:'manageItem',
                element:<MangeItem></MangeItem>
            }
        ]
    }  
])