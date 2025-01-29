import { useState } from "react"
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index"
import { Product } from "../interfaces/interface"
import "../styles/custom-styles.css"

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

const products: Product[] = [product1, product2]

interface ProductInCart extends Product {
  count: number
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({
    "1": { ...product1, count: 10 },
    "2": { ...product2, count: 1 },
  })

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            className="bg-dark text-white"
            product={product}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.3)" }}
            />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard
          className="bg-dark text-white"
          product={product1}
          style={{ width: "100px" }}
        >
          <ProductImage
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.3)" }}
          />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          className="bg-dark text-white"
          product={product2}
          style={{ width: "100px" }}
        >
          <ProductImage
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.3)" }}
          />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  )
}
