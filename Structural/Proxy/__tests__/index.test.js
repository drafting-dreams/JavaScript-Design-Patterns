import { person, personProxy } from '..'

test('set with invalid values should throw error', () => {
  expect(() => {
    personProxy.age = '45'
  }).toThrow('Sorry, you can only pass numeric values for age.')

  expect(() => {
    personProxy.name = 'R'
  }).toThrow('You need to provide a valid name.')
})

test('valid value should be able to set successfully', () => {
  personProxy.age = 45
  personProxy.name = 'RR'

  expect(person.age).toBe(45)
  expect(person.name).toBe('RR')
})
