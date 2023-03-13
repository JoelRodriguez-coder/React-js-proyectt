import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

export const Navbar = () => {
    return(
        <header className='header'>
            <div className='header__container'>
                <Link to='/'><img src='./imgs/logo.png' className='header__logo' alt="carrito"/></Link>

                <nav className='navbar'>
                    <Link to='/' className='navbar__link'>Inicio</Link>
                    <Link to='/productos/samsung' className='navbar__link'>Samsung</Link>
                    <Link to='/productos/apple' className='navbar__link'>Apple</Link>
                    <Link to='/productos/xiaomi' className='navbar__link'>Xiaomi</Link>
                    <CartWidget/>
                </nav>
            </div>
        </header>
    )
}