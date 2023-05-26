import { useState } from "react";
import { createContext } from "react";
import productos from "../../utils/products";

export const listCartContext = createContext(null)

const PrividerContextCart = ( {children} ) => {

    const [ listCart, setListCart ] = useState([])

    const addProduct = (id) => {

        const productAdd = productos.find(product => product.id === id);

        const productToMaintain = listCart.filter(product => product.id !== id)

        let add = true;
        for(let product of listCart){
            if(product.id === id){
                let quantity = product.quantity;

                console.log()
                if(quantity < productAdd.stock){
                    const newQantity = {...product, quantity: quantity + 1}
                    setListCart( [...productToMaintain, newQantity] )
                }

                add = false;
                break;
            }
        }

        add && setListCart( [...productToMaintain, {...productAdd, quantity: 1} ] )

    }

    console.log(listCart)

    const clearCart = () => {
        setListCart( [] )
    }

    const remove = id => {
        const updateList = listCart.filter(product => product.id !==id);
        setListCart(updateList);
    }

    return (
        <listCartContext.Provider value={{remove, listCart, setListCart, addProduct, clearCart}}>
            {children}
        </listCartContext.Provider>
    )

}

export default PrividerContextCart