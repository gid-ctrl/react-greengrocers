function Store(props) {
  const listOfFruits = props.storeItems
  const sendItemsToCart = props.cartItems

  return (
    <>
      {listOfFruits.map((fruit, index) => (
        <li>
          <img
            className="store--item-icon "
            src={`./assets/icons/${fruit.id}.svg`}
          ></img>
          <button onClick={() => sendItemsToCart(fruit)}>Add To Cart</button>
        </li>
      ))}
    </>
  )
}

export default Store
