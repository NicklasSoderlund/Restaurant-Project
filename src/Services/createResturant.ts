import axios from "axios";

export async function createResturant() {
   
 let myId =  await axios.post('https://school-restaurant-api.azurewebsites.net/restaurant/create', {
  "name": "Jucius Steakcar",
  "address": {
    "street": "Juicybeef-Street 69",
    "zip": "1354 78",
    "city": "New York"
  }
})
;

return console.log(myId);


}

