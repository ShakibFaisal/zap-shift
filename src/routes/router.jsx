import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Authpage/Login";
import Registration from "../pages/Authpage/Registration";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index:true,
            Component:Home
        },{
          path:'/coverage',
          Component:Coverage,
          loader:()=>fetch("/warehouses.json").then(res=>res.json())
        }
    ]
  },{
    path: "/",
    Component:AuthLayout,
    children:[
      {
        path:"login",
        Component:Login
      },{
        path:"registration",
        Component:Registration
      }
    ]
  }
]);