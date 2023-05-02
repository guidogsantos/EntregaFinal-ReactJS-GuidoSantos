import brand from "../../img/Logo.png";
import { Link } from "react-router-dom"


const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Compu-Store" titel="Compu-Store"></img>
        </Link>
    )
}

export default Brand;