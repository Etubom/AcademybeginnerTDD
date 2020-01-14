const gameTennis = {
  playerOnePoints: 0,
  playerTwoPoints: 0,
  score: function() {
    let playerOneCall = "love"
    let playerTwoCall = "love"

    if (this.playerOnePoints == 1) {
      playerOneCall = "fifteen"
    }
    if (this.playerOnePoints == 4) {
      playerOneCall = "forty"
    }
    if (this.playerTwoPoints == 4) {
      playerTwoCall = "forty"
    }
    return `${playerOneCall},${playerTwoCall}`
  },

  addAPointToPlayerOne: function() {
    gameTennis.playerOnePoints++
  },
  addAPointToPlayerTwo: function() {
    gameTennis.playerTwoPoints++
  }
}

module.exports = gameTennis
