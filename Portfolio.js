// =====================
// Custom Cursor Setup
// =====================
const innercircle = document.querySelector('.inner-circle');
const outercircle = document.querySelector('.outer-circle');

// Hide cursor on touch devices
if ('ontouchstart' in window) {
    innercircle.style.display = 'none';
    outercircle.style.display = 'none';
} else {
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        innercircle.style.top = `${y - 7.5}px`;
        innercircle.style.left = `${x - 7.5}px`;
        outercircle.style.top = `${y - 25}px`;
        outercircle.style.left = `${x - 25}px`;
    });
}

// =====================
// Scroll to Top Button
// =====================
const upButton = document.querySelector('.go-up');
function checkScroll() {
    return window.scrollY > 10;
}
function toggleUpButton() {
    upButton.style.display = checkScroll() ? 'inline-block' : 'none';
}
window.addEventListener('scroll', toggleUpButton);
window.addEventListener('load', toggleUpButton);
upButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =====================
// Resume Button Hover
// =====================
const resumebutton = document.querySelector('.buttons button:first-of-type');
resumebutton.addEventListener('mouseover', () => {
    outercircle.style.display = 'none';
    outercircle.style.borderWidth = '3px';
    outercircle.style.borderColor = 'rgb(35, 35, 35)';
    innercircle.style.borderColor = 'rgb(35, 35, 35)';
    innercircle.style.backgroundColor = 'rgb(35, 35, 35)';
});
resumebutton.addEventListener('mouseout', () => {
    outercircle.style.display = 'block';
    outercircle.style.borderWidth = '2px';
    outercircle.style.borderColor = 'white';
    innercircle.style.borderColor = 'white';
    innercircle.style.backgroundColor = 'white';
});

// =====================
// Mobile Menu Toggle
// =====================
const openmenu = document.querySelector('.menu-openbutton');
const closemenu = document.querySelector('.menu-closebutton');
const unlist = document.querySelector('.Navbar ul');

openmenu.addEventListener('click', () => {
    unlist.style.height = '100%';
    unlist.style.maxHeight = '100vh';
    unlist.style.overflowY = 'auto';
    unlist.style.padding = '50px';
});
closemenu.addEventListener('click', () => {
    unlist.style.height = '0';
    unlist.style.padding = '0px';
    unlist.style.overflowY = 'hidden';
});

// =====================
// Contact Form Auto Reset
// =====================
const contactform = document.querySelector(".contact-form");
contactform.addEventListener("submit", function () {
    setTimeout(() => {
        contactform.reset();
    }, 0);
});
