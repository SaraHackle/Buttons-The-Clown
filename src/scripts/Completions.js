import { getCompletions } from "./dataAccess.js";

export const Completions = () => {
  const completions = getCompletions();
  let html = `<ul>`;

  const convertCompletionToListElement = completions.map((completion) => {
    return `
          <li id="completion_entry">${completion.clownName} completed a party for ${completion.requestChild} on ${completion.completionDate}
              
              </li>`;
  });
  html += convertCompletionToListElement.join("");
  html += `</ul>`;
  return html;
};
