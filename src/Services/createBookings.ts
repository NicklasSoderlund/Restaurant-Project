import axios from "axios";

interface IBookingResponse {
  insertedId: string;
}

export async function createBooking(userDate:string, userTime:string, userGuests:number, 
  customerFName:string, customerLName:string, customerEmail:string, customerPhone:string) {
   
    let myId =  await axios.post('https://school-restaurant-api.azurewebsites.net/booking/create', {
      "restaurantId": "64088bb976187b915f68e167",
      "date": userDate,
      "time": userTime,
      "numberOfGuests":userGuests,
      "customer": {
        "name": customerFName,
        "lastname": customerLName,
        "email": customerEmail,
        "phone": customerPhone
      }
    })
   ;
   
   return myId.data as IBookingResponse;
   
   
   }