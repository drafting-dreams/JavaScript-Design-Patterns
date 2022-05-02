/**
 * The below example is
 * a Factory can provide a generic interface for creating objects,
 * where we can specify the type of factory object we wish to be created.
 */

export class VehicleFactory {
  // Define the prototypes and utilities for this factory

  // Our default vehicleClass is Car
  constructor() {
    this.vehicleClass = Car
  }
  // Our Factory method for creating new Vehicle instances
  createVehicle(options) {
    switch (options.vehicleType) {
      case 'car':
        this.vehicleClass = Car
        break
      case 'truck':
        this.vehicleClass = Truck
        break
      //defaults to VehicleFactory.prototype.vehicleClass (Car)
    }

    return new this.vehicleClass(options)
  }
}

// A constructor for defining new cars
export class Car {
  constructor({ doors, state, color }) {
    this.doors = doors || 4
    this.state = state || 'brand new'
    this.color = color || 'silver'
  }
}
// A constructor for defining new trucks
export class Truck {
  constructor({ state, wheelSize, color }) {
    this.state = state || 'used'
    this.wheelSize = wheelSize || 'large'
    this.color = color || 'blue'
  }
}
