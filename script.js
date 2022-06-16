let header = document.getElementById("btnHamburger");
let menuItems = document.getElementById("span-overlay-block");
header.addEventListener('click', function(){
    console.log('hi');
    if(header.classList.contains('open')){
        header.classList.remove('open');
        menuItems.classList.add('open');
        menuItems.style.display= 'none';
    }
    else{
        header.classList.add('open');  
        menuItems.classList.remove('open');
        menuItems.style.display= 'inherit';
    }
});

/* These functions change heading based on the users' position on the Y-axis*/
/*For the Menu - Most popular page*/
window.addEventListener("scroll", scrollDown);

function scrollDown(e) {
    let heading = document.getElementById("most-popular-text");
    if(window.pageYOffset >1500){
        heading.style.display = "none";
    }
    else if(window.pageYOffset > 950) {        
        heading.innerText = "Expresso Yourself"
    }else if(window.pageYOffset > 450) {
        heading.innerText = "Browse"
    }else if(window.pageYOffset > 0) {        
        heading.innerText = "Most Popular"
    }
    else{
        heading.style.display = "initial";
    }
}
window.addEventListener("scroll", scrollUp);

function scrollUp(e) {
    let heading = document.getElementById("most-popular-text");
    if(window.pageYOffset <1500){
        heading.style.display = "initial";
    }
    else{
        heading.style.display = "none";
    }
}
/*End of the Menu - Most popular page*/

/*For the Processing - Cherry page*/
window.addEventListener("scroll", scrollDownProcessing);

function scrollDownProcessing(e) {
    let heading = document.getElementById("cherry-text");
    if(window.pageYOffset >1650){
        heading.style.display = "none";
    }
    else if(window.pageYOffset > 1375) {        
        heading.innerText = "Blog"
    }else if(window.pageYOffset > 1100) {
        heading.innerText = "Brewing"
    }else if(window.pageYOffset > 825) {        
        heading.innerText = "Grinding"
    }else if(window.pageYOffset > 550) {        
        heading.innerText = "Roasting"
    }else if(window.pageYOffset > 275) {        
        heading.innerText = "Drying"
    }
    else if(window.pageYOffset > 0) {        
        heading.innerText = "Cherry Harvest"
    }
    else{
        heading.style.display = "initial";
    }
}
window.addEventListener("scroll", scrollUpProcessing);

function scrollUpProcessing(e) {
    let heading = document.getElementById("cherry-text");
    if(window.pageYOffset <1650){
        heading.style.display = "initial";
    }
    else{
        heading.style.display = "none";
    }
}
/*End of the Processing - Cherry page*/

/*For the Location - Store map page*/
window.addEventListener("scroll", scrollDownLocation);

function scrollDownLocation(e) {
    let heading = document.getElementById("store-text");
    if(window.pageYOffset > 1375){
        heading.style.display = "none";
}
    else if(window.pageYOffset > 1100) {        
        heading.innerText = "Johannesburg"
    }else if(window.pageYOffset > 825) {
        heading.innerText = "Durban"
    }else if(window.pageYOffset > 550) {        
        heading.innerText = "Cape Town"
    }else if(window.pageYOffset > 275) {        
        heading.innerText = "Blog"
    }
    else if(window.pageYOffset > 0) {        
        heading.innerText = "Store Map"
    }
    else{
        heading.style.display = "initial";
    }
    
}
window.addEventListener("scroll", scrollUpLocation);

function scrollUpLocation(e) {
    let heading = document.getElementById("store-text");
    if(window.pageYOffset < 1375){
        heading.style.display = "initial";
    }
    else{
        heading.style.display = "none";
    }
}
/*End of the Location - Store map page*/