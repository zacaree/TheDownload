
export default function backToTop() {
  const backToTopBtn = document.querySelector('.backToTop');

  function backToTopHandler() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  backToTopBtn.addEventListener('click', backToTopHandler, false);
}