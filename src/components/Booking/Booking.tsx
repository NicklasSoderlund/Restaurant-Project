import React, { useState } from 'react';
import './booking.scss';

interface BookingFormProps {}

function BookingForm(props: BookingFormProps): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numPeople, setNumPeople] = useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className='Booking'>
      <h2>Book a table!</h2>
      <h3>Please notice that you can only book up to 6 person per reservation.</h3>
    <div className='FormContainer'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Namn:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="date">Datum:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <div className='timeContainer'>
      <label htmlFor="numPeople">Antal gäster:</label>
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

      <label htmlFor="time">Tid:</label>
      <input type="radio" id="time1" name="time" value="18:00" checked={time === "18:00"} onChange={(e) => setTime(e.target.value)} />
      <label htmlFor="time1">18:00</label>
      <input type="radio" id="time2" name="time" value="21:00" checked={time === "21:00"} onChange={(e) => setTime(e.target.value)} />
      <label htmlFor="time2">21:00</label>
      </div>
      <br></br>
      <button type="submit">Book a table</button>
    </form>
    </div>
    </section>
  );
}

export function Booking(): JSX.Element {
  return <BookingForm />;
}
