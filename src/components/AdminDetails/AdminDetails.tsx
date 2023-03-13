import axios from "axios";
import { ReactEventHandler, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { BookingsContext } from "../../App";
import { Button } from "../styled/Button";
import "./admindetails.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ICustomer } from "../../models/ICustomer";



interface IAdminDetailsProps {
  removeBooking(bookingId:string): void
}

export const AdminDetails= (props: IAdminDetailsProps)=>{
    const { bookingId } = useParams();
    const [customer,setCustomer] = useState<ICustomer>();
    const bookings = useContext(BookingsContext);
    const booking = bookings.find(booking => booking._id === bookingId);
    const [showBookingForm,setshowBookingForm] = useState(false);
    const [updatedBooking, setUpdatedBooking] = useState<{ date: string, time: string, numberOfGuests: number }>({ date: "", time: "", numberOfGuests: 1 });
    const [showCustomerForm,setshowCustomerForm] = useState(false);
    const [updatedCustomer, setupdatedCustomer] = useState<{name:string,lastName:string,email:string,phone:string}>({name:"",lastName:"",email:"",phone:"",});
    async function getCustomerInfo (){
        let response = await axios.get(`https://school-restaurant-api.azurewebsites.net/customer/${booking?.customerId}`)
        setCustomer(response.data[0]);
        return response.data;
       
    }

    useEffect(() => {
        getCustomerInfo();
        
    }, [booking?.customerId]);
    


    const handleBookingSubmit = (event:React.FormEvent<HTMLFormElement>,bookingId:string,customerId:string) => {
      event.preventDefault();
      console.log(`Updated booking: ${bookingId}`);
      const updatedBookingData = {
        id: bookingId,
        restaurantId:"64088bb976187b915f68e167",
        date: updatedBooking.date,
        time: updatedBooking.time,
        numberOfGuests: updatedBooking.numberOfGuests,
        customerId: customerId
      };
    
      axios.put(`https://school-restaurant-api.azurewebsites.net/booking/update/${bookingId}`,updatedBookingData)  
      console.log(updatedBookingData);
      setshowBookingForm(false);
      window.location.reload()
    }

    const handleInputChangeBooking = (event:React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setUpdatedBooking({ ...updatedBooking, [name]: value });
      console.log(updatedBooking);
    };

    const handleInputChangeCustomer = (event:React.ChangeEvent<HTMLInputElement>)=>{
      const { name, value } = event.target;
      setupdatedCustomer({...updatedCustomer,[name]:value})
    };
    
    const handleCustomerSubmit = (event:React.FormEvent<HTMLFormElement>,customerId:string)=>{
      event.preventDefault();
          const updatedCustomerData = {
            id:customerId,
            name:updatedCustomer.name,
            lastname:updatedCustomer.lastName,
            email:updatedCustomer.email,
            phone:updatedCustomer.phone,
          }
          console.log(updatedCustomerData);
          axios.put(`https://school-restaurant-api.azurewebsites.net/customer/update/${customerId}`,updatedCustomerData);
          setshowCustomerForm(false);
          window.location.reload()
        };


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
        <div className="updateBookingButtonContainer">
        <Button border="" color="#C67B47" width="250px" textColor="white" onClick={()=>{  if (showBookingForm) {
          setshowBookingForm(false);
            } else {
           setshowBookingForm(true);
            }
        }}>Update Bookingdetails</Button>
        </div>
        {showBookingForm?<div className="updateBookingContainer">
        <form onSubmit={(event) => handleBookingSubmit(event, booking._id,booking.customerId)}>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" required name="date" onChange={handleInputChangeBooking}></input>
          <label htmlFor="time">Seating:</label>
          <input type="radio" id="time1" name="time" value="18:00" required  onChange={handleInputChangeBooking}></input>
          <label htmlFor="time1">18:00</label>
          <input type="radio" id="time2" name="time" value="21:00" required onChange={handleInputChangeBooking}></input>
          <label htmlFor="time2">21:00</label>
          <label htmlFor="numPeople">Guests</label>
          <input type="number" id="numPeople" min="1" max="6" name="numberOfGuests" onChange={handleInputChangeBooking}></input>
          <Button type="submit" border="1px solid white" color="green" width="250px" textColor="white"> Update</Button>
          <Button type="button" border="1px solid white" color="red" width="250px" textColor="white" onClick={()=>{setshowBookingForm(false);
          console.log(`Cancelled update on: ${booking._id}`)}}> Cancel</Button>
          </form>
        </div>:null}
        </div>
        <div className="bookingDetailsCustomer"> <h3>Customer Details</h3>
        <p>Customer id: {booking.customerId}</p>
        <p>Firstname: {customer?.name} </p>
        <p>Lastname: {customer?.lastname} </p>
        <p>Email: {customer?.email}</p>
        <p>Phone: {customer?.phone}</p>
        <div className="updateCustomerButtonContainer">
        <Button border="" color="#C67B47" width="250px" textColor="white" onClick={()=>{  
          if (showCustomerForm) {
          setshowCustomerForm(false);
            } else {
              setshowCustomerForm(true);
            }
        }}>Update Bookingdetails</Button>
        </div>
        {showCustomerForm?<div className="updateCustomerContainer">
          <form onSubmit={(event) => handleCustomerSubmit(event, booking.customerId)}>
          <label htmlFor="firstName">Firstname:</label>
          <input type="text" id="firstName" required placeholder={customer?.name} name="name" onChange={handleInputChangeCustomer}/>
          <label htmlFor="lastName">Lastname:</label>
          <input type="text " id="lastName" required placeholder={customer?.lastname} name="lastName" onChange={handleInputChangeCustomer}/>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required placeholder={customer?.email} name="email" onChange={handleInputChangeCustomer}/>
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" required placeholder={customer?.phone} name="phone" onChange={handleInputChangeCustomer}/>
          <Button type="submit" border="1px solid white" color="green" width="250px" textColor="white"> Update</Button>
          <Button type="button" border="1px solid white" color="red" width="250px" textColor="white" onClick={()=>{setshowCustomerForm(false);
          console.log(`Cancelled update on: ${customer?.id}`)}}> Cancel</Button>
          </form>
        </div>:null}
        </div>
        <div className="buttonContainer">
    <Link to="/admin">   <Button border="" color="#C67B47" width="250px" textColor="white" onClick={()=>{ console.log("Booking" ,booking._id ,"removed");
                axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/${booking._id}`);
                props.removeBooking(bookingId as string);
                }}>Remove booking</Button>  </Link> 
                </div>
      </div>
    );
  }
