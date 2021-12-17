import { Requests } from "./Requests.js";
import { ServiceForm } from "./ServiceForm.js";
import { Completions } from "./Completions.js"

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
    <section class="completedBookings">
        <h2>Completed Requests</h2>
        ${Completions()}
    </section>
    `;
};
