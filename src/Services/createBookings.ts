import axios from "axios";

export async function createBooking() {
   
    let myId =  await axios.post('https://school-restaurant-api.azurewebsites.net/booking/create', {
      "restaurantId": "64088bb976187b915f68e167",
      "date": "2022-01-02",
      "time": "18:00",
      "numberOfGuests": 4,
      "customer": {
        "name": "Franzén",
        "lastname": "Sebastian",
        "email": "someone@somedomain.com",
        "phone": "070-1112233"
      }
    })
   ;
   
   return console.log(myId.data);
   
   
   }