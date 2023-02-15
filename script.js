// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
// Store the original title of the webpage
var originalTitle = document.querySelector("title").textContent;

// Update the title of the webpage using setTimeout
setTimeout(function(){
  document.querySelector("title").textContent = "Please come back- Clay";
}, 5000);

// Check for visibility changes and restore the original title when the page becomes visible again
document.addEventListener("visibilitychange", function() {
    if (!document.hidden) {
      document.querySelector("title").textContent = originalTitle;
    }
});
