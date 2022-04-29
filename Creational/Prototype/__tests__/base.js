export default function testContent(normalDog, aSuperDog) {
  test('Normal dog can bark', () => {
    expect(typeof normalDog.bark).toBe('function')
  })

  test('Super dog can fly and bark', () => {
    expect(typeof aSuperDog.bark).toBe('function')
    expect(typeof aSuperDog.fly).toBe('function')
  })
}
