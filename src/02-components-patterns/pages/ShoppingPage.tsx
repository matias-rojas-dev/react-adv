import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/index'

const product = {
  id: '1',
  title: 'Coffee Mug - 2',
  img: './coffee-mug.png',
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image img={product.img} />
          <ProductCard.Title title="Hola mundo" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
