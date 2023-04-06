
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
//import ColorPicker from "../ColorPicker/ColorPicker"
import ItemCount from "../ItemCount/ItemCount"
import LowStockMsg from "./LowStockMsg"

const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)


    const [cantidad, setCantidad] = useState(1)
    //const [color, setColor] = useState(null)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }




    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
            //color
        }


        agregarAlCarrito(newItem)
    }

    if (item.stock === 0){
        return(
            <div>
                <p><strong>No hay stock disponible!!</strong></p>
            </div>
        )
    }


    return (
        <div className='container my-5'>
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <p>{item.description}</p>
            <br />
            <p className="d-block">Precio: $ {item.price}</p>
            { /* <ColorPicker setColor={setColor} options={item.colors} /> */}
            {item.stock <= 5 && <LowStockMsg stock={item.stock} />}

            {
                isInCart(item.id)
                    ? <Link to="/cart" className="btn btn-success my-4">Terminar mi compra</Link>
                    : <ItemCount
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        onAdd={handleAgregar}
                    />
            }

            <br />
            <button onClick={handleVolver} className="btn btn-primary d-block col-3 my-2"> Volver </button>
        </div>
    )
}

export default ItemDetail