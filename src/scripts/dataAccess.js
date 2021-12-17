const applicationState = {
  requests: [],
  clowns: [],
  completions: [],
};
const mainContainer = document.querySelector("#container");
const API = "http://localhost:8088";

export const fetchRequests = () => {
  return fetch(`${API}/requests?_sort=neededBy`)
    .then((response) => response.json())
    .then((serviceRequests) => {
      // Store the external state in application state
      applicationState.requests = serviceRequests;
    });
};

export const fetchClowns = () => {
  return fetch(`${API}/clowns`)
    .then((response) => response.json())
    .then((clowns) => {
      applicationState.clowns = clowns;
    });
};

export const fetchCompletions = () => {
  return fetch(`${API}/completions`)
    .then((response) => response.json())
    .then((completions) => {
      applicationState.completions = completions;
    });
};
export const getRequests = () => {
  return applicationState.requests.map((request) => ({ ...request }));
};

export const getClowns = () => {
  return applicationState.clowns.map((clown) => ({ ...clown }));
};

export const getCompletions = () => {
  return applicationState.completions.map((completion) => ({ ...completion }));
};

export const sendRequest = (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };

  return fetch(`${API}/requests?_sort=neededBy`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const sendCompletion = (userReservation) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userReservation),
  };

  return fetch(`${API}/completions`, fetchOptions)
    .then((response) => response.json())
    .then(() => mainContainer.dispatchEvent(new CustomEvent("stateChanged")));
};

export const deleteRequest = (id) => {
  return fetch(`${API}/requests/${id}`, { method: "DELETE" }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  });
};

export const sendRequestUpdate = (userRequestUpdate, id) => {
  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userRequestUpdate),
  };

  return fetch(`${API}/requests/${id}`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};
