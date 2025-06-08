import { LOGO_URL } from "../utils/constants";
import {useState} from "react";

const Header=() => {
   const [onClickOfSignin, setOnClickOfSignin]= useState(("signin"));

    return (
       <><div className="header-for-nomnow">
           
          <div className="logo-img">
             <img 
             className="logo" 
             src= {LOGO_URL}
             alt="nomnow logo" />
          </div>
       
       <div className="nav-items">
         
          
          <ul>
          <li>Home</li>
             <li>Contact Us</li>
             <li>NomNow Corporate</li>
             <li>Partner with us</li>
             <li>Get the app</li>
             <li>🛒</li>
             <button className="signin-header"
              onClick={()=> { 
               {onClickOfSignin=== "signin" ? setOnClickOfSignin("signout") : setOnClickOfSignin("signin")}
           
             } }
             >
              {onClickOfSignin}
      
       </button>
             
          </ul>
 
       </div>
       </div>
       </>
    );
 };

 export default Header;