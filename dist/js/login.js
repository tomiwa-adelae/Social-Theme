// SELECTORS
const loginForm = document.querySelector('#login-form');
const nameInput = document.querySelector('.name-input');
const passwordInput = document.querySelector('.password-input');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-alert');

// EVENTS
loginForm.addEventListener('submit', loginFormSubmitted);

// FUNCTIONS
function loginFormSubmitted(e) {
   e.preventDefault();
   if (nameInput.value === '' || passwordInput.value === '') {
      // CREATE A NEW DIV
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('alert');
      errorDiv.classList.add('alert-danger');
      errorDiv.innerHTML =
         '<i class="fas fa-exclamation-circle"> Invalid Credentials</i>';

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
      passwordInput.value === '';
   }
}
