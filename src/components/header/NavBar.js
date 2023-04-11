import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer 
                    itemUno = "Placas AMD"
                    itemDos = "Placas NVIDIA"
                    itemTres = "Procesadores AMD"
                    itemCuatro = "Procesadores INTEL"
                />
            </nav>

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;
