import React from 'react'

export function ProductPreview({ name, imgUrl, price, product, addToCart }) {
  return (
    <li className="product-preview flex column">
      <div className="img-wrapper">
        <img src={imgUrl} alt="" />
      </div>

      <div className="flex column">
        <h4 className="price">Price: ${price}</h4>
        <p>{name}</p>
        <button onClick={() => addToCart(product)}>ADD TO CART</button>
      </div>
    </li>
  )
}
