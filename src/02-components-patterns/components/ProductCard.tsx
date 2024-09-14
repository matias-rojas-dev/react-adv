import styles from '../styles/styles.module.css'
import NoImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'
import { createContext, useContext } from 'react'

interface Props {
  children?: React.ReactElement | React.ReactElement[]
  product: Product
}

interface Product {
  id: string
  title: string
  img?: string
}

interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

const ProductContext = createContext({
  counter: 0,
  increaseBy: (value: number) => {},
  product: {} as Product,
} as ProductContextProps)

const { Provider } = ProductContext

export const ProductImage = ({ img = '', alt = 'Product Image' }) => {
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
      className={styles.productImg}
    />
  )
}

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  )
}

export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext)

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  )
}

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
