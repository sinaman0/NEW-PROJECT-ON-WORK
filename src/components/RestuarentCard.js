import { CDN_URL } from "../utils/constants";

const RestuarentCard = (props) => {
  // const { resData } = props;
  return(
     <div className="res-card"> 
     <img className = "res-logo" src={
      
      CDN_URL + props.resData.info.cloudinaryImageId
     } />
       
        <h3>{props.resData.info.name}</h3>

        <h4>{props.resData.info.cuisines.join(", ")}</h4>
        <h4>⭐ {props.resData.info.avgRating} Ratings</h4>
        <h4>{props.resData.info.areaName}</h4>
        <h4>{props.resData.info.sla.slaString}</h4>
     </div>
  )
}

export default RestuarentCard;