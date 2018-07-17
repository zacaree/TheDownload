
let scrollPosY = 0; // Holds current scroll position
let ticking = false;
const footer = document.querySelector('footer');

const animateElements = {
  heroImg: document.querySelector('.heroImg'),
  heroTxt: document.querySelector('.heroTxt'),
  animateHeroImg: function() {
    const scale = (1 + (scrollPosY * 0.0006)).toFixed(3);
    this.heroImg.style.transform = `scale3d(${scale}, ${scale}, 1)`;
    this.heroImg.style.opacity = (0.5 - (scrollPosY * 0.001)).toFixed(2);
  },
  animateHeroTxt: function() {
    const yPos = (scrollPosY * 0.5).toFixed(0);
    this.heroTxt.style.transform = `translate3d(0, ${yPos}px, 0)`;
    this.heroTxt.style.opacity = (1 - (scrollPosY * 0.0025)).toFixed(2);
  },
  handleFooter: function() {
    if (scrollPosY > 300) {
      footer.classList.remove('hideFooter');
    } else {
      footer.classList.add('hideFooter');
    }
  }
}



// Callback for our scroll event - just keeps track of the last scroll value
function onScroll() {
  scrollPosY = window.scrollY;
  requestTick();
}



// Calls rAF if it's not already been done already
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
    ticking = true;
  }
}



// Our animation callback
// Call your animations inside this function
function update() {
  animateElements.animateHeroTxt();
  animateElements.animateHeroImg();
  animateElements.handleFooter();

  // allow further rAFs to be called
  ticking = false;
}



export default function parallax() {
  window.addEventListener('scroll', onScroll, false);
}
