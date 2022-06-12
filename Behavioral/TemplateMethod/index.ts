abstract class Game {
  abstract initialize(): void
  abstract startPlay(): void
  abstract endPlay(): void

  public play() {
    this.initialize()
    this.startPlay()
    this.endPlay()
  }
}

class Poker extends Game {
  initialize(): void {}
  startPlay(): void {}
  endPlay(): void {}
}

class Chess extends Game {
  initialize(): void {}
  startPlay(): void {}
  endPlay(): void {}
}

const pokerGame = new Poker()
pokerGame.play()

const chessGame = new Chess()
chessGame.play()
