import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interface"

export const useShoppingCart = () => {
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
      //   const productInCart: ProductInCart = prevShoppingCart[product.id] || {
      //     ...product,
      //     count: 0,
      //   }

      //   if (Math.max(productInCart.count + count, 0) > 0) {
      //     productInCart.count += count
      //     return {
      //       ...prevShoppingCart,
      //       [product.id]: productInCart,
      //     }
      //   }

      //   // Borrar el producto

      //   const { [product.id]: toDelete, ...rest } = prevShoppingCart
      //   return rest

      //Implementación eficiente y sencilla
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

  return {
    shoppingCart,
    onProductCountChange,
  }
}
