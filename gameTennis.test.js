let gameTennis = require("./gameTennis")

describe("gameTennis", () => {
  test("the score should return zero", () => {
    expect(gameTennis.score()).toBe("love,love")
  })

  test("it calls fifteen, love", () => {
    gameTennis.addAPointToPlayerOne()
    expect(gameTennis.score()).toBe("fifteen,love")
  })
  test("it calls deuce", () => {
    gameTennis.playerOnePoints = 0

    gameTennis.addAPointToPlayerOne()
    gameTennis.addAPointToPlayerTwo()
    gameTennis.addAPointToPlayerOne()
    gameTennis.addAPointToPlayerTwo()
    gameTennis.addAPointToPlayerOne()
    gameTennis.addAPointToPlayerTwo()
    gameTennis.addAPointToPlayerOne()
    gameTennis.addAPointToPlayerTwo()

    expect(gameTennis.score()).toBe("forty,forty")
  })
})
