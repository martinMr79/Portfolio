const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const messageForm = document.querySelector("#messageForm");
const messageError = document.querySelector("#messageError");
const validForm = document.querySelector(".validForm");

function validateForm(event) {
  event.preventDefault();

  if (nameInput.value.trim().length > 5) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (subject.value.trim().length > 15) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value) === true && email.value.trim().length > 5) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (messageForm.value.trim().length > 25) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (
    checkLength(nameInput.value, 6) &&
    checkLength(subject.value, 16) &&
    validateEmail(email.value) &&
    checkLength(messageForm.value, 26)
  ) {
    form.innerHTML =
      '<div class="message-container"><span class="fas fa-check fa-4x check-icon"></span><p class="thank-you-message">Your message was successfully sent</p></div>';
  } /* else {
  
    form.reset();
} */

  console.log("hekk");
}


function validateEmail(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const matchPattern = regEx.test(email);
  return matchPattern;
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}


/*https://unique-empanada-86cdb1.netlify.app/ */