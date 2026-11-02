function playPause() {
  var myVideo = document.getElementById("basevideo");
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}

function SetVolume(val) {
  var player = document.getElementById("basevideo");
  console.log("Before: " + player.volume);
  player.volume = val / 100;
  console.log("After: " + player.volume);
}
