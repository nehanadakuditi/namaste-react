import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import shimmerUI from "./ShimmerUI";
import Shimmer from "./ShimmerUI";

const Body=() => {
    const [listOfRestaurants , setListOfRestaurants] = useState([]);
    const [searchText, setSearchText]= useState("");
    useEffect(()=>{
       //fetchData();
       setListOfRestaurants(resList);    
    },
    
    [])
     
    const handleFilter=()=>{
      console.log("Button clicked!");
      const filteredList = listOfRestaurants.filter(
         (res) => parseFloat(res.info.avgRating) > 4
      );
      //setListOfRestaurants(filteredList);
    }
    const fetchData= async() =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5036955&lng=80.6290471&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
      const json= await data.json;
      //setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRestaurants(resList);    
    }
    return listOfRestaurants.length===0 ? (< Shimmer />) : (
       <div className="body-for-nomnow">
         <div className="both-func">
         <div className="filter">
               <input type="text"
               className="search-box"
               value={searchText}
                  onChange={(e)=>{
                   setSearchText(e.target.value);
                  }}>
               </input>
               <button className="search-for-nomnow"
               onClick= {( ) =>{
                  
                  const searchFilteredList= resList.filter(
                     (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase().trim())
                  );
                  setListOfRestaurants(searchFilteredList);

               }}
               > 
                  search
                  </button> 
               <button className="go-back" 
                        onClick={() =>{
                     setListOfRestaurants(resList);
               
                 }}
                  >
                    back
               </button>
            </div>
            <div className="filter-option">
            <button className="filter-btn"
                onClick = {handleFilter}
              >Top Rated Restaurants</button>
            </div>
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
