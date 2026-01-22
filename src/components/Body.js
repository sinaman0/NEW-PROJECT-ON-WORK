import RestuarentCard from "./RestuarentCard";
//import resList from "../utils/mockData";  
import { useEffect, useState } from "react";  


const Body = () =>{
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

useEffect(()=> {

fetchData();

},[]);

const fetchData = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();
  console.log(json);
  // optional chaining
  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
}

  return (
  <div className="body">
     <div className="filter"> 
         <button className="filter-btn" onClick={()=>{
            const filtered = listOfRestaurants.filter((res)=> res.info.avgRating > 4.3);
            setListOfRestaurants(filtered);
             console.log(filtered);
         }}>Top Rated restaurant</button>
        
       </div>
     <div className="res-container">
        
         {listOfRestaurants.map((restaurant) => 
          (<RestuarentCard key={restaurant.info.id} resData = {restaurant}/>))}
         
     </div>
  </div>
)
};
export default Body; 