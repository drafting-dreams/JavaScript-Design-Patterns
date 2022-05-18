export default class Memento {
  state: any

  constructor(state) {
    this.state = state
  }

  getState() {
    return this.state
  }
}
