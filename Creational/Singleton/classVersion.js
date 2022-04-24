let instance
let count = 0

// Don't export this class, then the Error will never be triggered by other modules
// Exporting here is just for testing usage
export class Counter {
  constructor() {
    if (instance) {
      throw new Error('You can only create one instance!')
    }
    instance = this
  }

  increase() {
    return ++count
  }

  decrease() {
    return --count
  }
}

export default Object.freeze(new Counter())
