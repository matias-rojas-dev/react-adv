import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import NoImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

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
