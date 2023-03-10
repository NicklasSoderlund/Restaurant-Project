import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { Link, Route, useNavigate, useParams } from "react-router-dom";
import { BookingsContext } from "../../App";
import { IBooking } from "../../Services/fetchBookings";
import { AdminDetails } from "../AdminDetails/AdminDetails";
import { Button } from "../styled/Button";
import "./admin.scss";


export function Admin() {
    const navigate = useNavigate();
    const [contextBookings,setContextBookings] = useState<IBooking[]>([]);
    const Bookings = useContext(BookingsContext);

    
    useEffect(() => {
        setContextBookings(Bookings);
      }, [Bookings]);

    return (
        
        <div className="BookingsContainer">
            {contextBookings.map((booking)=>(
                <Link key={booking._id} to={`/admin/${booking._id}`}>
                <div key={booking._id} className="bookingcontainer" onClick={()=>{
                console.log(booking._id)
                }}>
                <p>Booking id: {booking._id}</p>
                <p>Date: {booking.date}</p>
                <p>Time: {booking.time}</p>
                <p>Guests: {booking.numberOfGuests}</p>
                <Button color="#C67B47" width="250px" textColor="white" onClick={()=>{ navigate(`/admin/${booking._id}`)
                }}>More Details</Button>  
          
            </div>
            </Link>

            ))}
        </div>
    )
}