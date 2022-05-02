/**
 * It is also useful to be aware of the Abstract Factory pattern, 
 * which aims to encapsulate a group of individual factories with a common goal. 
 * It separates the details of the implementation of a set of objects from their general usage.

 * An Abstract Factory should be used where a system must be independent of the way the objects it creates are generated 
 * or it needs to work with multiple types of objects.
 * 
 * An example that is both simple and easier to understand is a vehicle factory, 
 * which defines ways to get or register vehicles types. 
 * The abstract factory can be named abstractVehicleFactory. 
 */

export default class AbstractVehicleFactory {
  constructor() {
    // Storage for our vehicle types
    this.types = {}
  }

  getVehicle(type, customizations) {
    const Vehicle = this.types[type]

    return Vehicle ? new Vehicle(customizations) : null
  }

  registerVehicle(type, Vehicle) {
    const proto = Vehicle.prototype

    // only register classes that fulfill the vehicle contract
    if (proto.drive && proto.breakDown) {
      this.types[type] = Vehicle
    }
  }
}
