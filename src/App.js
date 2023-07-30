import './styles/reset.css'
import './styles/index.css'
import Store from './Store.js'
import Cart from './Cart.js'
import { useState } from 'react'

import initialStoreItems from './store-items'
import Total from './Total'
/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  // const [updatedCartItemsState, setUpdatedCartItemsState] = useState([])

  const handleAddToCart = fruit => {
    const newCartItems = [...cartItems]
    const index = cartItems.findIndex(element => element.id === fruit.id)
    if (index === -1) {
      fruit.quantity = 1
      newCartItems.push(fruit)
      setCartItems(newCartItems)
    } else {
      fruit.quantity++
      setCartItems(newCartItems)
    }
  }

  const handleQuantityIncrease = cartFruit => {
    const updatedCartItems = [...cartItems]
    cartFruit.quantity++
    setCartItems(updatedCartItems)
  }

  const handleQuantityDecrease = cartFruit => {
    const updatedCartItems = [...cartItems]
    cartFruit.quantity--
    if (cartFruit.quantity >= 1) {
      setCartItems(updatedCartItems)
    } else {
      const cartWithoutFruit = cartItems.filter(
        fruit => fruit.id !== cartFruit.id
      )
      setCartItems(cartWithoutFruit)
    }
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          <Store storeItems={storeItems} cartItems={handleAddToCart} />
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <Cart
              cartItems={cartItems}
              handleQuantityIncrease={handleQuantityIncrease}
              handleQuantityDecrease={handleQuantityDecrease}
            />
          </ul>
        </div>
        <Total cartItems={cartItems} />
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
