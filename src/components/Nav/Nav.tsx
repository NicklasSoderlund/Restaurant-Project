import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = ()=>{

    
    return (
        <div className="Navigation__container">
            <nav>        
                 <Link to={"/"}><h3 className="Navigation__Title"> <img className="Navigation__logo" src="https://i.imgur.com/iRTOsEl.png" alt="bull"></img>Jucius Steaksar</h3></Link>
                <ul>
                        <Link to={"/"}><li className="Navigation__Link">Home</li></Link>
                        <Link to={"/Booking"}><li className="Navigation__link">Booking</li></Link>
                        <Link to={"/Contact"}><li className="Navigation__link">Contact Us</li></Link>
                        <Link to={"/Admin"}><li className="Navigation__link">Admin</li></Link>
                </ul>
            </nav>
        </div>
    )
}
