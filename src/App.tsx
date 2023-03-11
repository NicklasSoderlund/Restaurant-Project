import React, { createContext, useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartPage } from './components/StartPage/Startpage';
import { Booking } from './components/Booking/Booking';
import { Contact } from './components/Contact/Contact';
import { Admin } from './components/Admin/Admin';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';
import { fetchBookings, IBooking } from './Services/fetchBookings';
import { AdminDetails } from './components/AdminDetails/AdminDetails';

interface IBookingsContext {
  removeBooking() : void,
  bookings:IBooking[]
}


const apiId = "64088bb976187b915f68e167";

export const BookingsContext = createContext<IBooking[]>([])



function App() {

  const [bookings, setBookings] = useState<IBooking[]>([]);

  function removeBooking(bookingId:string) {
    setBookings((current) =>
    current.filter((booking) => booking._id !== bookingId));

  }
   
  
  useEffect(() =>  {
    async function getBookings() {
       let bookingsFromApi = await fetchBookings();
       setBookings(bookingsFromApi)
    }
    getBookings();
 }, [])


  return (
<BookingsContext.Provider value={bookings}>
    <BrowserRouter>
        <Nav></Nav>
    <Routes>
      <Route path="/" element={<StartPage></StartPage>}></Route>
      <Route path="/booking" element={<Booking></Booking>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
      <Route path="/admin/:bookingId" element={<AdminDetails removeBooking={removeBooking}></AdminDetails>}></Route>
      <Route path="*" element={<h3>Page not found</h3>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </BookingsContext.Provider>
  );
}

export default App;