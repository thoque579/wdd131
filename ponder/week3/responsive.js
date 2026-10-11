/* 
get the elements that we want to modify
figure out when the modifcation should occur
for each element
    figure out which one it is
    output that number


    figure out where we will display the message.. get a reference
    figure out what day it is
    figure out how we want to display that day
    update the display

*/

function displayWelcome() {
    const headerEL = document.querySelector("header");
    const dayIndex = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday"]
    const message = `Happy ${days[dayIndex]}`

    const messageElement = document.createElement('p');
    messageElement.textContent = message
    headerEL.append(messageElement);
}


function renderNumber(element, index) {
    const number = document.createElement("span");
    number.textContent = index + 1;
    element.prepend(number);

}

function addIndex() {
    const scriptureElements = document.querySelectorAll(".scripture");
    scriptureElements.forEach(renderNumber)


}

addIndex();

const navEl = document.querySelector(".main-nav");

function toggleMenu() {
    navEl.classList.toggle("hide");
    menuBtn.classList.toggle("change");
    
}

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", toggleMenu)

