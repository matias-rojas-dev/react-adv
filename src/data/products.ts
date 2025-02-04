import { Product } from "../02-components-patterns/interfaces/interface"

const product1 = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
}

const product2 = {
  id: "2",
  title: "Coffee Mug - 22",
  img: "./coffee-mug2.png",
}

export const products: Product[] = [product1, product2]
