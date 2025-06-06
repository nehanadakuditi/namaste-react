import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body=() => {
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    const handleFilter=()=>{
      console.log("Button clicked!");
      const filteredList = listOfRestaurants.filter(
         (res) => parseFloat(res.info.avgRating) > 4
      
      );
      setListOfRestaurants(filteredList);
    }

    return (
       <div className="body-for-nomnow">
           <div className="filter">
              <button className="filter-btn"
                onClick = {handleFilter}
              >Top Rated Restaurants</button>
           </div>
           <div className="restro-container">
              {listOfRestaurants.map((restaurant)=> (
               <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
 
              ))
             }
            
           </div>
 
 
       </div>
 
 
    );
 
 
 };

 export default Body;
