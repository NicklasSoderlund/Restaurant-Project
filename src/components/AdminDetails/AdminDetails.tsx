import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { BookingsContext } from "../../App";
import { Button } from "../styled/Button";
import "./admindetails.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ICustomer {
    id:string;
    name:string;
    lastname:string;
    email:string;
    phone:string;
}

interface IAdminDetailsProps {
  removeBooking(bookingId:string): void
}

export const AdminDetails= (props: IAdminDetailsProps)=>{
    const { bookingId } = useParams();
    const [customer,setCustomer] = useState<ICustomer>();
    const bookings = useContext(BookingsContext);
    const booking = bookings.find(booking => booking._id === bookingId);

    async function getCustomerInfo (){
        let response = await axios.get(`https://school-restaurant-api.azurewebsites.net/customer/${booking?.customerId}`)
        setCustomer(response.data[0]);
        return response.data;
       
    }

    useEffect(() => {
        getCustomerInfo();
        
    }, [booking?.customerId]);

    
    


    if (!booking) {
      return <div>Booking not found</div>;
    }
    return (
      <div className="bookingDetailsContainer">
        <div className="bookingDetailsInfo"><h3> Booking Details</h3>
        <p >Booking id: {booking._id}</p>
        <p>Customer id: {booking.customerId}</p>
        <p>Date: {booking.date}</p>
        <p>Time: {booking.time}</p>
        <p>Guests: {booking.numberOfGuests}</p>
        </div>
        <div className="bookingDetailsCustomer"> <h3>Customer Details</h3>
        <p>Firstname: {customer?.name} </p>
        <p>Lastname: {customer?.lastname} </p>
        <p>Email: {customer?.email}</p>
        <p>Phone: {customer?.phone}</p>
        </div>
        <div className="buttonContainer">
    <Link to="http://localhost:3000/Admin">   <Button color="#C67B47" width="250px" textColor="white" onClick={()=>{ console.log("Booking" ,booking._id ,"removed");
                axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/${booking._id}`);
                props.removeBooking(bookingId as string);
                }}>Remove booking</Button>  </Link> 
                </div>
      </div>
    );
  }
