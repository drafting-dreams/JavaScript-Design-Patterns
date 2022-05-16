import { Broker, BuyOrder, SellOrder, Stock } from '../index'

test('Placing Orders', () => {
  console.log = jest.fn()
  const stock = new Stock('FaceBook')
  const broker = new Broker()

  broker.takeOrder(new BuyOrder(stock, 10))
  broker.takeOrder(new SellOrder(stock, 2))

  expect(console.log).not.toHaveBeenCalled()

  broker.placeOrder()

  expect(console.log).toHaveBeenNthCalledWith(
    1,
    `Stock [Name: ${stock.name}, Quantity: ${10}] bought`,
  )
  expect(console.log).toHaveBeenNthCalledWith(
    2,
    `Stock [Name: ${stock.name}, Quantity: ${2}] sold`,
  )
})
