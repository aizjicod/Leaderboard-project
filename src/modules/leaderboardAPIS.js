// create a game (this will be done only once)
const createGame = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'league of legends:'
      }),
  })
    .then(response => response.json())
    .then(data => {
      let arr = [...data.result.split(' ')] 
      return arr[3]
  })

  // created id from the code above.
  // if you want to create a new instance use the code above

const GAMEID = 'EiokU10Dq6sYxxAGiv7j'
  
const addNewScore = async (id, scores) => {
    await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scores),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data) 
  })
} 
  
  const fetchScores = async () => {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EiokU10Dq6sYxxAGiv7j/scores/`)
    return response.json().then(data => data.result);
}
    
  

export default {
  createGame,
  GAMEID,
  addNewScore,
  fetchScores
}
