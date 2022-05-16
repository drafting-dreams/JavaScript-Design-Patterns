export type Product = {
  name: string
  price: number
}
export type Box = {
  items: Array<Product | Box>
}
function isProduct(product): product is Product {
  return typeof product.name === 'string' && typeof product.price === 'number'
}
function isBox(box): box is Box {
  return Array.isArray(box.items)
}

export function calculatePrice(products: Box | Product) {
  if (isBox(products)) {
    return products.items.reduce((prev, cur) => prev + calculatePrice(cur), 0)
  }

  return products.price
}
