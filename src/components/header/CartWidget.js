import { useContext } from "react";
import cart from "../../img/cart.png";
import { listCartContext } from "../components item/ProviderContextCart";
import { constrollerShowCart } from "./ContextCart";


const CartWidget = () => {

    const { cartShow, setCartShow } = useContext(constrollerShowCart)
    const { listCart } = useContext(listCartContext)

    const showCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none")
    }

    return(
        <div classname="containerLength" onClick={showCart}>
            <img src={cart} alt="cart"></img>
            <span className="cantCart">
                {listCart.length}
            </span>
        </div>
    )
}

export default CartWidget;