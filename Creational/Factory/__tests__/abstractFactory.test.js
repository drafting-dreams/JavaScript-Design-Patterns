import AbstractFactory from '../AbstractFactory'

describe('Test AbstractFactory', () => {
  class Car {
    drive() {}
    breakDown() {}
  }
  class Truck {
    drive() {}
    breakDown() {}
  }

  const carFactory = new AbstractFactory()
  const truckFactory = new AbstractFactory()
  test('Vehicle type will exist, if registered', () => {
    carFactory.registerVehicle('car', Car)
    expect(carFactory.types).toHaveProperty('car', Car)
  })
  test('Not be able to build not truck without registeration', () => {
    expect(truckFactory.getVehicle('truck')).toBeNull()
  })
  test('Able to build truck after registration', () => {
    truckFactory.registerVehicle('truck', Truck)
    expect(truckFactory.getVehicle('truck')).toBeInstanceOf(Truck)
  })
})
