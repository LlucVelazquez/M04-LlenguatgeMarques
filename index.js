window.addEventListener('scroll', function() {
    const nav = document.getElementById("Menu");
    if (this.window.scrollY > 100) {
        nav.style.height="50px";
    }else {
        nav.style.height="250px";
    }
})