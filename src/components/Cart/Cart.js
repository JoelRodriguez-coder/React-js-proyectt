import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarProducto } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>No tienes productos en el carrito</h2>
                <hr />
                <Link to="/" className="btn btn-primary">Ver productos</Link>
            </div>
        )
    }
    return (
        <div className="container my-5">
            <h2>Tu pedido</h2>
            <hr />

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.name}</h4>
                        <img src={prod.img} alt={prod.name} />
                        <p>Precio total: ${prod.price * prod.cantidad}</p>
                        <p>Precio Unidad: ${prod.price}</p>
                        <small>Cantidad: {prod.cantidad}</small>
                        <button onClick={() => eliminarProducto(prod.id)} className="btn btn-danger d-block my-2"><BsFillTrashFill />Eliminar</button>
                        <hr />
                    </div>
                ))
            }

            <h3>TOTAL: ${totalCompra().toFixed(2)}</h3>
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
            <Link className="btn btn-success" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart