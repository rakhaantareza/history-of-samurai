const toggleMenu = document.getElementsByClassName('nav-toggle')[0];
const navLinks = document.getElementsByClassName('nav-links');
toggleMenu.addEventListener('click', function() {
  for(var i = 0; i < navLinks.length; i++)
  navLinks[i].classList.toggle('active')
});