var navToggle = document.querySelectorAll('.rx-side-toggle');
var navSide = document.querySelectorAll('.rx-side');

let navToggleStat = false;
navToggle[0].addEventListener('click', () => {
    if(!navToggleStat){
        navToggle[0].classList += " rx-side-toggle-open";
        navSide[0].classList.add("rx-side-open");
        navToggleStat = true;
    }else{
        navToggle[0].classList = "rx-side-toggle";
        navSide[0].classList.remove("rx-side-open");
        navToggleStat = false;
    }
});