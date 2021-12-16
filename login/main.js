

/**============================Nav Toggle==========================**/
const navToggle = document.querySelector('.nev__toggole');
const header = document.querySelector(".header");


navToggle.addEventListener("click", function (){
  header.classList.toggle('active');
});