const form = document.querySelector("#ticketForm");
const ticketType = document.querySelector("#ticketType");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const output = document.querySelector("#output");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const eventDate = document.querySelector("#eventDate");


function updateField() {
    if (ticketType.value === "student") {
    extraField.hidden = false;
    extraLabel.textContent = "Student I#";
  } else if (ticketType.value === "guest") {
    extraField.hidden = false;
    extraLabel.textContent = "Access Code";
  } else {
    extraField.hidden = true;
  }

  extraInput.value = "";
}

ticketType.addEventListener("change", updateField);

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value + "T00:00:00");

  today.setHours(0, 0, 0, 0);

  return chosen <= today;
}

function createTicket(event) {
  event.preventDefault();

  let error = "";

  if (firstName.value.trim() === "") {
    error = "Enter your first name";
  } else if (lastName.value.trim() === "") {
    error = "Enter your last name";
  } else if (email.value === "" || !email.validity.valid) {
    error = "Enter a valid email";
  } else if (ticketType.value === "") {
    error = "Choose a ticket type";
  } else if (eventDate.value === "" || isPastDate(eventDate.value)) {
    error = "Choose a future date";
  } else if (
    ticketType.value === "student" &&
    (extraInput.value.length !== 9 ||
     extraInput.value.trim() === "" ||
     isNaN(Number(extraInput.value)) ||
     extraInput.value.includes(" "))
  ) {
    error = "Student I# must be 9 digits";
  } else if (
    ticketType.value === "guest" &&
    extraInput.value !== "EVENT131"
  ) {
    error = "Invalid access code";
  }

  if (error !== "") {
    output.textContent = error;
    return;
  }

  // Display ticket
  output.innerHTML = `
    <h2>Ticket Created!</h2>
    <p>Name: ${firstName.value} ${lastName.value}</p>
    <p>Email: ${email.value}</p>
    <p>Type: ${ticketType.value}</p>
    <p>Date: ${eventDate.value}</p>
  `;

  form.reset();
  updateField();
}

form.addEventListener("submit", createTicket);


