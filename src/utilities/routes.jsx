import App from "../App"
import Store from "../components/Store"
import Brand from "../components/Brand"
import Cart from "../components/Cart"
import ErrorPage from "../components/ErrorPage"

const routes = [
    {
        path: "shopping-cart/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/store",
        element: <Store />,
    },
    {
        path: "/brand",
        element: <Brand />
    },
    {
        path: "/cart",
        element: <Cart />,
    }
]

export default routes