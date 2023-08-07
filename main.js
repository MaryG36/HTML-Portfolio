const navbar = document.getElementsByClassName("navbar-list")[0];
const toggleButton = document.getElementsByClassName("menu")[0];

function toggleNavbar(){
    if(!navbar.classList.contains("responsive")){
        navbar.classList.add("responsive");
    } else {
        navbar.classList.remove("responsive");
    }
}

document.body.addEventListener("click", (e)=>{
    const isClickInside = toggleButton.contains(e.target);
    if(isClickInside) {
        toggleNavbar();
    } else if(navbar.classList.contains("responsive")) {
        toggleNavbar();
    }
})