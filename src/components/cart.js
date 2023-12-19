import React from 'react'
import '../styles/cart.css'

export default function Cart({numItems}) {
    return (
        <div className="cart">
            <i class="bi bi-cart4"></i>
            <span className="item-count">
                {numItems}
            </span>
        </div>
    )
}