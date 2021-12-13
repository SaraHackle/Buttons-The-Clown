import { getRequests } from "./dataAccess.js";

export const Requests = () => {
  const requests = getRequests();

  let html = `<ul>`;
  const convertRequestToListElement = requests.map((request) => {
    return `
        <li>
            ${request.parent} would like to request a ${request.partyLength}hr party for their child ${request.child} on ${request.neededBy}
            <button class="request__delete"
                    id="request--${request.id}">
                Delete
            </button>
        </li>
    `;
  });
  html += convertRequestToListElement.join("");
  html += `</ul>`;
  return html;
};
