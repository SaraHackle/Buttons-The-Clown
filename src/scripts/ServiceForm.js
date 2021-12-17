import { sendRequest } from "./dataAccess.js";

export const ServiceForm = () => {
  let html = `
        <div class="field">
        <label class="label" for="serviceParent">Parent Name</label>
        <input type="text" name="serviceParent" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceChild">Child Name</label>
            <input type="text" name="serviceChild" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceHours">How long is the party?</label>
            <input type="number" name="serviceHours" class="input" />
        </div>
        <div class="field">
        <label class="label" for="serviceAttendees"> How many people will be attending?</label>
        <input type="number" name="serviceAttendees" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Request</button>
    `;

  return html;
};

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitRequest") {
    // Get what the user typed into the form fields
    const parentDescription = document.querySelector(
      "input[name='serviceParent']"
    ).value;
    const childDescription = document.querySelector(
      "input[name='serviceChild']"
    ).value;
    const userAddress = document.querySelector(
      "input[name='serviceAddress']"
    ).value;
    const userHours = document.querySelector(
      "input[name='serviceHours']"
    ).value;
    const userAttendees = document.querySelector(
      "input[name='serviceHours']"
    ).value;
    const userDate = document.querySelector("input[name='serviceDate']").value;

    // Make an object out of the user input
    const dataToSendToAPI = {
      parent: parentDescription,
      child: childDescription,
      address: userAddress,
      partyLength: userHours,
      attendees: userAttendees,
      neededBy: userDate,
      completed: false,
    };

    // Send the data to the API for permanent storage
    sendRequest(dataToSendToAPI);
  }
});
