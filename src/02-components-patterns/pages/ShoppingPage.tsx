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
  }>({})

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number
    product: Product
  }) => {
    setShoppingCart((prevShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prevShoppingCart
        return rest
      }

      return {
        ...prevShoppingCart,
        [product.id]: { ...product, count },
      }
    })
  }

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
            value={shoppingCart[product.id]?.count || 0}
            onChange={onProductCountChange}
            // Esto igual es válido -> onChange={(event) => onProductCountChange(event)}
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
        {Object.keys(shoppingCart).map((key) => {
          const product = shoppingCart[key]
          return (
            <ProductCard
              key={key}
              className="bg-dark text-white"
              product={product}
              style={{ width: "100px" }}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.3)" }}
              />
              <ProductButtons
                className="custom-buttons"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ProductCard>
          )
        })}

        {/* // OTRA OPCIÓN
        <div className="shopping-cart">
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              className="bg-dark text-white"
              product={product}
              style={{ width: "100px" }}
            >
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.3)" }}
              />
              <ProductTitle className="text-white" />
              <ProductButtons
                className="custom-buttons"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ProductCard>
          ))}
        </div> */}
        {/* <ProductCard
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
        </ProductCard> */}
      </div>
    </div>
  )
}
