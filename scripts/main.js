// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Slideshow images in ingredients section
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slideshow-image');
    // Current index
    let index = 0;
    // 4 seconds in milliseconds
    const delay = 4000; 

    function showNextImage() {
        // Hide the current active image
        images[index].classList.remove('active');

        // Move to the next image
        index = (index + 1) % images.length;

        // Show the new active image
        images[index].classList.add('active');
    }

    // Set first image as active when the page loads
    images[index].classList.add('active');

    // Start the slideshow
    setInterval(showNextImage, delay);
});