import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>PAGE NOT FOUND!</h1>
        <NavLink to={"/shopping-cart"} className="navLink">Return to Home</NavLink>
      </main>
    </>
  )
}

export default ErrorPage