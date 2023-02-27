import CartWidget from "../CartWidget/CartWidget"

export const Navbar = () => {
    return(
        <header className='header'>
            <div className='header__container'>
                <img src='./imgs/logo.png' className='header__logo'/>

                <nav className='navbar'>
                    <a href='#' className='navbar__link'>Samsung</a>
                    <a href='#' className='navbar__link'>Apple</a>
                    <a href='#' className='navbar__link'>Xiaomi</a>
                    <CartWidget/>
                </nav>
            </div>
        </header>
    )
}