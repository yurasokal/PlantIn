const mainMenu = document.querySelector('.nav__mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navLinks = document.querySelectorAll('.nav__link');

function closeLinks() {
  navLinks.forEach((element) => {
    element.addEventListener('click', () => {
      mainMenu.style.top = '-100%';
    });
  });
}

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
  closeLinks();
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

const header = document.getElementById('myHeader');
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.onscroll = () => {
  myFunction();
};
