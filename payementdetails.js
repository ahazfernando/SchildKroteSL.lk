document.addEventListener("DOMContentLoaded", function() {
    const cardNumberInput = document.getElementById("cardNumber");
    const expiryDateInput = document.getElementById("expiryDate");
    const ccvNumberInput = document.getElementById("ccvNumber");
    const userNameInput = document.getElementById("userName");
    const confirmPaymentBtn = document.getElementById("confirmPaymentBtn");
  
    function checkFormValidity() {
      if (
        cardNumberInput.value.trim() !== "" &&
        expiryDateInput.value.trim() !== "" &&
        ccvNumberInput.value.trim() !== "" &&
        userNameInput.value.trim() !== ""
      ) {
        confirmPaymentBtn.disabled = false;
      } else {
        confirmPaymentBtn.disabled = true;
      }
    }
    confirmBtn.addEventListener("click", function() {
        window.location.href = "confirmationpage.html";
      });
    cardNumberInput.addEventListener("input", checkFormValidity);
    expiryDateInput.addEventListener("input", checkFormValidity);
    ccvNumberInput.addEventListener("input", checkFormValidity);
    userNameInput.addEventListener("input", checkFormValidity);
  });