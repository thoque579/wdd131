const menu = document.querySelector('.menu');
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("show");
})

const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener("click", openModal)

function openModal(e) {
    const clickedImage = e.target;

    if (clickedImage.tagName === "IMG") {
        const imageSrc = clickedImage.src.replace("-sm", "-full");

        modalImage.src = imageSrc;
        modalImage.alt = clickedImage.alt;

        modal.showModal();
    }
}


closeButton.addEventListener("click", () => {
    modal.close();
})

modal.addEventListener("click", (e) =>{
    if(e.target === modal) {
        modal.close();
    }
})