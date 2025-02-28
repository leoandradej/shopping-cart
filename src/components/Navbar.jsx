import { NavLink } from "react-router-dom"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <img src="../../public/images/logo.png" alt="logo" />
            <span>FURNIST</span>
        </div>

        <div className={styles.mainLinks}>
            <NavLink className={styles.link} to={"/"}>Home</NavLink>
            <NavLink className={styles.link} to={"/store"}>Shop</NavLink>
            <NavLink className={styles.link} to={"/brand"}>Brand</NavLink>
        </div>
        
        <div className={styles.cart}>
            <NavLink className={styles.link} to={"/cart"}>
                <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar