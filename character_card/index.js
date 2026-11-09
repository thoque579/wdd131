const attack = document.querySelector('.attack');
const level_up = document.querySelector('.level_up');
const health = document.querySelector("#health");
const level = document.querySelector("#level");


attack.addEventListener('click', function() {
    let current_health = Number(health.textContent)

    current_health -= 10;

    health.textContent = current_health

    if(current_health === 0) {
        alert("died");
    }



})


level_up.addEventListener('click', function() {
    let current_level = Number(level.textContent);

    current_level += 1;

    level.textContent = current_level

})

