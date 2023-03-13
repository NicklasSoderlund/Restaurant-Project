import "./bookingConfirmation.scss"

interface IBookingConfirmationProps {
    bookingId:string
}


export function BookingConfirmation(props:IBookingConfirmationProps) {
 


    return (
    <section> 

   <div className="bookingConfirmation">
   <h4>Booking Confirmation</h4>
    <span>Thank you for your reservation!</span>
    <span>Your Booking ID:</span>
    <span>{props.bookingId}</span>
    
    </div>
  
    </section>)
}