const button = document.querySelector("img.button");
const email = document.querySelector("input#email");
const errorIcon = document.querySelector("img.error-icon");
const errorMessage = document.querySelector(".error-message p");

button.addEventListener("click", function () {
  let emailInput = email.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    console.log("Email is valid:", emailInput);
    errorIcon.style.display = "none";
    errorMessage.style.visibility = "hidden";
    email.style.border = "var(--bs-border-width) solid var(--bs-border-color";
  } else {
    console.log("Invalid email format");
    errorIcon.style.display = "inline-block";
    errorMessage.style.visibility = "visible";
    email.style.border = "solid  hsl(0, 93%, 68%)";
  }
});
