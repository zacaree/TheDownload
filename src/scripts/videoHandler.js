
export default function videoHandler() {
  const videos = Array.from(document.querySelectorAll('.video'));

  videos.forEach(video => {
    document.addEventListener('DOMContentLoaded', resetAutoplayValue, false);
    function resetAutoplayValue() {
      video.src = video.src.replace("&autoplay=1", "");
    }

    const videoCover = video.nextElementSibling;
    videoCover.addEventListener('click', playVideo, false);

    function playVideo() {
      video.src += "&autoplay=1";
      videoCover.style.opacity = 0;
      videoCover.style.transform = 'scale(1.1)';
      setTimeout(() => videoCover.style.display = 'none', 500);
    }
  })
}
