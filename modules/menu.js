const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const discover = document.querySelector('.hero');
const homeHero = document.querySelector('.home-hero');

burger.addEventListener('click', () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        discover && discover.classList.add("discover");
        homeHero && (homeHero.style.marginTop = "200px");
    } else{
        menu.classList.remove('flex');
        menu.classList.add('hidden');
        discover && discover.classList.remove("discover");
        homeHero && (homeHero.style.marginTop = "0px");
    }
});

