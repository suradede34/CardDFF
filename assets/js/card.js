const cardholderNameInput = document.querySelector('input[placeholder="e.g. Jane Appleseed"]');
const cardNumberInput = document.querySelector('input[placeholder="e.g. 1234 5678 9123 0000"]');
const expMonthInput = document.querySelector('input[placeholder="MM"]');
const expYearInput = document.querySelector('input[placeholder="YY"]');
const cvcInput = document.querySelector('input[placeholder="e.g. 123"]');
const confirmButton = document.querySelector('.footer');
const thankYouMessage = document.querySelector('.thank-you-message');

function validateInputs() {
  let isValid = true;
  
  if (!cardholderNameInput.value.trim()) {
    cardholderNameInput.style.borderColor = 'red';
    isValid = false;
  } else {
    cardholderNameInput.style.borderColor = '#ccc';
  }

  if (!cardNumberInput.value.trim()) {
    cardNumberInput.style.borderColor = 'red';
    isValid = false;
  } else {
    cardNumberInput.style.borderColor = '#ccc';
  }

  if (!expMonthInput.value.trim()) {
    expMonthInput.style.borderColor = 'red';
    isValid = false;
  } else {
    expMonthInput.style.borderColor = '#ccc';
  }

  if (!expYearInput.value.trim()) {
    expYearInput.style.borderColor = 'red';
    isValid = false;
  } else {
    expYearInput.style.borderColor = '#ccc';
  }

  if (!cvcInput.value.trim()) {
    cvcInput.style.borderColor = 'red';
    isValid = false;
  } else {
    cvcInput.style.borderColor = '#ccc';
  }

  return isValid;
}

confirmButton.addEventListener('click', function () {
  if (validateInputs()) {
    cardholderNameInput.value = '';
    cardNumberInput.value = '';
    expMonthInput.value = '';
    expYearInput.value = '';
    cvcInput.value = '';
  }
});

