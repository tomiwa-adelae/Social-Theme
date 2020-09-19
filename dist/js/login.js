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
   if (nameInput.value === '') {
      nameInput.classList.add('error');
      nameInput.placeholder = 'Please Fill Out Your Name';
   } else {
      nameInput.classList.replace('error', 'success');
   }
   if (passwordInput.value === '') {
      passwordInput.classList.add('error');
      passwordInput.placeholder = 'Please Fill Out Your Password';
   } else {
      passwordInput.classList.replace('error', 'success');
   }
   if (nameInput.value === '' || passwordInput.value === '') {
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
