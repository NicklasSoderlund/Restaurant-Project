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
      <h3>Please notice that we only offer two different sittings per day. </h3>
    <div className='FormContainer'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Namn:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="date">Datum:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label htmlFor="time">Tid:</label>
      <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />

      <label htmlFor="numPeople">Antal gäster:</label>
      <input type="number" id="numPeople" value={numPeople} onChange={(e) => setNumPeople(Number(e.target.value))} required />
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
