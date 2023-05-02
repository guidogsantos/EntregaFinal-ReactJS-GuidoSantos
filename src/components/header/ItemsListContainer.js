import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/placas AMD">
                    {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/placas NVIDIA">
                    {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="category/procesadores AMD">
                    {props.itemTres}
                </Link>
            </li>
            <li>
                <Link to="category/procesadores INTEL">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )  
}

export default ItemListContainer;