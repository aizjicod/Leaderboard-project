import ScoreClass from './modules/scoreClass.js';
import apis from './modules/leaderboardAPIS.js';
import './style.css';

const nameInput = document.querySelector('#input-name');
const scoreInput = document.querySelector('#input-score');
const submitInput = document.querySelector('#input-submit');
const refreshBtn = document.querySelector('#refresh-btn');

const arrScores = [];
const gameID = apis.GAMEID;

window.addEventListener('load', async () => {
  // getting the
  const fetchData = await apis.fetchScores();
  arrScores.push(...fetchData);
  // putting each score on DOM
  if (arrScores.length !== -1) {
    arrScores.forEach((element) => {
      const score = new ScoreClass(element.user, element.score);
      score.addScoreDOM();
    });
  }
});

submitInput.addEventListener('click', (e) => {
  e.preventDefault();
  // setting the DOM
  const newScore = new ScoreClass(nameInput.value, scoreInput.value);
  // add score to the api
  apis.addNewScore(gameID, newScore);
  arrScores.push(newScore);
  // reset values for inputs
  nameInput.value = '';
  scoreInput.value = '';
  nameInput.focus();
});

refreshBtn.addEventListener('click', () => window.location.reload());
