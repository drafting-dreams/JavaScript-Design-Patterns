import { Counter } from '../classVersion'

test('Object Singleton', () => {
  const counter1 = require('../objectVersion').default
  const counter2 = require('../objectVersion').default
  expect(counter1).toBe(counter2)
  expect(counter1.increase()).toBe(1)
  expect(counter2.decrease()).toBe(0)
})

test('Class Singletion', () => {
  const counter1 = require('../classVersion').default
  const counter2 = require('../classVersion').default
  expect(counter1).toBe(counter2)
  expect(counter1.increase()).toBe(1)
  expect(counter2.decrease()).toBe(0)
})

test("Shouldn't call creator outside", () => {
  expect(() => {
    const counter2 = new Counter()
  }).toThrow()
})
