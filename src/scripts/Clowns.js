import { Requests } from "./Requests.js";
import { ServiceForm } from "./ServiceForm.js";

export const Clowns = () => {
  return `
    <h1>Buttons and Lollipop Clown Service</h1>
    <section class="serviceForm">
        ${ServiceForm()}
    </section>
    <section class="serviceRequests">
        <h2>Booking Requests</h2>
        ${Requests()}
        
    </section>
    `;
};
