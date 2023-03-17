import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../styled/Button";
import "./bookingRemoved.scss";


export function BookingRemoved() {
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
    <section className="removedPageContainer"> 

<div className="loadingContainer">
        {loadingConfirmation?<div className="lds-dual-ring"></div>:null}
        </div>

{showConfirmation ?
      <div className="bookingConfirmation">
      <h4>Booking Has been removed</h4>
       
     <Link to={"/admin"}>   <Button border="" color="" width="15em" textColor="">Return to Admin</Button> </Link>
       
       </div>
       : <div></div>
}


      


  
    </section>)
}