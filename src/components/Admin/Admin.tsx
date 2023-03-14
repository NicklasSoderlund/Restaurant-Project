import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BookingsContext } from "../../App";
import { IBooking } from "../../Services/fetchBookings";
import { Button } from "../styled/Button";
import "./admin.scss";
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export function Admin() {
  const navigate = useNavigate();
  const [contextBookings, setContextBookings] = useState<IBooking[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredBookings, setFilteredBookings] = useState<IBooking[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const Bookings = useContext(BookingsContext);

  useEffect(() => {
    setContextBookings(Bookings);
    setFilteredBookings(Bookings);
  }, [Bookings]);

  useEffect(() => {
    if (!searchTerm && !selectedDate && !selectedTime) {
      setFilteredBookings(contextBookings);
      return;
    }

    let bookings = contextBookings;

    if (searchTerm) {
      bookings = bookings.filter(booking => booking._id.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (selectedDate) {
      bookings = bookings.filter(booking => new Date(booking.date).toLocaleDateString() === selectedDate.toLocaleDateString());
    }

    if (selectedTime) {
      bookings = bookings.filter(booking => booking.time === selectedTime);
    }

    setFilteredBookings(bookings);
  }, [contextBookings, searchTerm, selectedDate, selectedTime]);

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterClick = () => {
    setFilteredBookings(contextBookings);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleTimeFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="BookingsContainer">
      <div className="filters">
        <div className="search">
          <input type="text" id="search" placeholder="Search by booking id:" value={searchTerm} onChange={handleSearchTermChange} />
        </div>
        <div className="date">
          <DatePicker
            placeholderText="Date"
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            className="date-input"
          />
          
        </div>
        <div className="time">
          <label htmlFor="time">Filter by time:</label>
          <select name="time" id="time" value={selectedTime ?? ''} onChange={handleTimeFilterChange}>
            <option value="">--Select--</option>
            <option value="18:00">18:00</option>
            <option value="21:00">21:00</option>
          </select>
          <Button border="" color="#C67B47" width="120px" textColor="white" onClick={handleFilterClick}>
            Clear
          </Button>
        </div>
      </div>
            {filteredBookings.map((booking)=>(
                <Link key={booking._id} to={`/admin/${booking._id}` } className="bookingLink">
                    <div key={booking._id} className="bookingcontainer" onClick={()=>{
                        console.log(booking._id);
                    }}>
                        <p>Booking id: {booking._id}</p>
                        <p>Date: {booking.date}</p>
                        <p>Time: {booking.time}</p>
                        <p>Guests: {booking.numberOfGuests}</p>
                        <Button border="" color="#C67B47" width="250px" textColor="white" onClick={()=>{ navigate(`/admin/${booking._id}`) }}>
                            More Details
                        </Button>  
                    </div>
                </Link>
            ))}
            <ToastContainer autoClose={7000}></ToastContainer>
        </div>
    )
}
