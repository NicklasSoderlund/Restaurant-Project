import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartPage } from './components/StartPage/Startpage';
import { Booking } from './components/Booking/Booking';
import { Contact } from './components/Contact/Contact';
import { Admin } from './components/Admin/Admin';


const apiId = "64088bb976187b915f68e167";

function App() {

  
  return (
     
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage></StartPage>}></Route>
      <Route path="/booking" element={<Booking></Booking>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
