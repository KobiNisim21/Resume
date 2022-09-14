var images = [
  "https://i.imgur.com/rhgulm3.jpg",
  "https://i.imgur.com/E2SglIZ.jpg",
  "https://i.imgur.com/QV1Ef2L.jpg",
  "https://i.imgur.com/9lFb5Nc.jpg"];

function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById('image').src = images[x];
}

randImg();
