/**
 * ChainOfResponsibility is a special kind of mediator.
 * Imagine we have a lot of mediators, each mediator handles different kind of tasks.
 * In Mediator, we used middleware as the example. Middleware also utilizes Chain of Responsibility,
 * because we can apply multi middleware on a single route.
 *
 * Let's take a look at an simplified example of how to execute the chain of middlewares.
 */

const req = {},
  res = {}

function execMiddlewares(middlewares) {
  function next() {
    if (middlewares.length > 0) {
      const middleware = middlewares.pop()
      middleware(req, res, next)
    }
  }
}
