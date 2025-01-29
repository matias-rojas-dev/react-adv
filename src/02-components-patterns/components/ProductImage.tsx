import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import NoImage from "../assets/no-image.jpg"
import styles from "../styles/styles.module.css"

export interface PropsImage {
  img?: string
  alt?: string
  className?: string
  style?: CSSProperties
}

export const ProductImage = ({
  img = "",
  alt = "Product Image",
  className,
  style,
}: PropsImage) => {
  const { product } = useContext(ProductContext)

  let imgToShow: string

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = NoImage
  }

  return (
    <img
      src={imgToShow}
      alt={product.title ? product.title : alt}
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  )
}
