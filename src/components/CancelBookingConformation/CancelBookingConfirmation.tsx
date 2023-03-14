import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../styled/Button";

interface ICancelBookingConfirmationProps {
    changeShowCanceled():void
}

export function CancelBookingConfirmation(props:ICancelBookingConfirmationProps) {
    const [loadingConfirmation,setloadingConfirmation] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false)

    useEffect(() => {
        setloadingConfirmation(true);
          setTimeout(() => {
            setloadingConfirmation(false);
            setShowConfirmation(true);
          
          }, 1000);
    }, [])

    return (
        <section> 
    
    <div className="loadingContainer">
            {loadingConfirmation?<div className="lds-dual-ring"></div>:null}
            </div>
    
    {showConfirmation ?
          <div className="bookingConfirmation">
          <h4>Reservation has been canceled</h4>
          <p>You can always make a new one for another time!</p>
          
       
         <Button border="" color="" width="15em" textColor="" onClick={props.changeShowCanceled}>Return</Button> 
           
           </div>
           : <div></div>
    }
    
    
          
    
    
      
        </section>)
}