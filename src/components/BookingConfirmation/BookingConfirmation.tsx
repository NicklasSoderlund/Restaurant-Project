import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Button } from "../styled/Button"
import "./bookingConfirmation.scss"

interface IBookingConfirmationProps {
    bookingId:string
}


export function BookingConfirmation(props:IBookingConfirmationProps) {
 

    const [loadingCustomer,setloadingCustomer] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false)

    useEffect(() => {
        setloadingCustomer(true);
          setTimeout(() => {
            setloadingCustomer(false);
            setShowConfirmation(true);
          
          }, 1000);
    }, [])

    return (
    <section> 

<div className="loadingContainer">
        {loadingCustomer?<div className="lds-dual-ring"></div>:null}
        </div>

{showConfirmation ?
      <div className="bookingConfirmation">
      <h4>Booking Confirmation</h4>
       <span>Thank you for your reservation!</span>
       <span>Your Booking ID:</span>
       <span>{props.bookingId}</span>
   
     <Link to={"/"}>   <Button border="" color="" width="15em" textColor="">Return to start</Button> </Link>
       
       </div>
       : <div></div>
}


      


  
    </section>)
}