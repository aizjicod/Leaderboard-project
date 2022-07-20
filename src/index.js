import scoreClass from './modules/scoreClass.js';
import Storage from "./modules/localStorage.js";
import './style.css';

const nameInput = document.querySelector('#input-name');
const scoreInput = document.querySelector('#input-score');
const submitInput = document.querySelector('#input-submit');
const refreshBtn = document.querySelector('#refresh-btn');

let arrScores = [];

submitInput.addEventListener('click', (e) => {
  e.preventDefault();
console.log(document.querySelector('li p').textContent)
  if(document.querySelector('li p').textContent === 'add the name on the first imput of the rigth') {
    document.querySelector('li p').parentElement.remove();
  }
  if(document.querySelector('li p').textContent === 'name of the person') {
    document.querySelector('li p').parentElement.remove();
  }
  if(document.querySelector('li p').textContent === 'if you want to refresh the page ') {
    document.querySelector('li p').parentElement.remove();
  }
  

  // setting the DOM
  const newScore = new scoreClass(nameInput.value, scoreInput.value)
  newScore.addScoreDOM();

  // add items to the local storage
  arrScores.push(newScore);
  Storage.setStorage(arrScores)
  // reset values for inputs
  nameInput.value = '';
  scoreInput.value = '';
});

refreshBtn.addEventListener('click', () => {
  arrScores = [];
  Storage.removeStorageItem();
  location.reload();
})

window.addEventListener('load', () => {

  // putting each score on DOM
  if(Storage.getStorage() === null){
    let predefValues = [
      {
        name: 'add the name on the first imput of the rigth',
        score: 'add the score on the second imput of the rigth'
      },
      {
        name: 'name of the person',
        score: 'exmaple of score: 200'
      },
      {
        name: 'if you want to refresh the page ',
        score: 'click the button from above'
      }
    ];

    predefValues.forEach(element => {
      let score = new scoreClass(element.name, element.score)
      score.addScoreDOM()
    });
    
  } else {
    arrScores.push(...(Storage.getStorage()))
    arrScores.forEach(element => {
      let score = new scoreClass(element.name, element.score)
      score.addScoreDOM()
    });
  }
})