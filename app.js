// Get the modal, button, and close elements
const modal = document.getElementById("projectsModal");
const projectsButton = document.getElementById("projects");
const closeModalButton = document.getElementById("closeModal");

// Show the modal when the "Projects" button is clicked
projectsButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// Hide the modal when the close button (X) is clicked
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Hide the modal if the user clicks outside the modal content area
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//same for the cintact modal
const contact = document.getElementById("contactModal");
const contactButton = document.getElementById("contact-btn");
const closeContactButton = document.getElementById("close-contact");

contactButton.addEventListener("click", () => {
  contact.style.display = "block";
});

closeContactButton.addEventListener("click", () => {
  contact.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === contact) {
    contact.style.display = "none";
  }
});
