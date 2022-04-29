const dog = {
  bark() {
    console.log('Woof!')
  },
}
export const normalDog = Object.create(dog)
const superDog = Object.create(dog, {
  fly: {
    value: function () {
      console.log('flying')
    },
    enumerable: true,
  },
})
export const aSuperDog = Object.create(superDog, {
  name: { value: 'sushi', enumerable: true },
})
