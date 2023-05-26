import { createContext, useState } from "react";

export const constrollerShowCart = createContext(null);

const ContextCart = ({children}) => {

    const [cartShow, setCartShow] = useState("none")

    return (
        <constrollerShowCart.Provider value={ {cartShow, setCartShow} }>
            {children}
        </constrollerShowCart.Provider>
    )

}

export default ContextCart;