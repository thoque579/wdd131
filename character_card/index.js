const attack = document.querySelector('.attack');
const level_up = document.querySelector('.level_up');
const health = document.querySelector("#health");
const level = document.querySelector("#level");
const name = document.querySelector("#name");
const characterClass = document.querySelector("#class");
const image = document.querySelector("#character-image");



let character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    health: 100,
    level: 100,
    image: "snortleblat.webp",

    attack(){

        if (this.health <= 0) {
            alert("Your character is already dead!");
            return;
        }
        this.health -= 10;

       if(this.health <= 0) {

            this.health=0;

            alert("your character died");
       }
       
       health.textContent = this.health;
    },

       level_up(){
        this.level +=1;
        level.textContent = this.level

       },

    }


name.textContent = character.name;
characterClass.textContent = character.class;
image.src = character.image;
image.alt = character.name;

health.textContent = character.health;
level.textContent = character.level;





attack.addEventListener('click', function() {
    character.attack();
})


level_up.addEventListener('click', function() {
    character.level_up();

})

