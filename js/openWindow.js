let buttonAboutMe = document.querySelector('.slide_from_left');
let buttonCloseAboutMe = document.querySelector('.close-info-window');

let windowAboutMe = document.querySelector('.info-window');

buttonAboutMe.addEventListener('click', e => {
  e.preventDefault();
  windowAboutMe.classList.remove('hidden');
});

buttonCloseAboutMe.addEventListener('click', e => {
  e.preventDefault();
  windowAboutMe.classList.add('hidden');
});

let buttonsDiscriptionCase = document.querySelectorAll('.right');
let buttonsCloseDIscription = document.querySelectorAll('.close-discription');
let windowsDiscriptionCase = document.querySelectorAll('.discription-case');

buttonsDiscriptionCase.forEach(function (button) {
  button.addEventListener('click', openWidndowDiscription);
});
function openWidndowDiscription(event) {
  event.preventDefault();
  let buttonId = event.target.id;
  windowsDiscriptionCase.forEach(function (window) {
    if (window.id === buttonId) window.classList.remove('hidden');
  });
}
function closeWidndowDiscription(event) {
  event.preventDefault();
  windowsDiscriptionCase.forEach(function (window) {
    window.classList.add('hidden');
  });
}
buttonsCloseDIscription.forEach(function (btn) {
  btn.addEventListener('click', closeWidndowDiscription);
});

let buttonCert = document.getElementById('5');
let blocCert = document.getElementById('certs');

buttonCert.addEventListener('click', openWindowCerts);
function openWindowCerts() {
  if (blocCert.className == 'items') blocCert.className = 'hidden';
  else blocCert.className = 'items';
}
