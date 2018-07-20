
export default function videoHandler() {
  const tigerVideo = document.getElementById('tigerVideo');
  const tigerVideoCover = document.getElementById('tigerVideoCover');
  const powerProVideo = document.getElementById('powerProVideo');
  const powerProVideoCover = document.getElementById('powerProVideoCover');

  tigerVideoCover.addEventListener('click', playTigerVideo, false)
  powerProVideoCover.addEventListener('click', playPowerProVideo, false)

  function playTigerVideo() {
    tigerVideo.src += "&autoplay=1";
    tigerVideoCover.style.opacity = 0;
    tigerVideoCover.style.transform = 'scale(1.1)';
    setTimeout(function() {
      tigerVideoCover.style.display = 'none';
    }, 500)
  }

  function playPowerProVideo() {
    powerProVideo.src += "&autoplay=1";
    powerProVideoCover.style.opacity = 0;
    powerProVideoCover.style.transform = 'scale(1.1)';
    setTimeout(function() {
      powerProVideoCover.style.display = 'none';
    }, 500)
  }
}