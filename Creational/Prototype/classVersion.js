class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    console.log('Woof!')
  }
}

export const normalDog = new Dog('Daisy')

class SuperDog extends Dog {
  constructor(name) {
    super(name)
  }

  fly() {
    console.log('I can fly!')
  }
}

export const aSuperDog = new SuperDog('Max')
