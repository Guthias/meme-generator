const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');
const memeInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function changeImage(event) {
  // Source: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
  const url = URL.createObjectURL(event.target.files[0]);
  memeImage.src = url;
}

function changeText(event) {
  memeText.innerText = event.target.value;
}

memeInsert.addEventListener('change', changeImage);
memeInput.addEventListener('keyup', changeText);
