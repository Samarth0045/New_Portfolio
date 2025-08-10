let innercircle = document.querySelector('.inner-circle')
let outercircle = document.querySelector('.outer-circle')

window.onmousemove = (e) => {
    let x = e.clientX;
    let y = e.clientY;

    innercircle.style.top = `${y - 7.5}px`;
    innercircle.style.left = `${x - 7.5}px`;

    outercircle.style.top = `${y - 25}px`;
    outercircle.style.left = `${x - 25}px`;
}

window.onscroll = () => {
    if (checkScroll()) {
        upButton.style.display = 'inline-block'
    } else {
        upButton.style.display = 'none'
    }
}
window.onload = () => {
    if (checkScroll()) {
        upButton.style.display = 'inline-block'
    } else {
        upButton.style.display = 'none'
    }
}

let resumebutton = document.querySelector('.buttons button:first-of-type')
resumebutton.addEventListener('mouseover', () => {
    outercircle.style.borderWidth = '3px'
    outercircle.style.display = 'none'
    outercircle.style.borderColor = 'rgb(35, 35, 35)'
    innercircle.style.borderColor = 'rgb(35, 35, 35)'
    innercircle.style.backgroundColor = 'rgb(35, 35, 35)'
})
resumebutton.addEventListener('mouseout', () => {
    outercircle.style.display = 'block'
    outercircle.style.borderWidth = '2px'
    outercircle.style.borderColor = 'white'
    innercircle.style.borderColor = 'white'
    innercircle.style.backgroundColor = 'white'
})

function checkScroll() {
    if (window.scrollY > 10) {
        return true;
    }
    return false;
}

let upButton = document.querySelector('.go-up')
upButton.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

let openmenu = document.querySelector('.menu-openbutton')
let closemenu = document.querySelector('.menu-closebutton')
let unlist = document.querySelector('.Navbar ul')
openmenu.addEventListener('click', () => {
    unlist.style.height = '100vh'
    unlist.style.padding = '50px'
})
closemenu.addEventListener('click', () => {
    unlist.style.height = '0'
    unlist.style.padding = '0px'
})

/* 
// IntersectionObserver callback
const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
        // When 30% of the section is visible, scroll to that section
        entry.target.scrollIntoView({ behavior: 'smooth' });

        if (entry.target.className === "Main main-section") {
            window.scrollTo(0, 0);
        }
      }
    });
  };
  
  // Observer options
  const options = {
    threshold: 0.4 // Trigger when 30% of the section is in view
  };
  
  // Create the observer
  const observer = new IntersectionObserver(observerCallback, options);
  
  // Target the sections to observe
  const sections = document.querySelectorAll('.main-section');
  sections.forEach(section => {
    observer.observe(section);
  });
   */

let contactform = document.querySelector(".contact-form").addEventListener("submit", function() {
    setTimeout(() => {
        this.reset();
    }, 0);
})