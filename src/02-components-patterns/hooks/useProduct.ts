import { useEffect, useRef, useState } from "react"
import { IInitialValue, OnChangeArgs, Product } from "../interfaces/interface"

interface Props {
  product: Product
  onChange?: (args: OnChangeArgs) => void
  value?: number
  initialValues?: IInitialValue
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: Props) => {
  const count = initialValues?.count ?? value
  const [counter, setCounter] = useState(count)
  const isMounted = useRef(false)

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)

    onChange &&
      onChange({
        count: newValue,
        product,
      })
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy,
  }
}
