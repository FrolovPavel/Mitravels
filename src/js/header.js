let header = document.querySelector(".header");
let intro = document.querySelector(".first");
let introH = 120;
let scrollPos = pageYOffset;

addEventListener("scroll", function () {
    scrollPos = pageYOffset;

    if(scrollPos > introH) {
        header.classList.add("fixed");
    } else  {
        header.classList.remove("fixed");
    }

})