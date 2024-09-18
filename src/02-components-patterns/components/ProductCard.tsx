import { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps, Props } from '../interfaces/interface'
import { ProductButtons, ProductImage, ProductTitle } from './index'
export const ProductContext = createContext({
  counter: 0,
  increaseBy: (value: number) => {},
  product: {} as Product,
} as ProductContextProps)

const { Provider } = ProductContext

export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} alt={product.title} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
