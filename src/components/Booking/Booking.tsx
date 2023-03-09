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
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label htmlFor="time">Time:</label>
      <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />

      <label htmlFor="numPeople">Number of people:</label>
      <input type="number" id="numPeople" value={numPeople} onChange={(e) => setNumPeople(Number(e.target.value))} required />

      <button type="submit">Book table</button>
    </form>
  );
}

export function Booking(): JSX.Element {
  return <BookingForm />;
}
