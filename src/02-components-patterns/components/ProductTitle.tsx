import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css"

export interface PropsTitle {
  title?: string
  className?: string
  style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: PropsTitle) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={`${styles.productTitle} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  )
}
