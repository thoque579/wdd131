
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    
// Code to show modal  - Use event parameter 'e'   
// figure out or record which image was clicked on.
// get the name of the large image
// put the correct src path in teh dialog
// show dialog
    const clickedImage = e.target

    if(clickedImage) {
        const imageSrc = clickedImage.src.replace("-sm", "-full");

        modalImage.src = imageSrc;
        modalImage.alt = clickedImage.alt;

        modal.showModal();

    }
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});


          