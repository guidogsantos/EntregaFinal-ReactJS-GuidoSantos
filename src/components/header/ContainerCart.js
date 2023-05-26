import "../../styles/containerCart.css";
import close from "../../img/close.svg";
import clear from "../../img/clear.png";
import ItemCart from "./ItemCart";
import { useContext } from "react";
import { listCartContext } from "../components item/ProviderContextCart";
import { constrollerShowCart } from "./ContextCart";

const ContainerCart = () => {

    const { listCart, clearCart } = useContext(listCartContext)
    const { cartShow, setCartShow } = useContext(constrollerShowCart)

    const style ={
        display: cartShow
    }
    
    const closeCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none")
    }


    return(
        <div className="cart" style={style}>

            <div className="cerrar">
                <button className="close" onClick={closeCart}>
                    <img src={close} alt="cerrar carrito"></img>
                </button>
            </div>

            <div className="containerItemsCart">
                {
                    (listCart.length === 0) ? <span className="emptyCart">¡Es momento de llenar este carrito!</span>
                    : listCart.map( product => (
                        <ItemCart
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.imageProduct.firstImage}
                            quantity={product.quantity}
                            price={product.price}
                        />
                    ))
                }
            </div>

            <div className="TerminarCompra">
                <button className="terminar">Terminar Compra</button>

                <button className="clear" onClick={clearCart}>
                    <img src={clear} alt="vaciar carrito"></img>
                </button>
            </div>
        </div>
    )
}

export default ContainerCart;