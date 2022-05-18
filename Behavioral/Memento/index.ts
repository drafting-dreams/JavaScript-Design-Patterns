// This module is the caretaker

import Editor from './Editor'
import Memento from './Memento'

const history: Array<Memento> = []
const editor = new Editor()

function save() {
  history.push(editor.save())
}
function undo() {
  editor.restore(history.pop())
}

editor.edit()
editor.edit()
save()

editor.edit()
save()
undo()
