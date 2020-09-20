// SELECTORS
const addSocialLinksBtn = document.querySelector('.add-social-links');
const socialLinks = document.querySelector('.social-links');
// EVENTS
addSocialLinksBtn.addEventListener('click', addSocialLinksBtnFunction);

// FUNCTIONS
function addSocialLinksBtnFunction(e) {
   socialLinks.style.display = 'block';
}
