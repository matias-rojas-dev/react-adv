import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index"
import "../styles/custom-styles.css"
const product = {
  id: "1",
  title: "Coffee Mug - 2",
  img: "./coffee-mug.png",
}

export const ShoppingPage = () => {
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
        <ProductCard className="bg-dark text-white" product={product}>
          <ProductCard.Image className="custom-image" img={product.img} />
          <ProductCard.Title title="Hola mundo" className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard className="bg-dark text-white" product={product}>
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "gray",
            color: "white",
          }}
        >
          <ProductImage
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px",
            }}
          />

          <ProductTitle
            style={{ color: "blue", textDecoration: "underline" }}
          />
          <ProductButtons style={{ color: "red", borderRadius: "10px" }} />
        </ProductCard>
      </div>
    </div>
  )
}
