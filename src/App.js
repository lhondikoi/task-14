import {React, useState} from 'react'
import Cart from './components/cart'
import Card from './components/card'
import data from './data'
import './styles/app.css'

export default function App() {
    let [numItems, setNumItems] = useState(0)
    let [products, setProducts] = useState(data)
    let productCards = products.map((product, index) => (
        <Card
            {...product}
            key={index}
            addToCart={() => addToCart(index)}
            removeFromCart={() => removeFromCart(index)}
        />
    ))

    function addToCart(index) {
        setProducts(products.map((product, idx) => ({
            ...product,
            inCart: idx === index ? true : product.inCart
        })))
        setNumItems(numItems + 1)
    }

    function removeFromCart(index) {
        setProducts(products.map((product, idx) => ({
            ...product,
            inCart: idx === index ? false : product.inCart
        })))
        setNumItems(numItems - 1)
    }
    return (
        <div className="app">
            <nav className="navbar">
                <div className="container navbar-container">
                    <div className="navbar-left">
                        <h1>ShoppingApp</h1>
                        <ul className="nav-links">
                            <li>Home</li>
                            <li>About</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <Cart numItems={numItems}/>
                </div>
            </nav>
            <div className="hero">Shop in style</div>
            <div className="products">
                <div className="container products-container">
                { productCards }
                </div>
            </div>
        </div>
    )
}