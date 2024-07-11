// navbar section
function showNav() {
    document.getElementById("nav_menu").classList.remove('hidden');
    document.getElementById("logo_img").classList.add('hidden');
    document.getElementById("nav_close").classList.remove('hidden');
    document.getElementById("nav_show").classList.add('hidden');
}
function hideNav() {
    document.getElementById("nav_menu").classList.add('hidden');
    document.getElementById("logo_img").classList.remove('hidden');
    document.getElementById("nav_close").classList.add('hidden');
    document.getElementById("nav_show").classList.remove('hidden');
}
document.addEventListener('click', function (event) {
    var isClickInside = document.getElementById('header').contains(event.target);

    if (!isClickInside) {
        hideNav();
    }
});