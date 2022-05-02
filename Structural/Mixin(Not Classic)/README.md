Mixin is not a classical design pattern

A mixin is an object that we can use in order to add reusable functionality to another object or class, without using inheritance.

Here we have an example below to add some functionalities to the Dog who doesn't have

```js
const animalFunctionality = {
  walk: () => console.log('Walking!'),
  sleep: () => console.log('Sleeping!'),
}

const dogFunctionality = {
  bark: () => console.log('Woof!'),
  wagTail: () => console.log('Wagging my tail!'),
  play: () => console.log('Playing!'),
  walk() {
    super.walk()
  },
  sleep() {
    super.sleep()
  },
}

Object.assign(dogFunctionality, animalFunctionality)
Object.assign(Dog.prototype, dogFunctionality)
```

A real world example is the `Window` object. Some functions are added by mixins, such as `setTimeout`, `setInterval` and `indexedDB`. We can also use the same way to add our own functionality into the `Window` object.

### Mixins were used in React (pre ES6)

Mixins were often used to add functionality to React components before the introduction of ES6 classes. The React team discourages the use of mixins as it easily adds unnecessary complexity to a component, making it hard to maintain and reuse. The React team encouraged the use of higher order components instead, which can now often be replaced by Hooks.

### Mixin is usually seen as a bad practice

Mixins allow us to easily add functionality to objects without inheritance by injecting functionality into an object's prototype. Modifying an object's prototype (Mokey patching) is seen as bad practice, as it can lead to prototype pollution and a level of uncertainty regarding the origin of our functions.

### My own understanding of Mixin, HOF, and Decorator

Write at the start of this section. Decorator here is the decorator syntax in JavaScript(still a proposal in stage 2). I'll put two read more links about it at the end. So the decorator here is different from the decorator design pattern. In essence, decorator is a syntax sugar of HOF (Higher Order Function). What HOF does is actually applying mixins on the props it gets.

So if you let me say, Mixin, HOF and Decorator are the same things.

#### Read more about Decorator

https://www.typescriptlang.org/docs/handbook/decorators.html
https://es6.ruanyifeng.com/#docs/decorator
