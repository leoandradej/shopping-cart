import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import styles from "./cartItem.module.css"
import { formatCurrency } from "../utilities/formatCurrency"

const CartItem = ({ id, quantity }) => {
    const {
        incrementCartQuantity,
        decrementCartQuantity, 
        removeFromCart 
    } = useShoppingCart()

    const item = storeItems.find(product => product.id === id)
    if (item == null) return null

    return (
        <>
            <div className={styles.productWrapper}>
                <div className={styles.cartItem}>
                    <div className={styles.product}>
                        <img src={item.imgUrl} alt="" className={styles.productImg} />
                        <div className={styles.productDescription}>
                            <h3 className={styles.productName}>{item.name}</h3>
                            <span>{formatCurrency(item.price)}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.quantityControls}>
                    <button className={styles.controlBtn} onClick={() => decrementCartQuantity(id)}>-</button>
                    <span className={styles.quantity}>{quantity}</span>
                    <button className={styles.controlBtn} onClick={() => incrementCartQuantity(id)}>+</button>
                </div>
                <div className={styles.subtotal}>
                    <span className={styles.subtotalValue}>{formatCurrency(item.price * quantity)}</span>
                </div>
                <button className={styles.deleteItemBtn} onClick={() => removeFromCart(id)}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </>
    )
}

export default CartItem