import RestuarentCard from "./RestuarentCard";
//import resList from "../utils/mockData";  
import { useEffect, useState } from "react";  
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{

const [searchText, setSearchText] = useState("");

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  

useEffect(()=> {

fetchData();

},[]);

const fetchData = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();
  console.log(json);
  // optional chaining
  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
  setFilteredRestaurants( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
};

// if(listOfRestaurants.length === 0) {{
//     return <Shimmer />;
//   }
// }
if (!listOfRestaurants || listOfRestaurants.length === 0) {
  return <Shimmer />;
}


  return (
  <div className="body">
     <div className="filter"> 
       <div className="search">
        <input type="text" className="search-box" placeholder="Search for restaurants..." value={searchText}
         onChange={(e)=>{
           setSearchText(e.target.value);
        }}
        />

        <button className="search-btn" 
        // filter the restaurant cards based on search text and update the UI
        onClick={()=>{
           console.log(searchText);
           const filtered = listOfRestaurants.filter((res) => res.info.name
          .toLowerCase()
           .includes(searchText.toLowerCase())
            );
           
            setFilteredRestaurants(filtered);
        }}

        >Search</button>
       </div>
         <button className="filter-btn" onClick={()=>{
            const filtered = listOfRestaurants.filter((res)=> res.info.avgRating > 4.5);
            setFilteredRestaurants(filtered);
             console.log(filtered);
         }}>Top Rated restaurant</button>
        
       </div>
     <div className="res-container">
        
         {filteredRestaurants.map((restaurant) => 
          (
          
         <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
         <RestuarentCard resData = {restaurant}/></Link>))}
         
     </div>
  </div>
)
};
export default Body; 