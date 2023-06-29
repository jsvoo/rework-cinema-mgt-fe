import { useNavigate } from "react-router-dom";
import logo from "../assets/images/EVENTBUX.png";
import { useContext } from "react";
import { variableManager } from "../contexts/VariablesContext";


export default function MainNavBar() {
  const navigate = useNavigate()
  const {user} = useContext(variableManager)
  return (
    <div className="banner-bg main-navigation-container">
      <div className="nav_header_homepage">
        <nav className="main-nav">
          <div className="logo-section">
            <img className="logo-image" src={logo} alt="logo" />
          </div>

          {
            user?(
              <div className="links-section"> 
              <button className="login" onClick={()=>navigate("/auth/login")} >Profile</button>
              <button className="signup" onClick={()=>navigate("/auth/register")}>Logout</button>
            </div>
            ):( 
              <div className="links-section"> 
              <button className="login" onClick={()=>navigate("/auth/login")} >Login</button>
              <button className="signup" onClick={()=>navigate("/auth/register")}>Sign up</button>
            </div>
            )
          }
         
        </nav>
      </div>
    </div>
  );
}
