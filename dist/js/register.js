// SELECTORS
const registerForm = document.querySelector('#register-form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const confirmPasswordInput = document.querySelector('.confirm-password-input');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-alert');

// EVENTS
registerForm.addEventListener('submit', registerFormSubmitted);

// FUNCTIONS
function registerFormSubmitted(e) {
   e.preventDefault();
   if (
      nameInput.value === '' ||
      emailInput.value === '' ||
      passwordInput.value === '' ||
      confirmPasswordInput.value === ''
   ) {
      // CREATE A NEW DIV
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('alert');
      errorDiv.classList.add('alert-danger');
      errorDiv.innerHTML =
         '<i class="fas fa-exclamation-circle"> Please Fill Out All Fields</i>';

      // APPEND THE NEW DIV TO THE DIV WITH THE CLASS OF HTML I N THE HTML
      errorMessage.appendChild(errorDiv);

      // // Remove the error message after five seconds
      setTimeout(() => errorMessage.remove(), 3000);
   } else {
      successMessage.classList.add('show-success-alert');

      //CREATE A NEW DIV AND ADD THE TEXT
      const userName = document.createElement('div');
      userName.classList.add('user-name');
      userName.innerHTML = nameInput.value;

      // APPEND THE NEW DIV TO THE DIV WITH THE CLASS OF SUCCESS MESSAGE IN THE HTML
      successMessage.appendChild(userName);
      setTimeout(() => successMessage.remove(), 5000);

      // GO TO THE DASHBOARD
      successMessage.addEventListener('transitionend', function () {
         window.location = 'dashboard.html';
      });

      // CLEAR ALL FIELDS
      nameInput.value === '';
      emailInput.value === '';
      passwordInput.value === '';
      confirmPasswordInput.value === '';
   }
}
