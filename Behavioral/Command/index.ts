export class Stock {
  name: string

  constructor(name: string) {
    this.name = name
  }

  buy(quantity: number) {
    console.log(`Stock [Name: ${this.name}, Quantity: ${quantity}] bought`)
  }
  sell(quantity: number) {
    console.log(`Stock [Name: ${this.name}, Quantity: ${quantity}] sold`)
  }
}

interface Order {
  execute: () => void
}
export class BuyOrder implements Order {
  stock: Stock
  quantity: number

  constructor(stock: Stock, quantity: number) {
    this.stock = stock
    this.quantity = quantity
  }

  execute() {
    this.stock.buy(this.quantity)
  }
}
export class SellOrder implements Order {
  stock: Stock
  quantity: number

  constructor(stock: Stock, quantity: number) {
    this.stock = stock
    this.quantity = quantity
  }

  execute() {
    this.stock.sell(this.quantity)
  }
}

export class Broker {
  orderList: Array<Order> = []

  takeOrder(order: Order) {
    this.orderList.push(order)
  }

  placeOrder() {
    while (this.orderList.length) {
      this.orderList.shift().execute()
    }
  }
}
