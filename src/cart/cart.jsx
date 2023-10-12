const Cart = ({items}) => {

  console.log(items);

  return (
    <>
      {
        items && (
          items.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.quantity}</p>
              </div>
            )
          })
        )
      }
    </>
  )
}

export default Cart;