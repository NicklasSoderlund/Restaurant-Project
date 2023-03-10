import axios from "axios";

export interface IBooking {
    _id: string,
    date: string,
    time: string,
    numberOfGuests: number,
    customerId: string
}



export async function fetchBookings(){

    let response = await axios.get('https://school-restaurant-api.azurewebsites.net/booking/restaurant/64088bb976187b915f68e167');
    return response.data as IBooking[];
    
    }