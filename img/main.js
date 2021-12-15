const header = document.querySelector('.header');
const heroArea = document.querySelector('.hero__section');
const heroContent = document.querySelector('.content');
const heroIllustration = document.querySelector('.hero__section__illustration');
const headerOption ={
    rootMargin: '0px',
    threshold: 1.0
}
 
const headerObserver = new IntersectionObserver(
    (entries, headerObserver)=>
{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('style');
            heroContent.classList.add('style');
            heroIllustration.classList.add('style');
        }
        else{
            header.classList.remove('style');
        }
    });
},
 headerOption);

 headerObserver.observe(heroArea)


// ==================all section observer=============//
const section = document.querySelectorAll('section');

const allOption = {};
const allSectionObserver = new IntersectionObserver((entries, allSectionObserver)=>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){

        }
        else{

        }
    });
}, allOption);

allSectionObserver.observe()