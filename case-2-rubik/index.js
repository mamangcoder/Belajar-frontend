const gambar = document.getElementById('gambar');
gambar.setAttribute('width', 300);
gambar.setAttribute('height', 215);

const buttons = document.querySelectorAll('.button')
const playButton = buttons[3];
const playButtonElement = playButton.children[0];
playButtonElement.setAttribute('type', 'submit');

// Manipulasi Konten dengan innerText
const dicoding = document.getElementById('dicodingLink');
dicoding.innerText = 'Belajar Programming di Dicoding';


// Manipulasi Konten dengan innerHTML
dicoding.innerHTML = '<b>Belajar Programming di Dicoding</b>';
dicoding.innerHTML = '<i>Belajar Programming di Dicoding</i>';


// Menambahkan Elemen HTML ke DOM
// Menambahkan Elemen dengan appendChild()
const newElement = document.createElement('li');
newElement.innerText = 'dandilesmana.dev';

const daftar = document.getElementById('googleLink');
daftar.appendChild(newElement);