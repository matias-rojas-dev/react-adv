import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index"
import "../styles/custom-styles.css"
import { products } from "../../data/products"

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
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
    </div>
  )
}
