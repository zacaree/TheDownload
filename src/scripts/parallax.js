
const headerImg = document.getElementById('headerImg');
const headerText = document.getElementById('headerText');
let scrollYPosition;


function handleScroll(e) {
  scrollYPosition = window.scrollY;

  transformBg(
    headerImg,
    1 + (scrollYPosition * 0.0006),
    0.5 - (scrollYPosition * 0.001)
  );

  transformText(
    headerText,
    scrollYPosition * 0.5,
    1 - (scrollYPosition * 0.0025)
  );
  
  requestAnimationFrame(handleScroll);
}


function transformBg(el, scale, opacity) {
  el.style.transform = `scale3d(${scale}, ${scale}, 1)`;
  el.style.opacity = opacity;
}

function transformText(el, yPos, opacity) {
  el.style.transform = `translate3d(0, ${yPos}px, 0)`;
  el.style.opacity = opacity;
}

export default handleScroll;