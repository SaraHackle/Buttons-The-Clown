import { deleteRequest, fetchRequests, fetchClowns,fetchCompletions } from "./dataAccess.js";
import { Clowns } from "./Clowns.js";


const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (click) => {
  if (click.target.id.startsWith("request--")) {
    const [, requestId] = click.target.id.split("--");
    deleteRequest(parseInt(requestId));
  }
});

mainContainer.addEventListener("stateChanged", (CustomEvent) => {
  render();
  return CustomEvent;
});

const render = () => {
    fetchRequests()
      .then(() => fetchClowns())
      .then(() => fetchCompletions())
      .then(() => {
        mainContainer.innerHTML = Clowns();
      });
  };
  
  render();
