import Memento from './Memento'
// In our case, editor is the originator

export default class Editor {
  _generateState: () => any

  save() {
    return new Memento(this._generateState())
  }

  restore(m: Memento) {
    // Restore state with the memento
  }

  edit() {
    // edit function, many things changing state can be done here
  }
}
