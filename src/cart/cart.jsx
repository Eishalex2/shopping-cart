const Cart = ({items, remove, changeQuantity}) => {

  const getTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      let subtotal = item.quantity * item.price;
      total += subtotal;
    });
    return total.toFixed(2);
  }

  return (
    <>
      {
        items && (
          items.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.quantity}</p>
                <p>${item.price}</p>
                <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" value={item.quantity} min="1" onChange={(e) => changeQuantity(e, item.id)}/>
                <button onClick={() => remove(item.id)}>Remove from Cart</button>
              </div>
            )
          })
        )
      }
      <div>Total price: ${getTotalPrice()}</div>
    </>
  )
}

export default Cart;