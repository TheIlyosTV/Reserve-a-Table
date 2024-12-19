// DOM Elements
const reservationForm = document.getElementById("reservationForm");
const customerForm = document.getElementById("customerForm");
const nextStepButton = document.getElementById("nextStep");
const reservationSection = document.querySelector(".reservation-section");
const customerDetailsSection = document.querySelector(".customer-details-section");

// Handle Next Step Button
nextStepButton.addEventListener("click", () => {
  // Validate reservation form inputs
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const diners = document.getElementById("diners").value;

  if (date && time && diners) {
    reservationSection.classList.add("hidden");
    customerDetailsSection.classList.remove("hidden");
  } else {
    alert("Please fill in all reservation details.");
  }
});

// Handle Customer Form Submission
customerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const contact = document.getElementById("contact").value;

  if (firstName && lastName && contact) {
    alert("Reservation Submitted Successfully!");
    // Optionally reset forms
    reservationForm.reset();
    customerForm.reset();
    customerDetailsSection.classList.add("hidden");
    reservationSection.classList.remove("hidden");
  } else {
    alert("Please fill in all customer details.");
  }
});
