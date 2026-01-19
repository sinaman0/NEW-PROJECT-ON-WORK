import RestuarentCard from "./RestuarentCard";
import resList from "../utils/mockData";    


const Body = () => (
  <div className="body">
     <div className="search"> Search </div>
     <div className="res-container">
        
         {resList.map((restaurant) => 
          (<RestuarentCard key={restaurant.info.id} resData = {restaurant}/>))}
         
     </div>
  </div>
)
export default Body; 