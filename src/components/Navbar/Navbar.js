import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"

export const Navbar = () => {
    const {cart} = useContext(CartContext)

    const {user, logout} = useContext(LoginContext)

    return(
        <header className='header'>
            <div className='header__container'>
                <Link to='/'><img src='./imgs/logo.png' className='header__logo' alt="carrito"/></Link>

                <nav className='navbar'>
                    <Link to='/' className='navbar__link'>Inicio</Link>
                    <Link to='/productos/samsung' className='navbar__link'>Samsung</Link>
                    <Link to='/productos/apple' className='navbar__link'>Apple</Link>
                    <Link to='/productos/xiaomi' className='navbar__link'>Xiaomi</Link>
                    { cart.length > 0 && <CartWidget/>}
                </nav>
            </div>
            <div className="login-state container">
                    <h6>Bienvendio { user.email}</h6>
                    <button className="btn btn-danger" onClick={logout}>Cerrar sesion</button>
            </div>
        </header>
    )
}