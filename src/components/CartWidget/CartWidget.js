import './cartWidget.scss'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget= () =>{

    const {totalCantidad} = useContext(CartContext)

    return(
        <Link to='/cart' className='container-cart' >
           <FaShoppingCart />
           <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget