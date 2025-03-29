import { NavLink } from "react-router-dom"
import styles from "./navbar.module.css"
import { useShoppingCart } from "../context/ShoppingCartContext"

const Navbar = () => {
    const { cartQuantity } = useShoppingCart()
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <NavLink className={`${styles.logo} ${styles.navLink}`} to={"/"}>
                    <img src="/images/logo.png" alt="logo" />
                    <span>FURNIST</span>
                </NavLink>
                <button className={styles.navToggle}>
                    <i className={`${styles.hamburger} fa-solid fa-bars`}></i>
                </button>
                <nav className={`${styles.nav} ${styles.navVisible}`}>
                    <ul className={`${styles.navList} ${styles.navListPrimary}`}>
                        <li className={styles.navItem}>
                            <NavLink to={"/"} className={styles.navLink}>Home</NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink to={"/store"} className={styles.navLink}>Shop</NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink to={"/brand"} className={styles.navLink}>Brand</NavLink>
                        </li>
                    </ul>
                    <ul className={`${styles.navList} ${styles.navListSecondary}`}>
                        <li className={styles.navItem}>
                            <NavLink to={"/cart"} className={`${styles.navLink} ${styles.cartIcon}`}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                {cartQuantity > 0 && (<span className={styles.quantityCount}>{cartQuantity}</span>)}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar