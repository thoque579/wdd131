const dropdown = document.querySelector("#dropdown");
const submenu = document.querySelector("#submenu");

dropdown.addEventListener("click", function(){
    event.preventDefault()
    submenu.classList.toggle("hidden");
})