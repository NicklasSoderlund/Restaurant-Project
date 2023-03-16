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

  // Filter bookings chronologically from start
  useEffect(() => {
    if (!searchTerm && !selectedDate && !selectedTime) {
      setFilteredBookings(contextBookings);
      return;
    }

    let bookings = contextBookings;

  // Filter bookings from selections
    if (searchTerm) {
      bookings = bookings.filter(
        (booking) =>
          booking._id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDate) {
      bookings = bookings.filter(
        (booking) =>
          new Date(booking.date).toLocaleDateString() ===
          selectedDate.toLocaleDateString()
      );
    }

    if (selectedTime) {
      bookings = bookings.filter((booking) => booking.time === selectedTime);
    }

    setFilteredBookings(bookings);
  }, [contextBookings, searchTerm, selectedDate, selectedTime]);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterClick = () => {
    setFilteredBookings(contextBookings);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleTimeFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="BookingsContainer">
                  <ToastContainer autoClose={7000}></ToastContainer>
      <div className="filters">
        <div className="search">
          <input
            type="text"
            id="search"
            placeholder="Search by booking id:"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
        <div className="date">
          <DatePicker
            placeholderText="Date"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            className="date-input"
          />
        </div>
        <div className="time">
          <label>Filter by time:</label>
            <label>18:00
              <input
                type="radio"
                name="time"
                value="18:00"
                checked={selectedTime === "18:00"}
                onChange={handleTimeFilterChange}
              />
            </label>
            <label>21:00
              <input
                type="radio"
                name="time"
                value="21:00"
                checked={selectedTime === "21:00"}
                onChange={handleTimeFilterChange}
              />
              
            </label>
          <Button
            border=""
            color="#C67B47"
            width="120px"
            textColor="white"
            onClick={handleFilterClick}
          >
            Clear
          </Button>
        </div>
      </div>

      {filteredBookings.map((booking, i) => (
        <Link className="bookingLink" key={booking._id} to={`/admin/${booking._id}`}>
          <div
            key={booking._id}
            className="bookingcontainer" onClick={()=>{
                         localStorage.setItem("currentBooking", JSON.stringify(filteredBookings[i]));
                        console.log(booking._id);
                    }}>
                        <p className="bookingIdTitle">Booking id: <span>{booking._id}</span></p>
                        <p>Date: {booking.date}</p>
                        <p>Time: {booking.time}</p>
                        <p>Guests: {booking.numberOfGuests}</p>
                        <Button border="" color="#C67B47" width="250px" textColor="white" onClick={()=>{ navigate(`/admin/${booking._id}`) }}>
                            More Details
                        </Button>  
                    </div>
                </Link>
            ))}

        </div>
    )
}
