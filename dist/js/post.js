// SELECTORS
const postsForm = document.querySelector('.posts-form');
const postFormInput = document.querySelector('.text-area');
const postsDiv = document.querySelector('.posts');
const postSubmitBtn = document.querySelector('#submit-post-btn');

// EVENTS
document.addEventListener('DOMContentLoaded', getCommentsFromLocalStorage);
postsForm.addEventListener('submit', postsFormSubmitted);

// FUNCTIONS
function postsFormSubmitted(e) {
   e.preventDefault();
   // Grab the text being typed in
   const postFormText = postFormInput.value;
   // CHECK IF THE INPUT FIELD IS EMPTY
   if (postFormText === '') {
      postSubmitBtn.style.cursor = 'no-drop';
   } else {
      postSubmitBtn.style.cursor = 'pointer';

      // CREATE A NEW DIV
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.classList.add('bg-white');
      postDiv.classList.add('my-1');
      postDiv.classList.add('p-1');
      postDiv.classList.add('post-comment');

      // CREATE A POST HEADER DIV
      const postHeaderDiv = document.createElement('div');

      // CREATE AN AnCHOR TAG
      const anchorTag = document.createElement('a');
      anchorTag.href = 'profile.html';

      // CREATE AN IMG
      const postHeaderImg = document.createElement('img');
      postHeaderImg.classList.add('round-img');
      postHeaderImg.src = 'img/portrait.jpg';

      // CREATE AN H4 FOR THE NAME
      const postHeaderName = document.createElement('h4');
      postHeaderName.innerHTML = 'Will Smith';

      // APPEND THE IMG AND H4 INSIDE THE ANCHOR TAG
      anchorTag.appendChild(postHeaderImg);
      anchorTag.appendChild(postHeaderName);

      // APPEND THE ANCHOR TAG INSIDE THE POST HEADER DIV
      postHeaderDiv.appendChild(anchorTag);

      // APPEND THE POST HEADER DIV TO THE POST DIV
      postDiv.appendChild(postHeaderDiv);

      // CREATE A POST CONTENT DIV
      const postContentDiv = document.createElement('div');

      // CREATE A PARAGRAPH TAG
      const postContentParagraph = document.createElement('p');
      postContentParagraph.classList.add('my-1');

      // APPEND THE TXT FROM THE INPUT BOX INT THE PARAGRApH
      postContentParagraph.innerHTML = postFormText;

      // APPEND ALL TO THE POST CONTENT DIV
      postContentDiv.appendChild(postContentParagraph);

      // APPEND THE POST CONTENT DIV TO THE POST DIV
      postDiv.appendChild(postContentDiv);

      // APPEND THE NEW DIV TO THE POSTS DIV
      postsDiv.appendChild(postDiv);

      saveCommentToLocalStorage(postFormInput.value);

      // CLEAR TEH INPUTS FIELD
      postFormInput.value = '';
   }
}

// Save To Local Storage Function
function saveCommentToLocalStorage(comment) {
   let comments;
   if (localStorage.getItem('comments') === null) {
      comments = [];
   } else {
      comments = JSON.parse(localStorage.getItem('comments'));
   }

   comments.push(comment);

   localStorage.setItem('comments', JSON.stringify(comments));
}

// Get Comments from local storage
function getCommentsFromLocalStorage() {
   let comments;
   if (localStorage.getItem('comments') === null) {
      comments = [];
   } else {
      comments = JSON.parse(localStorage.getItem('comments'));
   }

   comments.forEach((comment) => {
      // Grab the text being typed in
      const postFormText = postFormInput.value;
      // CREATE A NEW DIV
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.classList.add('bg-white');
      postDiv.classList.add('my-1');
      postDiv.classList.add('p-1');
      postDiv.classList.add('post-comment');

      // CREATE A POST HEADER DIV
      const postHeaderDiv = document.createElement('div');

      // CREATE AN AnCHOR TAG
      const anchorTag = document.createElement('a');
      anchorTag.href = 'profile.html';

      // CREATE AN IMG
      const postHeaderImg = document.createElement('img');
      postHeaderImg.classList.add('round-img');
      postHeaderImg.src = 'img/portrait.jpg';

      // CREATE AN H4 FOR THE NAME
      const postHeaderName = document.createElement('h4');
      postHeaderName.innerHTML = 'Will Smith';

      // APPEND THE IMG AND H4 INSIDE THE ANCHOR TAG
      anchorTag.appendChild(postHeaderImg);
      anchorTag.appendChild(postHeaderName);

      // APPEND THE ANCHOR TAG INSIDE THE POST HEADER DIV
      postHeaderDiv.appendChild(anchorTag);

      // APPEND THE POST HEADER DIV TO THE POST DIV
      postDiv.appendChild(postHeaderDiv);

      // CREATE A POST CONTENT DIV
      const postContentDiv = document.createElement('div');

      // CREATE A PARAGRAPH TAG
      const postContentParagraph = document.createElement('p');
      postContentParagraph.classList.add('my-1');

      // APPEND THE TXT FROM THE INPUT BOX INT THE PARAGRApH
      postContentParagraph.innerHTML = comment;

      // APPEND ALL TO THE POST CONTENT DIV
      postContentDiv.appendChild(postContentParagraph);

      // APPEND THE POST CONTENT DIV TO THE POST DIV
      postDiv.appendChild(postContentDiv);

      // APPEND THE NEW DIV TO THE POSTS DIV
      postsDiv.appendChild(postDiv);
   });
}
