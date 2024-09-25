const dynamicForm = document.getElementById('dynamicForm');
const addFieldButton = document.getElementById('addFieldButton');
const submitButton = document.getElementById('submitButton');

function addField() {
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('placeholder', 'Enter value');

  dynamicForm.insertBefore(newInput, submitButton);
}

function submitForm() {
  const inputs = document.querySelectorAll('#dynamicForm input');
  let allFilled = true;
  let message = '';

  inputs.forEach((input, index) => {
  
    message += `Field ${index + 1}: ${input.value}, `;
  });

  if (!allFilled) {
    alert('Please fill in all fields!');
  } else {
    alert(`Submitted Values: ${message}`);
  }
}

addFieldButton.addEventListener('click', addField);

submitButton.addEventListener('click', submitForm);
