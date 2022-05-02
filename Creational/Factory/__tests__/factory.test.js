import { Car, Truck, VehicleFactory } from '../factory'

test('Create vehicle with options', () => {
  const carFactory = new VehicleFactory()
  const car = carFactory.createVehicle({ vehicleType: 'car' })
  expect(car).toBeInstanceOf(Car)

  const truck = carFactory.createVehicle({ vehicleType: 'truck' })
  expect(truck).toBeInstanceOf(Truck)
})
