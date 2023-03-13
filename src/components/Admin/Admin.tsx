import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { BookingsContext } from "../../App";
import { IBooking } from "../../Services/fetchBookings";
import { Button } from "../styled/Button";
import "./admin.scss";
import 'react-toastify/dist/ReactToastify.css';

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
                <Button border="" color="#C67B47" width="250px" textColor="white" onClick={()=>{ navigate(`/admin/${booking._id}`)
                }}>More Details</Button>  
              
            </div>
            </Link>
           
            ))}
            <ToastContainer autoClose={7000}></ToastContainer>
        </div>
    )
}