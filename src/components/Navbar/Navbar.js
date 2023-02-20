import CartWidget from "../CartWidget/CartWidget"

export const Navbar = () => {
    return(
        <header className='header'>
            <div className='header__container'>
                <img src='./imgs/logo.png' className='header__logo'/>

                <nav className='navbar'>
                    <a href='#' className='navbar__link'>Inicio</a>
                    <a href='#' className='navbar__link'>Productos</a>
                    <a href='#' className='navbar__link'>Devoluciones</a>
                    <CartWidget/>
                </nav>
            </div>
        </header>
    )
}