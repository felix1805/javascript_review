let deckId = ''

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    deckId = data.deck_id

  })
  .catch(err => {
    console.log(`error ${err}`)
  });

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo() {
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image
      document.querySelector('#draws_remaining').innerText = ('Remaining Cards: ' + data.remaining)

      let player1Val = convertToNum(data.cards[0].value)
      let player2Val = convertToNum(data.cards[1].value)
      console.log(player1Val)
      console.log(player2Val)
      if (player1Val > player2Val) {
        document.querySelector('#result').innerText = 'Player 1 Wins'
      } else if (player1Val < player2Val) {
        document.querySelector('#result').innerText = 'Player 2 Wins'
      } else {
        document.querySelector('#result').innerText = 'Time for War!'
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function convertToNum(val) {
  if (val === 'JACK') {
    return 11
  } else if (val === 'QUEEN') {
    return 12
  } else if (val === 'KING') {
    return 13
  } else if (val === 'ACE') {
    return 14
  } else {
    return val
  }
}