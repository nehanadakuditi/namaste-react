import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const { cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      deliveryTime,
      costForTwo
              } = resData?.info;

    return (
     <div className="restro-card" style={{backgroundColor: "#F8F1E9"}}>
        <img className="img" src={CDN_URL+resData.info.cloudinaryImageId }
        alt="logo-img">
        </img>
        <h3> {name} </h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars </h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
     </div>

    );
};

export default RestaurantCard;