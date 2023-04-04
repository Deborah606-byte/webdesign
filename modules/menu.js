const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const discover = document.querySelector('.hero');

burger.addEventListener('click', () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        discover.classList.add("discover");
    } else{
        menu.classList.remove('flex');
        menu.classList.add('hidden');
        discover.classList.remove("discover");
    }
});

