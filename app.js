const firstModal = document.getElementById("firstModal");
const modalBg = document.getElementsByClassName("modal-backdrop");
const submitCar = document.getElementById("submit-car");
const phoneNumber = document.getElementById("modal-phone-number");
const message = document.getElementById("message-text");
const alertMessage = document.getElementById("alert-message");
const alertSuccess = document.getElementById("alert-success");

// Function for checking value of inputs
const inputCheck = (inputOne, inputTwo) => {
  inputOne.addEventListener("keyup", () => {
    if (inputOne.value !== "" && inputTwo.value !== "") {
      submitCar.setAttribute("data-bs-dismiss", 'modal');
    } else {
      submitCar.setAttribute("data-bs-dismiss", '');
    }
  })
}

//Check inputs
inputCheck(phoneNumber, message);
inputCheck(message, phoneNumber);

// Submit input values
submitCar.addEventListener("click", () => {
  if (phoneNumber.value == '' || message.value == '') {
    alertMessage.style.display = "block";
    setTimeout(() => {
      alertMessage.style.display = "none";
    }, 2000)
  } else {

    // Succses alert
    alertSuccess.style.display = "block";
    setTimeout(() => {
      alertSuccess.style.display = "none";
    }, 5000)
  }
  // Reset values
  phoneNumber.value = "";
  message.value = "";

  submitCar.setAttribute("data-bs-dismiss", '');

})