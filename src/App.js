import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Cont from "./components/Contact";
import ErrorPage from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Menu from "./components/RestuarentMenu";


// App Layout


// *Header
//     - Logo
//     - Nav Items (Right side)
// *Body
//       -Search Bar
//       -RestuarentContainer
//           -restuarentCard
//               -Image
//               -Name
//               -Cusine
//               -Rating
// *Footer  
        // -Copyright Info
        // -Links
        // -Address
        // -Contact Info


const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <AppLayout />,
  errorElement:<ErrorPage />,
  children: [
{    
    path: "/",
  element: <Body/>,
}, 
{
  path: "/about",
  element: <About />,
},
{
  path:"/contact",
  element:<Cont />,
},

{
  path:"/menu",
  element:<Menu />,
},
  ]
  
},


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
