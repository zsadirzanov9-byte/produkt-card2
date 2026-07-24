// Покраска всех карточек

const productCards = document.querySelectorAll('.container');
const changeColorCardButton = document.querySelector('#change-color-all-card')
const greenColorHash = '#00FF00';

changeColorCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.cotainer');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', () => {
  window.open('https://google.com')
})

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click',() => outputConsoleLog('дз №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}