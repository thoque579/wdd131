const mode = document.querySelector("#mode");

mode.addEventListener("change", function(){

    if (mode.value == "dark"){
        document.body.classList.add("dark")
    } else {
        document.body.classList.remove("dark")
    }

    
});