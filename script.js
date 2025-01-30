document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navcontainer');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentSlide = 0;

// Handle next button
nextBtn.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Loop back to the first slide
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
});

// Handle previous button
prevBtn.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1; // Loop back to the last slide
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
});



function playVideo(videoId) {
    // Get the video element by its ID
    const video = document.getElementById(videoId);

    // Toggle video visibility
    if (video.style.display === "none") {
        video.style.display = "block"; // Show the video
        video.play(); // Start playing the video
    } else {
        video.pause(); // Pause the video
        video.style.display = "none"; // Hide the video
    }
}