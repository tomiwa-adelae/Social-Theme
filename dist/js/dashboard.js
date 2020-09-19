// SELECTORS
const tableBtnExpOne = document.querySelector('.table-btn-exp-one');
const tableBtnExpTwo = document.querySelector('.table-btn-exp-two');
const tableBtnEduOne = document.querySelector('.table-btn-edu-one');
const deleteAccountBtn = document.querySelector('.delete-account-btn');
const deleteAlertDiv = document.querySelector('.delete-alert');

// EVENTS
tableBtnExpOne.addEventListener('click', tableBtnExpOneFunction);
tableBtnExpTwo.addEventListener('click', tableBtnExpTwoFunction);
tableBtnEduOne.addEventListener('click', tableBtnEduOneFunction);
deleteAccountBtn.addEventListener('click', deleteAccountBtnFunction);

// FUNCTIONS
function tableBtnExpOneFunction(e) {
   const expOne = e.target.parentElement.parentElement;
   // MAKE AN ALERT APPEAR CONFIRMING
   const deleteAlert = document.createElement('div');
   deleteAlert.classList.add('alert');
   deleteAlert.classList.add('alert-danger');
   // This is the text of the first experience
   const expOneText = expOne.children[0].textContent;
   deleteAlert.innerHTML = `Are You Sure You Want To Delete Your ${expOneText} Experience From Profile?`;

   // CREATE A DIV FOR THE BUTTONS
   const buttons = document.createElement('div');
   buttons.classList.add('buttons');

   // CREATE A CONFIRM BUTTON
   deleteExpBtnConfirm = document.createElement('button');
   deleteExpBtnConfirm.classList.add('btn');
   deleteExpBtnConfirm.classList.add('btn-primary');
   deleteExpBtnConfirm.classList.add('btn-delete-confirm');
   deleteExpBtnConfirm.innerHTML = '<h5>Yes</h5>';

   // APPEND THE CONFIRM BUTTON TO THE BUTTONS DIV
   buttons.appendChild(deleteExpBtnConfirm);

   // CREATE A REJECT BUTTON
   deleteExpBtnReject = document.createElement('button');
   deleteExpBtnReject.classList.add('btn');
   deleteExpBtnReject.classList.add('btn-delete-reject');
   deleteExpBtnReject.innerHTML = '<h5> No</h5>';

   // APPEND THE REJECT BUTTON TO THE BUTTONS DIV
   buttons.appendChild(deleteExpBtnReject);

   // APPEND THE BUTTONS TO THE DELETE ALERT
   deleteAlert.appendChild(buttons);

   // ADD A CLASS TO THE DELETE ALERT DIV
   deleteAlertDiv.classList.add('show-alert');

   // Add the alert to the HTML At the top
   deleteAlertDiv.appendChild(deleteAlert);
   tableBtnExpOne.disabled = true;
   tableBtnExpOne.style.backgroundColor = '#999';

   // ADD A CLICK EVENTS TO THE CONFIRM BTN
   deleteExpBtnConfirm.addEventListener('click', (e) => {
      expOne.remove();

      // // THEN REMOVE THE ALERT
      deleteAlertDiv.classList.toggle('show-alert');

      // WAIT FOR ANIMATION BEFORE DELETING
      deleteAlertDiv.addEventListener('transitionend', () => {
         // AND ALSO DELETE THE TEXT
         deleteAlert.style.display = 'none';
      });
   });

   // ADD A CLICK EVENTS TO THE REJECT BTN
   deleteExpBtnReject.addEventListener('click', (e) => {
      // Remove the alert
      deleteAlertDiv.classList.toggle('show-alert');

      // WAIT FOR ANIMATION BEFORE DELETING
      deleteAlertDiv.addEventListener('transitionend', () => {
         // DELETE THE ALERT
         deleteAlert.style.display = 'none';

         // AND ALSO DELETE THE TEXT
         deleteAlert.textContent = '';
      });

      // ENABLE THE BUTTON
      tableBtnExpOne.disabled = false;
      tableBtnExpOne.style.backgroundColor = ' #dc3545';
   });
}

// TABLE TWO
function tableBtnExpTwoFunction(e) {
   const expTwo = e.target.parentElement.parentElement;
   // MAKE AN ALERT APPEAR CONFIRMING
   const deleteAlert = document.createElement('div');
   deleteAlert.classList.add('alert');
   deleteAlert.classList.add('alert-danger');
   // This is the text of the first experience
   const expTwoText = expTwo.children[0].textContent;
   deleteAlert.innerHTML = `Are You Sure You Want To Delete Your ${expTwoText} Experience From Profile?`;

   // CREATE A DIV FOR THE BUTTONS
   const buttons = document.createElement('div');
   buttons.classList.add('buttons');

   // CREATE A CONFIRM BUTTON
   deleteExpBtnConfirm = document.createElement('button');
   deleteExpBtnConfirm.classList.add('btn');
   deleteExpBtnConfirm.classList.add('btn-primary');
   deleteExpBtnConfirm.classList.add('btn-delete-confirm');
   deleteExpBtnConfirm.innerHTML = '<h5>Yes</h5>';

   // APPEND THE CONFIRM BUTTON TO THE BUTTONS DIV
   buttons.appendChild(deleteExpBtnConfirm);

   // CREATE A REJECT BUTTON
   deleteExpBtnReject = document.createElement('button');
   deleteExpBtnReject.classList.add('btn');
   deleteExpBtnReject.classList.add('btn-delete-reject');
   deleteExpBtnReject.innerHTML = '<h5> No</h5>';

   // APPEND THE REJECT BUTTON TO THE BUTTONS DIV
   buttons.appendChild(deleteExpBtnReject);

   // APPEND THE BUTTONS TO THE DELETE ALERT
   deleteAlert.appendChild(buttons);

   // ADD A CLASS TO THE DELETE ALERT DIV
   deleteAlertDiv.classList.add('show-alert');

   // Add the alert to the HTML At the top
   deleteAlertDiv.appendChild(deleteAlert);
   tableBtnExpTwo.disabled = true;
   tableBtnExpTwo.style.backgroundColor = '#999';

   // ADD A CLICK EVENTS TO THE CONFIRM BTN
   deleteExpBtnConfirm.addEventListener('click', (e) => {
      expTwo.remove();

      // // THEN REMOVE THE ALERT
      deleteAlertDiv.classList.toggle('show-alert');

      // WAIT FOR ANIMATION BEFORE DELETING
      deleteAlertDiv.addEventListener('transitionend', () => {
         // AND ALSO DELETE THE TEXT
         deleteAlert.textContent = '';
      });
   });

   // ADD A CLICK EVENTS TO THE REJECT BTN
   deleteExpBtnReject.addEventListener('click', (e) => {
      // Remove the alert
      deleteAlertDiv.classList.toggle('show-alert');

      // WAIT FOR ANIMATION BEFORE DELETING
      deleteAlertDiv.addEventListener('transitionend', () => {
         // DELETE THE ALERT
         deleteAlert.style.display = 'none';
         // AND ALSO DELETE THE TEXT
         deleteAlert.style.display = 'none';
      });

      // ENABLE THE BUTTON
      tableBtnExpTwo.disabled = false;
      tableBtnExpTwo.style.backgroundColor = ' #dc3545';
   });
}

// TABLE EDU
function tableBtnEduOneFunction(e) {
   const eduOne = e.target.parentElement.parentElement;
   // MAKE AN ALERT APPEAR CONFIRMING
   const deleteAlert = document.createElement('div');
   deleteAlert.classList.add('alert');
   deleteAlert.classList.add('alert-danger');
   // This is the text of the first experience
   const eduOneText = eduOne.children[0].textContent;
   deleteAlert.innerHTML = `Are You Sure You Want To Delete ${eduOneText} From your Profile?`;

   // CREATE A DIV FOR THE BUTTONS
   const buttons = document.createElement('div');
   buttons.classList.add('buttons');

   // CREATE A CONFIRM BUTTON
   deleteExpBtnConfirm = document.createElement('button');
   deleteExpBtnConfirm.classList.add('btn');
   deleteExpBtnConfirm.classList.add('btn-primary');
   deleteExpBtnConfirm.classList.add('btn-delete-confirm');
   deleteExpBtnConfirm.innerHTML = '<h5>Yes</h5>';

   // APPEND THE CONFIRM BUTTON TO THE BUTTONS DIV
   buttons.appendChild(deleteExpBtnConfirm);

   // CREATE A REJECT BUTTON
   deleteExpBtnReject = document.createElement('button');
   deleteExpBtnReject.classList.add('btn');
   deleteExpBtnReject.classList.add('btn-delete-reject');
   deleteExpBtnReject.innerHTML = '<h5> No</h5>';

   // APPEND THE REJECT BUTTON TO THE BUTTONS DIV
   buttons.appendChild(deleteExpBtnReject);

   // APPEND THE BUTTONS TO THE DELETE ALERT
   deleteAlert.appendChild(buttons);

   // ADD A CLASS TO THE DELETE ALERT DIV
   deleteAlertDiv.classList.add('show-alert');

   // Add the alert to the HTML At the top
   deleteAlertDiv.appendChild(deleteAlert);
   tableBtnEduOne.disabled = true;
   tableBtnEduOne.style.backgroundColor = '#999';

   // ADD A CLICK EVENTS TO THE CONFIRM BTN
   deleteExpBtnConfirm.addEventListener('click', (e) => {
      eduOne.remove();

      // // THEN REMOVE THE ALERT
      deleteAlertDiv.classList.toggle('show-alert');

      // WAIT FOR ANIMATION BEFORE DELETING
      deleteAlertDiv.addEventListener('transitionend', () => {
         // AND ALSO DELETE THE TEXT
         deleteAlert.textContent = '';
      });
   });

   // ADD A CLICK EVENTS TO THE REJECT BTN
   deleteExpBtnReject.addEventListener('click', (e) => {
      // Remove the alert
      deleteAlertDiv.classList.toggle('show-alert');

      // WAIT FOR ANIMATION BEFORE DELETING
      deleteAlertDiv.addEventListener('transitionend', () => {
         // DELETE THE ALERT
         deleteAlert.style.display = 'none';
         // AND ALSO DELETE THE TEXT
         deleteAlert.style.display = 'none';
      });

      // ENABLE THE BUTTON
      tableBtnEduOne.disabled = false;
      tableBtnEduOne.style.backgroundColor = ' #dc3545';
   });
}

function deleteAccountBtnFunction(e) {
   // GRAB THE EXPERIENCE CONTENT
   const expContent = document.querySelector('.exp-one');
   console.log(expContent);
   // GRAB THE EDUCATION CONTENT
   const eduContent = document.querySelector('.edu-one');
   console.log(eduContent);

   // MAKE AN ALERT APPEAR CONFIRMING
   const deleteAlert = document.createElement('div');
   deleteAlert.classList.add('alert');
   deleteAlert.classList.add('alert-danger');
   deleteAlert.innerHTML = `Are You Sure You Want To Delete Your Account?`;

   // CREATE A DIV FOR THE BUTTONS
   const buttons = document.createElement('div');
   buttons.classList.add('buttons');

   // CREATE A CONFIRM BUTTON
   deleteExpBtnConfirm = document.createElement('button');
   deleteExpBtnConfirm.classList.add('btn');
   deleteExpBtnConfirm.classList.add('btn-primary');
   deleteExpBtnConfirm.classList.add('btn-delete-confirm');
   deleteExpBtnConfirm.innerHTML = '<h5>Yes</h5>';

   // APPEND THE CONFIRM BUTTON TO THE BUTTONS DIV
   buttons.appendChild(deleteExpBtnConfirm);

   // CREATE A REJECT BUTTON
   deleteExpBtnReject = document.createElement('button');
   deleteExpBtnReject.classList.add('btn');
   deleteExpBtnReject.classList.add('btn-delete-reject');
   deleteExpBtnReject.innerHTML = '<h5> No</h5>';

   // APPEND THE REJECT BUTTON TO THE BUTTONS DIV
   buttons.appendChild(deleteExpBtnReject);

   // APPEND THE BUTTONS TO THE DELETE ALERT
   deleteAlert.appendChild(buttons);

   // ADD A CLASS TO THE DELETE ALERT DIV
   deleteAlertDiv.classList.add('show-alert');

   // Add the alert to the HTML At the top
   deleteAlertDiv.appendChild(deleteAlert);
   deleteAccountBtn.disabled = true;
   deleteAccountBtn.style.backgroundColor = '#999';

   // ADD A CLICK EVENTS TO THE CONFIRM BTN
   deleteExpBtnConfirm.addEventListener('click', (e) => {
      expContent.remove();
      eduContent.remove();

      // // THEN REMOVE THE ALERT
      deleteAlertDiv.classList.toggle('show-alert');

      // WAIT FOR ANIMATION BEFORE DELETING
      deleteAlertDiv.addEventListener('transitionend', () => {
         // AND ALSO DELETE THE TEXT
         deleteAlert.textContent = '';
      });
   });

   // ADD A CLICK EVENTS TO THE REJECT BTN
   deleteExpBtnReject.addEventListener('click', (e) => {
      // Remove the alert
      deleteAlertDiv.classList.toggle('show-alert');

      // WAIT FOR ANIMATION BEFORE DELETING
      deleteAlertDiv.addEventListener('transitionend', () => {
         // DELETE THE ALERT
         deleteAlert.style.display = 'none';
         // AND ALSO DELETE THE TEXT
         deleteAlert.style.display = 'none';
      });

      // ENABLE THE BUTTON
      deleteAccountBtn.disabled = false;
      deleteAccountBtn.style.backgroundColor = ' #dc3545';
   });
}
