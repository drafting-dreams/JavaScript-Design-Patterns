type Route = unknown
// Strategy Interface
interface RouteStrategy {
  buildRoute: (location: string, destination: string) => Route
}

class RoadStrategy implements RouteStrategy {
  buildRoute: (location: string, destination: string) => Route
}
class PublicTransportStrategy implements RouteStrategy {
  buildRoute: (location: string, destination: string) => Route
}
class WalkingStrategy implements RouteStrategy {
  buildRoute: (location: string, destination: string) => Route
}

// Context
class MapNavigator {
  routeStrategy: RouteStrategy

  setRouteStrategy(strategy: RouteStrategy) {
    this.routeStrategy = strategy
  }

  findRoute(location: string, destination: string) {
    return this.routeStrategy.buildRoute(location, destination)
  }
}

// JavaScript Specific Implementation
/* Because JavaScript allow function as parameter of a function
 * We can make use of it to make the implementation simplified */
function buildRoute(
  location: string,
  destination: string,
  routeStrategy: RouteStrategy,
) {
  return routeStrategy.buildRoute(location, destination)
}
