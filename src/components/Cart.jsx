import Navbar from "./Navbar"
import CartItem from "./CartItem"
import styles from "./cartItem.module.css"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import storeItems from "../data/items.json"
import { NavLink } from "react-router-dom"

const Cart = () => {
  const { cartItems } = useShoppingCart()

  return (
    <>
      <Navbar />
      <main>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ?
          <>
            <h2>There are no items in your cart.</h2>
            <NavLink to={"/store"} className="navLink">Continue shopping</NavLink>
          </> 
        : 
          <>
            <div className={styles.heading}>
              <h3>Products</h3>
              <h3>Quantity</h3>
              <h3>Subtotal</h3>
            </div>
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className={styles.total}>
              Total: {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(product => product.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
            </div>
          </>
        }
      </main>
    </>
  )
}

export default Cart