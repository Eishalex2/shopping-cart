import styles from './cart.module.css';

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
              <>
                <hr />
                <div key={item.id} className={styles.container}>
                  <div className={styles.info}>
                    <img className={styles.img} src={item.image} alt={item.title} />
                    <h4 className={styles.title}>{item.title}</h4>
                    <p className={styles.price}>Unit price: ${item.price.toFixed(2)}</p>
                    <label htmlFor="quantity" className={styles.quantity}>Quantity: 
                      <input type="number" id="quantity" value={item.quantity} min="1" onChange={(e) => changeQuantity(e, item.id)}/>
                    </label>
                  </div>

                  <div className={styles.action}>
                    <p>Item total: ${(item.quantity * item.price).toFixed(2)}</p>
                    <button className={styles.btn} onClick={() => remove(item.id)}>Remove</button>
                  </div>
                </div>
              </>

            )
          })
        )
      }
      <div className={styles.bottom}>
        <p className={styles.total}>Total price: ${getTotalPrice()}</p>
        <button className={styles.checkout}>Checkout</button>
      </div>

    </>
  )
}

export default Cart;