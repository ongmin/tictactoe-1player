var rangemin = 0
var rangemax = 8
var moves = 0

function getRandomInt (min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

function randomPlay () {
  var number = getRandomInt(rangemin, rangemax)
  var randomTileID = 'tile' + number
  var tile = document.getElementById(randomTileID)
  if (tile.textContent) randomPlay()
  else tile.textContent = 'o'
}

var body = document.querySelector('body')
body.addEventListener('click', event => {
  var tile = event.target
  if (tile.className !== 'tile') return
  if (tile.textContent) return
  moves = moves + 2
  tile.textContent = 'x'
  if (gameOver()) console.log('game over')
  else randomPlay()
})

function gameOver () {
  return moves >= 9
  // if (moves >= 9) {
  //   return true
  // } else if (moves < 9) {
  //   return false
  // }
}
