import App from './App'

function Cart(props) {
  const cartItemList = props.cartItems

  return (
    <>
      {cartItemList.map((cartFruit, index) => (
        <li key={index}>
          <img src={`./assets/icons/${cartFruit.id}.svg`}></img>
          <p>{cartFruit.name}</p>
          <button onClick={() => props.handleQuantityDecrease(cartFruit)}>
            -
          </button>
          <p>{cartFruit.quantity}</p>
          <button onClick={() => props.handleQuantityIncrease(cartFruit)}>
            +
          </button>
        </li>
      ))}
    </>
  )
}

export default Cart
