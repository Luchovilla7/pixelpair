//Burguer Navbar
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

//Preloader
var loader = document.getElementById("preloader");

window.onload = setTimeout(function () {

        document.body.style.overflow = "auto";

		loader.style.display = "none";

	},2800)