import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer = ()=> {

    return (

      
        <footer>
        <div>
            <h4><i className="fa-regular fa-copyright"></i> Jucius Steaksar</h4>
        </div>
<div className="links">
    <ul> <h5>Social Media</h5>
    <a href='https://www.instagram.com/'><li> <i className="fa-brands fa-instagram"></i> Instagram</li></a>
    <a href='https://www.Facebook.com/'><li> <i className="fa-brands fa-facebook-f"></i> Facebook</li></a>
    <a href='https://www.Twitter.com/'><li><i className="fa-brands fa-twitter"></i> Twitter</li></a>
    </ul>
<ul><h5>Quick Links</h5> 

<Link to={"/Booking"}><li>Booking</li></Link>
<Link to={"/Contact"}><li>Contact Us</li></Link>
<Link to={"/Admin"}><li>Admin</li></Link>
</ul>
<ul> <h5>Find us <i className="fa-solid fa-location-pin"></i></h5>
<li>Juicybeef-Street 69</li>
<li>1354 78</li>
<li>New York</li>
</ul>
</div>
    </footer>
  );
}