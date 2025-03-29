import styles from "./storeItem.module.css"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

const StoreItem = ({ id, name, price, imgUrl }) => {
    const {
        getItemQuantity,
        incrementCartQuantity,
        decrementCartQuantity,
        removeFromCart,
    } = useShoppingCart()
    const quantity = getItemQuantity(id)
    
    return (
        <div className={styles.card}>
            <img src={imgUrl} alt={name} />
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{name}</h3>
                <span>{formatCurrency(price)}</span>
            </div>
            {quantity === 0 ? (
                <button className={styles.btn} onClick={() => incrementCartQuantity(id)}>+ Add to Cart</button>
            ) : (
                <div className={styles.wrapper}>
                    <div className={styles.quantityControls}>
                        <button className={styles.controlBtn} onClick={() => decrementCartQuantity(id)}>-</button>
                        <span className={styles.quantity}>{quantity}</span>
                        <button className={styles.controlBtn} onClick={() => incrementCartQuantity(id)}>+</button>
                    </div>
                    <button className={styles.deleteItemBtn} onClick={() => removeFromCart(id)}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            )}
        </div>
    )
}

export default StoreItem