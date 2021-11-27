const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');

function changeImage(event) {
  // Source: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
  const url = URL.createObjectURL(event.target.files[0]);
  memeImage.src = url;
}

memeInsert.addEventListener('change', changeImage);
