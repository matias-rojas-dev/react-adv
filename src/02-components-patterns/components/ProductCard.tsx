import { createContext, CSSProperties, ReactElement } from "react"
import styles from "../styles/styles.module.css"
import { useProduct } from "../hooks/useProduct"
import { Product, ProductContextProps } from "../interfaces/interface"
import { ProductButtons, ProductImage, ProductTitle } from "./index"
export const ProductContext = createContext({
  counter: 0,
  increaseBy: (value: number) => {},
  product: {} as Product,
} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
  children?: ReactElement | ReactElement[]
  product: Product
  className?: string
  style?: CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className} `} style={style}>
        {children}
      </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
