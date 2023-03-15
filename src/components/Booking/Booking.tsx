import React, { useContext, useEffect, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { BookingsContext } from '../../App';
import { createBooking } from '../../Services/createBookings';
import { fetchBookings, IBooking } from '../../Services/fetchBookings';
import { BookingConfirmation } from '../BookingConfirmation/BookingConfirmation';
import { Button } from '../styled/Button';
import './booking.scss';
import steakVideo from './Assets/steakVideo.mp4';
import axios from 'axios';
import { CancelBookingConfirmation } from '../CancelBookingConformation/CancelBookingConfirmation';

// interface BookingFormProps {}

// function BookingForm(props: BookingFormProps): JSX.Element
interface IBookingProps {
  removeBooking(bookingId:string): void,
}

export function Booking(props:IBookingProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numPeople, setNumPeople] = useState(1);

  const bookings = useContext(BookingsContext);
  const [earlySeating, setEarlySeating] = useState(0);
  const [lateSeating, setLateSeating] = useState(0);
  const [tableAvailable, setTableAvailable] = useState(<div></div>);

  const [bookingId, setBookingId] = useState('');

  const tableAvailableHtml = <div className='tableAvailable'>Tables are available at this time!</div>
  const tableNotAvailableHtml = <div className='tableNotAvailable'>No tables are available at this time!</div>

  const [effectTrain, setEffectTrain] = useState(false)

  const [cancelBookingId, setCancelBookingId] = useState("");



   useEffect(() => {
    function checkBookingAvailability(userDate:string ) {
      let earlyCounter = 0
      let lateCounter = 0
   for (let i = 0; i < bookings.length; i++) {
  
     if(bookings[i].date === userDate) {
         if (bookings[i].time === "18:00") {
           earlyCounter++
         }
         else {
           lateCounter++
         }
     }
   }
   setEarlySeating(earlyCounter);
   setLateSeating(lateCounter);
  }
  checkBookingAvailability(date);
  setEffectTrain(!effectTrain)

   },[date, time])
  


useEffect(() => {
  function displayEarlyAvailability() {

let timeEarly =  document.getElementById("time1") as HTMLInputElement
let timeLate =  document.getElementById("time2") as HTMLInputElement
let bookingSubmitButton =  document.getElementById("bookingSubmitButton") as HTMLButtonElement
if (timeEarly.checked === true) {
  if (earlySeating < 15) {
    setTableAvailable(tableAvailableHtml)
    bookingSubmitButton.disabled = false;
 }
 else {
   setTableAvailable(tableNotAvailableHtml);
   bookingSubmitButton.disabled = true;
 }
}

if (timeLate.checked === true) {
  if (lateSeating < 15) {
    bookingSubmitButton.disabled = false;
    setTableAvailable(tableAvailableHtml)
 }
 else {
  bookingSubmitButton.disabled = true;
   setTableAvailable(tableNotAvailableHtml);
 }
}
}
if (date) {
  displayEarlyAvailability();
}

}, [effectTrain])




  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const getBookingId = async () => {
      let booking = await createBooking(date, time, numPeople, firstName, lastName, email, phone);
      setBookingId(booking.insertedId);
    }
    getBookingId();

  };

  function changeShowCanceled() {
    setShowBookingCanceled(false);
  }
  
  let inputField = document.getElementById("bookingIdInput")
  const [showBookingCanceled, setShowBookingCanceled] = useState(false);
  const [showError, setShowError] = useState(false);
function handleCancelation(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()

  if (bookings.find(booking => booking._id === cancelBookingId)) {
    axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/${cancelBookingId}`);
    props.removeBooking(cancelBookingId as string);
    setShowBookingCanceled(true);
    setShowError(false);
  }

 else {
  setShowError(true);
 }

}


  return (
    <>
  
    <section className='Booking'>

      <section className='fiftyPercent'>
      {bookingId ? <BookingConfirmation bookingId={bookingId}></BookingConfirmation> :
      <div>
   
      <h2>Book a table!</h2>
      <h3>Please notice that you can only book up to 6 people per reservation.</h3>
    <div className='FormContainer'>
    <form onSubmit={handleSubmit}>
      
      <input type="text" id="firstName" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

      <input type="text" id="lastName" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
       
      <input type="string" id="phone" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <input type="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <div className='timeContainer'>
      <label htmlFor="numPeople">Amount of guests:</label>
      <input type="number" id="numPeople" value={numPeople} onChange={(e) => {
          const value = Number(e.target.value);
          if (value >= 1 && value <= 6) {
          setNumPeople(value);
    }
  }} 
  required 
  min="1" 
  max="6"
/>

      <label htmlFor="time">Seating:</label>
      <input type="radio" id="time1" name="time" value="18:00" checked={time === "18:00"} onChange={(e) => setTime(e.target.value)} />
      <label htmlFor="time1">18:00</label>
      <input type="radio" id="time2" name="time" value="21:00" checked={time === "21:00"} onChange={(e) => setTime(e.target.value)} />
      <label htmlFor="time2">21:00</label>
      </div>
   
      {tableAvailable}
      <br></br>
    <button id='bookingSubmitButton' type="submit">Book a table</button> 
    </form>
    </div>
       
    </div>
    
}
</section>
<section className='fiftyPercent'>
   <div className='cancelBooking'>

    {showBookingCanceled ? <CancelBookingConfirmation changeShowCanceled={changeShowCanceled}></CancelBookingConfirmation>
    :

    <div className='cancelBookingContent'>
         <h3>Change of plans?</h3>
         <p>Enter your Booking ID here to Cancel your reservation</p>

         <form action="" onSubmit={handleCancelation}>
          <label htmlFor="bookingIdInput">Booking ID:</label>
          <input type="text" id="bookingIdInput" value={cancelBookingId} onChange={(e) => setCancelBookingId(e.target.value)}/>
          {showError ? <div className='bookingNotFound'> Booking Not Found! </div> : null }
          <Button type='submit' border='' color='' textColor='' width='15em' >Cancel Reservation</Button>
         </form>
    </div>
}
   </div>



    </section>

    </section>
    <div className='bookingVideoContainer'>
            <video autoPlay loop muted playsInline width={"100%"} height={"auto"}>
                <source src={steakVideo} type="video/mp4" />
            </video>
        </div>
    </>
  );
 
}

// export function Booking(): JSX.Element {
//   return <BookingForm />;
// }
