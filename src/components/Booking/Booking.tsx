import React, { useContext, useEffect, useState } from 'react';
import { BookingsContext } from '../../App';
import { createBooking } from '../../Services/createBookings';
import { fetchBookings, IBooking } from '../../Services/fetchBookings';
import './booking.scss';

interface BookingFormProps {}

function BookingForm(props: BookingFormProps): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
const [timeAvailable, setTimeAvailable] = useState(true);
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numPeople, setNumPeople] = useState(1);


  const bookings = useContext(BookingsContext);
  const [earlySeating, setEarlySeating] = useState(0);
  const [lateSeating, setLateSeating] = useState(0);
  const [tableAvailable, setTableAvailable] = useState(<div></div>);

  const tableAvailableHtml = <div className='tableAvailable'>Tables are available at this time!</div>
  const tableNotAvailableHtml = <div className='tableNotAvailable'>Tables are not available at this time!</div>

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

   },[date, time])
  


useEffect(() => {
  function displayEarlyAvailability() {
  //   if (earlySeating < 15) {
  //      setTableAvailable(tableAvailableHtml)
  //      console.log(earlySeating);
  //   }
  //   else {
     
  //     setTableAvailable(tableNotAvailableHtml);
  //   }
  // }
  // function displayLateAvailability() {
  //   if (lateSeating < 15) {
  //      setTableAvailable(tableAvailableHtml)
  //   }
  //   else {
      
  //     setTableAvailable(tableNotAvailableHtml);
  //   }
  // }

let timeEarly =  document.getElementById("time1") as HTMLInputElement
let timeLate =  document.getElementById("time2") as HTMLInputElement
let bookingSubmitButton =  document.getElementById("bookingSubmitButton") as HTMLButtonElement
if (timeEarly.checked === true) {
  if (earlySeating < 15) {
    setTableAvailable(tableAvailableHtml)
    console.log(earlySeating);
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
displayEarlyAvailability();
}, [time])




  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createBooking(date, time, numPeople, firstName, lastName, email, phone);
  };



  return (
    <section className='Booking'>
      <h2>Book a table!</h2>
      <h3>Please notice that you can only book up to 6 person per reservation.</h3>
    <div className='FormContainer'>
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
       
      <label htmlFor="phone">Phone:</label>
      <input type="string" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="date">Date:</label>
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

    
    </section>
  );
}

export function Booking(): JSX.Element {
  return <BookingForm />;
}
