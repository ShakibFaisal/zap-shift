import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Authpage/Login";
import Registration from "../pages/Authpage/Registration";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivetRoute from "../routes/PrivetRoute"
import DashBoardLayout from "../layout/DashBoardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
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
        },{
          path:"send-parcel",
          element:<PrivetRoute> <SendParcel></SendParcel></PrivetRoute>,
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
  },
  {
    path:"dashboard",
    element:<PrivetRoute><DashBoardLayout></DashBoardLayout></PrivetRoute>,
    children:[{
      path:"my-parcels",
      Component:MyParcels
    }]
  }
]);