export interface Props {
  children?: React.ReactElement | React.ReactElement[]
  product: Product
}
export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: Props): JSX.Element
  Title: ({ title }: { title?: string }) => JSX.Element
  Image: ({ image }: { image?: string }) => JSX.Element
  Buttons: () => JSX.Element
}
