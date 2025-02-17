import { createContext, CSSProperties, ReactElement } from "react"
import styles from "../styles/styles.module.css"
import { useProduct } from "../hooks/useProduct"
import {
  IInitialValue,
  OnChangeArgs,
  Product,
  ProductContextProps,
} from "../interfaces/interface"
import { ProductButtons, ProductImage, ProductTitle } from "./index"

export const ProductContext = createContext({
  counter: 0,
  increaseBy: (value: number) => {},
  product: {} as Product,
} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
  // children?: ReactElement | ReactElement[]
  children: (msg: string) => JSX.Element
  product: Product
  className?: string
  style?: CSSProperties
  onChange?: (args: OnChangeArgs) => void
  value?: number
  initialValues?: IInitialValue
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  })

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className} `} style={style}>
        {children("hola mundo")}
      </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
