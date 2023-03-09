import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartPage } from './components/StartPage/Startpage';
import { Booking } from './components/Booking/Booking';
import { Contact } from './components/Contact/Contact';
import { Admin } from './components/Admin/Admin';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';


const apiId = "64088bb976187b915f68e167";

function App() {

  
  return (

    <BrowserRouter>
        <Nav></Nav>
    <Routes>
      <Route path="/" element={<StartPage></StartPage>}></Route>
      <Route path="/booking" element={<Booking></Booking>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
      <Route path="*" element={<h3>Page not found</h3>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;