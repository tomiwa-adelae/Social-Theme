// SELECTORS
const registerForm = document.querySelector('#register-form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const confirmPasswordInput = document.querySelector('.confirm-password-input');
const successMessage = document.querySelector('.success-alert');

// EVENTS
registerForm.addEventListener('submit', registerFormSubmitted);

// FUNCTIONS
function registerFormSubmitted(e) {
   e.preventDefault();
   if (nameInput.value === '') {
      nameInput.classList.add('error');
      nameInput.placeholder = 'Please Fill Out Your Name';
   } else {
      nameInput.classList.replace('error', 'success');
   }
   if (emailInput.value === '') {
      emailInput.classList.add('error');
      emailInput.placeholder = 'Please Fill Out Your Email';
   } else {
      emailInput.classList.replace('error', 'success');
   }
   if (passwordInput.value === '') {
      passwordInput.classList.add('error');
      passwordInput.placeholder = 'Please Fill Out Your Password';
   } else {
      passwordInput.classList.replace('error', 'success');
   }
   if (confirmPasswordInput.value === '') {
      confirmPasswordInput.classList.add('error');
      confirmPasswordInput.placeholder = 'Please Fill Out Your Password';
   } else {
      confirmPasswordInput.classList.replace('error', 'success');
   }

   if (
      nameInput.value === '' ||
      emailInput.value === '' ||
      passwordInput.value === '' ||
      confirmPasswordInput.value === ''
   ) {
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
