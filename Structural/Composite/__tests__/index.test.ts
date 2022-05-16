import { calculatePrice } from '../index'

test('calculate box price', () => {
  const box = {
    items: [
      {
        name: 'soap',
        price: 1.2,
      },
      {
        items: [
          {
            name: 'charger',
            price: 12,
          },
          {
            name: 'cable',
            price: 3,
          },
        ],
      },
      {
        name: 'toothpaste',
        price: 2.3,
      },
    ],
  }

  expect(calculatePrice(box)).toMatchInlineSnapshot(`18.5`)
})
