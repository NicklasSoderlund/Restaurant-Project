import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";

export const Nav = ()=>{

    // Function to close navbar on link-click
    function navbarToggle() {
      const checkbox = document.getElementById("hamburgerCheckbox") as HTMLInputElement;
      if (checkbox.checked) {
        (document.getElementById("hamburgerCheckbox") as HTMLInputElement).checked = false;
      }
      else {
        return
      }
    }

    // Navbar HTML
    return (
        <div className="Navigation__container">

            <input type="checkbox" name="" id="hamburgerCheckbox" />

            <span></span>
            <span></span>
            <span></span>

            <nav>        
               <div className="icon__content">  <Link to={"/"}><h3 className="Navigation__Title"> <img className="Navigation__logo" src="https://i.imgur.com/iRTOsEl.png" alt="bull"></img>Jucius Steaksar</h3></Link> </div>
                <ul>
                        <NavLink to={"/"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><li className="Navigation__Link" onClick={navbarToggle}>Home</li></NavLink>
                        <NavLink to={"/Booking"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><li className="Navigation__link" onClick={navbarToggle}>Booking</li></NavLink>
                        <NavLink to={"/Contact"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><li className="Navigation__link" onClick={navbarToggle}>Contact</li></NavLink>
                        <NavLink to={"/Admin"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><li className="Navigation__link" onClick={navbarToggle}>Admin</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}
