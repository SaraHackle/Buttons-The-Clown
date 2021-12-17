import {
  getRequests,
  getClowns,
  sendRequestUpdate,
  sendCompletion,
} from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

export const Requests = () => {
  const requests = getRequests();
  const clowns = getClowns();

  let html = `<ul>`;
  const convertBookingToListElement = requests.map((request) => {
    if (request.completed === false)
      return `
    <li class= "booking__options" >
    ${request.parent} would like to request a 
    ${request.partyLength}hr party for their child 
    ${request.child} on 
    ${request.neededBy}
    <select class="clowns" id="clowns">
        <option value="">Choose</option>
    ${clowns
      .map((clown) => {
        return `<option id="clowns"  value="${request.id}--${clown.id}--${request.neededBy}--${clown.clown}--${request.child}--${request.partyLength}">${clown.clown}</option>`;
      })
      .join("")}
    </select>
    <button class="request__delete" 
          id=request--${request.id}>Delete
    </button>
    </li>`;
  });
  html += convertBookingToListElement.join("");
  html += `</ul>`;
  return html;
};

mainContainer.addEventListener("change", (event) => {
  if (event.target.id === "clowns") {
    const [
      requestId,
      clownId,
      requestNeededBy,
      completionClownName,
      requestChild,
      requestLength,
    ] = event.target.value.split("--");
    const completionName = completionClownName;
    const completionRequestId = requestId;
    const completionClownId = clownId;

    const completion = {
      clownId: parseInt(completionClownId),
      requestId: parseInt(completionRequestId),
      clownName: completionName,
      completionDate: requestNeededBy,
      requestChild: requestChild,
      requestLength: requestLength,
    };
    const dataToUpdateRequest = {
      completed: true,
    };
    sendCompletion(completion);
    sendRequestUpdate(dataToUpdateRequest, completion.requestId);
  }
});
