import { NavLink } from "react-router-dom"
import styles from "./navbar.module.css"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useState } from "react"

const Navbar = () => {
    const { cartQuantity } = useShoppingCart()
    const [isActive, setIsActive] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink className={`${styles.logo} navLink`} to={"/"}>
                    <img src="/images/logo.png" alt="logo" />
                    <span>FURNIST</span>
                </NavLink>
                <ul className={isActive ? `${styles.navList} ${styles.open}` : styles.navList}>
                    <li className={styles.navItem}>
                        <NavLink to={"/"} className="navLink">Home</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to={"/store"} className="navLink">Shop</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to={"/brand"} className="navLink">Brand</NavLink>
                    </li>
                </ul>
                <button onClick={() => setIsActive(prev => !prev)} className={styles.navMenu}>
                    <i className={`${styles.hamburger} fa-solid fa-bars`}></i>
                </button>
                <NavLink to={"/cart"} className={`navLink ${styles.cartIcon}`}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    {cartQuantity > 0 && (<span className={styles.quantityCount}>{cartQuantity}</span>)}
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar