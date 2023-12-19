import React from 'react'
import '../styles/card.css'

export default function Card({key, name, price, sale, inCart, addToCart, removeFromCart}) {
    return (
        <div className="card">
            <div className="imgbox">Product Image</div>
            <span>{name}</span>
            <span>{price}</span>
            <span>{sale}</span>
            {!inCart && <button onClick={addToCart}>Add to cart</button>}
            {inCart && <button onClick={removeFromCart}>Remove from cart</button>}
        </div>
    )
}