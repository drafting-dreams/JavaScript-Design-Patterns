/**
 * In JavaScript, create Proxy is easy after ES6. Because a Proxy object was introduced.
 *
 * Generally speaking, a proxy means a stand-in for someone else.
 * Instead of speaking to that person directly, you'll speak to the proxy person who will represent the person you were trying to reach.
 */

/**
 * Proxies are a powerful way to add control over the behavior of an object.
 * A proxy can have various use-cases: it can help with validation, formatting, notifications, or debugging.
 */

/**
 * Let's have an example of validation.
 */

export const person = {
  name: 'James',
  age: 42,
  nationality: 'Malaysia',
}

export const personProxy = new Proxy(person, {
  set(obj, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new Error('Sorry, you can only pass numeric values for age.')
    } else if (prop === 'name' && value.length < 2) {
      throw new Error('You need to provide a valid name.')
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`)
      return Reflect.set(obj, prop, value)
    }
  },
})
