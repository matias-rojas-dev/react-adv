import { useState } from "react"
import { OnChangeArgs, Product } from "../interfaces/interface"

interface Props {
  product: Product
  onChange?: (args: OnChangeArgs) => void
}

export const useProduct = ({ product, onChange }: Props) => {
  const [counter, setCounter] = useState(0)

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)

    onChange &&
      onChange({
        count: newValue,
        product,
      })
  }

  return {
    counter,
    increaseBy,
  }
}
