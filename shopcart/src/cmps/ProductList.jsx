import React from 'react'
import { ProductPreview } from './ProductPreview'

export function ProductList({ products, addToCart }) {

  return (
    <ul className="product-list">
      {products.map((product, idx) => <ProductPreview key={idx} name={product.name} price={product.price} imgUrl={product.imgUrl} product={product} addToCart={addToCart}/>)}
    </ul>
  )
}
