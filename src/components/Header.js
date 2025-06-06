import { LOGO_URL } from "../utils/constants";

const Header=() => {
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
             <li>Signin</li>
             <li>🛒</li>
             
          </ul>
 
       </div>
       </div>
       </>
    );
 };

 export default Header;