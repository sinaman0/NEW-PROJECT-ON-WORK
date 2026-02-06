// import { useState,useEffect } from "react";
// const Menu = () => {

//     const[resInfo, setResInfo] = useState(null);
   
     
//  useEffect(()=>{
//       fetchMenu();

//     },[]);
 







// const fetchMenu = async () => {
//   try {
//     const response = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=378311&catalog_qa=undefined&submitAction=ENTER"
//     );

//     const text = await response.text();
//     if (!text) return;

    

//     const json = JSON.parse(text);
//     console.log(json);

//     setResInfo(json); // ✅ CORRECT
    
//   } catch (err) {
//     console.error(err);
//   }
  
// };


//     // if (!resInfo) return <div>Loading...</div>;
//     // const {name, cuisines,costForTwo} = resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

//     const {name, city, costForTwo, cuisines} = resInfo?.data?.cards[2]?.card?.card?.info || {};


//    // console.log(setResInfo);
    
//     //   const {itemsCard} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    
//     return(
//         <div>
//             <h1>This is Menu Component resInfo {name}</h1>
//              <h2>Menus </h2>
//              <h3>Cost for Two {costForTwo}</h3>
//              <h4>City: {city}</h4>
//              <h4>Cuisines: {cuisines?.join(", ")}</h4>
            
           


//        </div>
//     )
// }

// export default Menu;

import { useState, useEffect } from "react";
import { MOCK_RESTAURANT_DATA } from "../utils/mockData";

const Menu = () => {
  const [resInfo, setResInfo] = useState();
  
 

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const apiUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=378311&catalog_qa=undefined&submitAction=ENTER";
    
    //   const data = await fetch(apiUrl);
    //   const pson = await data.json();
    //   console.log(pson);
    //   setResInfo(pson);
console.log(MOCK_RESTAURANT_DATA);
    setResInfo(MOCK_RESTAURANT_DATA);
  };


  const { name, city, costForTwo, cuisines } = 
    resInfo?.data?.cards[0]?.card?.card?.info || {};

   // Correct path to access itemCards
const itemCards = 
  resInfo?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.itemCards || [];

console.log(itemCards);

  return (
    <div>
      <h1>Restaurant: {name || 'N/A'}</h1>
      <h3>Cost for Two: {costForTwo || 'N/A'}</h3>
      <h4>City: {city || 'N/A'}</h4>
      <h4>Cuisines: {cuisines?.join(", ") || 'N/A'}</h4>
      <h5>Menu Items: </h5>

       <hr />
      
      <h2>Menu ({itemCards.length} items)</h2>
      {itemCards.length > 0 ? (
        <div>
          {itemCards.map((item) => (
            <div 
              key={item.card.info.id} 
              style={{ 
                border: "1px solid #ddd", 
                padding: "15px", 
                marginBottom: "10px",
                borderRadius: "8px"
              }}
            >
              <strong style={{ fontSize: "18px" }}>{item.card.info.name}</strong>
              <span style={{ float: "right", color: "green", fontWeight: "bold" }}>
                ₹{item.card.info.price / 100}
              </span>
              <p style={{ color: "#666", marginTop: "5px" }}>{item.card.info.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No menu items available</p>
      )}
    </div>
    
    
  );
};

export default Menu;