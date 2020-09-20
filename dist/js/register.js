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

   // if (passwordInput.value.length < 6) {
   //    //   Create an alert
   //    const errorAlert = document.createElement('div');
   //    errorAlert.style.color = '#dc3545';
   //    errorAlert.innerHTML =
   //       '<i class="fas fa-exclamation-circle"></i> Password must be more than 6 Characters';

   //    // Put It In The HTML
   //    const errorSmallTag = document.querySelector('.password-error-message');
   //    errorSmallTag.appendChild(errorAlert);

   //    // Set timeout
   //    setTimeout(() => errorAlert.remove(), 10000);
   // } else {
   //    console.log('more tha 6');
   // }

   if (
      nameInput.value === '' ||
      emailInput.value === '' ||
      passwordInput.value === '' ||
      confirmPasswordInput.value === '' ||
      passwordInput.value != confirmPasswordInput.value ||
      passwordInput.value.length < 6
   ) {
      //   Create an alert
      const passwordErrorAlert = document.createElement('div');
      passwordErrorAlert.style.color = '#dc3545';
      passwordErrorAlert.innerHTML =
         '<i class="fas fa-exclamation-circle"></i> Password must be more than 6 Characters';

      // Put It In The HTML
      const passwordErrorSmallTag = document.querySelector(
         '.password-error-message'
      );
      passwordErrorSmallTag.appendChild(passwordErrorAlert);

      // Set timeout
      setTimeout(() => passwordErrorAlert.remove(), 10000);

      //   Create an alert
      const errorAlert = document.createElement('div');
      errorAlert.style.color = '#dc3545';
      errorAlert.innerHTML =
         '<i class="fas fa-exclamation-circle"></i> Please Re-Enter Your Password';

      // Put It In The HTML
      const errorSmallTag = document.querySelector('.error-message');
      errorSmallTag.appendChild(errorAlert);

      // Set timeout
      setTimeout(() => errorAlert.remove(), 3000);
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
