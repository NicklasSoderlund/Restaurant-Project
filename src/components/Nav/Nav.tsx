import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";

export const Nav = ()=>{

    
    return (
        <div className="Navigation__container">
            <nav>        
                 <Link to={"/"}><h3 className="Navigation__Title"> <img className="Navigation__logo" src="https://i.imgur.com/iRTOsEl.png" alt="bull"></img>Jucius Steaksar</h3></Link>
                <ul>
                        <NavLink to={"/"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><li className="Navigation__Link">Home</li></NavLink>
                        <NavLink to={"/Booking"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><li className="Navigation__link">Booking</li></NavLink>
                        <NavLink to={"/Contact"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><li className="Navigation__link">Contact Us</li></NavLink>
                        <NavLink to={"/Admin"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><li className="Navigation__link">Admin</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}
