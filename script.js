const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');
const memeInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeContainer = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

function changeBorder(event) {
  const borderName = event.target.id;
  const regex = /earth|fire|water/g;
  const currentClasses = memeContainer.className;
  if (currentClasses.match(regex)) {
    memeContainer.className = currentClasses.replace(regex, borderName);
  } else {
    memeContainer.classList.add(borderName);
  }
}

function changeImage(event) {
  // Source: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
  const url = URL.createObjectURL(event.target.files[0]);
  memeImage.src = url;
}

function changeText(event) {
  memeText.innerText = event.target.value;
}

function eventAllClasses(className, type, functionName) {
  const elements = document.querySelectorAll(`.${className}`);
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].addEventListener(type, functionName);
  }
}

function templateIamge(event) {
  memeImage.src = event.target.src;
}

memeInsert.addEventListener('change', changeImage);
memeInput.addEventListener('keyup', changeText);
fireButton.addEventListener('click', changeBorder);
waterButton.addEventListener('click', changeBorder);
earthButton.addEventListener('click', changeBorder);

window.onload = () => {
  eventAllClasses('template-image', 'click', templateIamge);
};
