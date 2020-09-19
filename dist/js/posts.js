// SELECTORS
const postsForm = document.querySelector('.posts-form');
const postFormInput = document.querySelector('.text-area');
const postsDiv = document.querySelector('.posts');

// EVENTS
postsForm.addEventListener('submit', postsFormSubmitted);

// FUNCTIONS
function postsFormSubmitted(e) {
   e.preventDefault();
   // Grab the text being typed in
   const postFormText = postFormInput.value;
   // CREATE A NEW DIV
   const postDiv = document.createElement('div');
   postDiv.classList.add('post');
   postDiv.classList.add('bg-white');
   postDiv.classList.add('my-1');
   postDiv.classList.add('p-1');

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

   // CREATE A THUMBS UP BUTTON
   const thumbsUpBtn = document.createElement('button');
   thumbsUpBtn.classList.add('btn');

   // ADD THE THUMBS UP ICON TO THE BUTTON
   thumbsUpBtn.innerHTML = '<i class="fas fa-thumbs-up"><span>4</span></i>';

   // CREATE A THUMBS DOWN BUTTON
   const thumbsDownBtn = document.createElement('button');
   thumbsDownBtn.classList.add('btn');

   // ADD THE THUMBS Down ICON TO THE BUTTON
   thumbsDownBtn.innerHTML = '<i class="fas fa-thumbs-down"></i>';

   // CREATE AN ANCHOR TAG FOR THE DISCUSSION
   const anchorTagDiscussion = document.createElement('a');
   anchorTagDiscussion.href = 'post.html';
   anchorTagDiscussion.classList.add('btn');
   anchorTagDiscussion.classList.add('btn-primary');

   // CREATE A TEXT FOR THE ANCHOR TAG
   const anchorTagDiscussionText = document.createTextNode('Discussion');

   // APPEND THE ANCHOR TAG DISCUSSION TEXT TO THE ANCHOR TAG DISCUSSION
   anchorTagDiscussion.appendChild(anchorTagDiscussionText);

   // APPEND ALL TO THE POST CONTENT DIV
   postContentDiv.appendChild(postContentParagraph);
   postContentDiv.appendChild(thumbsUpBtn);
   postContentDiv.appendChild(thumbsDownBtn);
   postContentDiv.appendChild(anchorTagDiscussion);

   // APPEND THE POST CONTENT DIV TO THE POST DIV
   postDiv.appendChild(postContentDiv);

   // APPEND THE NEW DIV TO THE POSTS DIV
   postsDiv.appendChild(postDiv);

   // CLEAR TEH INPUTS FIELD
   postFormInput.value = '';
}
