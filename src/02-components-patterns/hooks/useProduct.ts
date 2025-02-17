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
    // Solución propia
    // if (initialValues?.maxCount && counter + value > initialValues.maxCount)
    //   return

    // Solución de FH
    let newValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }
    setCounter(newValue)

    onChange &&
      onChange({
        count: newValue,
        product,
      })
  }

  const reset = () => {
    setCounter(initialValues?.count ?? value)
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  }
}
