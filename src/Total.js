import { useState } from 'react'

function Total(props) {
  let total = 0

  props.cartItems.map(getTotal)
  function getTotal(fruit) {
    let totalPerItem = fruit.quantity * fruit.price
    total += totalPerItem
  }

  return (
    <>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£{total.toFixed(2)}</span>
        </div>
      </div>
    </>
  )
}

export default Total
