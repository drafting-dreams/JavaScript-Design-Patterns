let count = 0

const counter = {
  increase() {
    return ++count
  },

  decrease() {
    return --count
  },
}

export default Object.freeze(counter)
