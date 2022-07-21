import ScoreClass from './modules/scoreClass.js';
// import Storage from './modules/localStorage.js';
import apis from './modules/leaderboardAPIS.js';
import './style.css';

const nameInput = document.querySelector('#input-name');
const scoreInput = document.querySelector('#input-score');
const submitInput = document.querySelector('#input-submit');
const refreshBtn = document.querySelector('#refresh-btn');

let arrScores = [];
let gameID = apis.GAMEID;

window.addEventListener('load', async () => {
  // getting the
  let fetchData = await apis.fetchScores();
  arrScores.push(...fetchData)
  // putting each score on DOM
  if(arrScores.length !== - 1 ) {
    console.log('arr')
    arrScores.forEach((element) => {
      const score = new ScoreClass(element.user, element.score);
      score.addScoreDOM();
    })
  }
});

submitInput.addEventListener('click', (e) => {
  e.preventDefault();
  // setting the DOM
  const newScore = new ScoreClass(nameInput.value, scoreInput.value);
  // add score to the api
  apis.addNewScore(gameID,newScore)
  arrScores.push(newScore);
  // reset values for inputs
  nameInput.value = '';
  scoreInput.value = '';
  nameInput.focus();
});

refreshBtn.addEventListener('click', () => window.location.reload());
