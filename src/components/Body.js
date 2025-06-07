import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";

const Body=() => {
    const [listOfRestaurants , setListOfRestaurants] = useState([]);
    useEffect(()=>{
       fetchData();
    },
    
    [])
     
    const handleFilter=()=>{
      console.log("Button clicked!");
      const filteredList = listOfRestaurants.filter(
         (res) => parseFloat(res.info.avgRating) > 4
      );
      setListOfRestaurants(filteredList);
    }
    const fetchData= async() =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5036955&lng=80.6290471&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
      const json= await data.json;
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]?.info);
      //setListOfRestaurants(resList);
        
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
