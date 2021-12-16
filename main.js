const header = document.querySelector(".header");
const heroArea = document.querySelector(".hero__section");
const content = document.querySelector(".content");
const heroIllustration = document.querySelector(".hero__section__illustration");

const headerOption = {
  threshold: .87,
  rootMargin: "0px",
};

const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("style");
    } else {
      header.classList.remove("style");
      header.classList.add("sstyle");
      content.classList.add("style");
      heroIllustration.classList.add("style");
    }
  });
}, headerOption);

headerObserver.observe(heroArea);

//==============section observer====================//
const sections = document.querySelectorAll('.section');
const aboutContent = document.querySelector('.about__content');
const sectionOption = {
  threshold: .5,
};
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      aboutContent.classList.add('styles');
      entry.target.classList.add('styles');
      console.log(sections)
      sectionObserver.unobserve(entry.target);
    }
  });
}, sectionOption);

sections.forEach((section) => {
  sectionObserver.observe(section);
});


/**============================Nav Toggle==========================**/
const navToggle = document.querySelector('.nev__toggole');

navToggle.addEventListener("click", function (){
  header.classList.toggle('active');
});