import { useContext } from "react"
import deleteWhite from "../../img/delete.svg"
import "../../styles/itemCart.css"
import { listCartContext } from "../components item/ProviderContextCart"



const ItemCart = ({id, title, price, quantity, image}) => {
    
    const { remove } = useContext(listCartContext)
    
    return (
        <div className="itemCart">
            <div className="img">
                <img src={image} alt="img"></img>
            </div>

            <div className="description-cantidad">
                <span className="title"> {title} </span>
                <span className="quantity"> {`cantidad: ${quantity}`} </span>
            </div>

            <div className="price">
                <span className="subtotal">Subtotal</span>
                <span className="price"> ${quantity * price} </span>
            </div>

            <button className="delete" onClick={ () => remove(id) }>
                <img src={deleteWhite}></img>
            </button>
        
        </div>
    )
}

export default ItemCart;
