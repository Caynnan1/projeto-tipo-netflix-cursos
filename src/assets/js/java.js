window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbarpc");
    if (window.scrollY >= window.innerHeight * 0.2) {
        navbar.style.backgroundColor = "#131313";
    } else {
        navbar.style.backgroundColor = "transparent"; // Restaura a cor de fundo padrão
    }
});