import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";


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
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
