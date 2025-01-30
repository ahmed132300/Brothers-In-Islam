import './Header.css';
import { useState } from 'react';
import menu from '../images/menu.png'
import logo from '../images/logo.png'
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <header>
                <nav className="nav">
                    <h1 className="logo"><img src={logo} className='logo' /></h1>
                    <ul className="links" style={{ display: isOpen ? 'block' : 'none' }}>
                        <li className="home" onClick={() => window.location.pathname = '/home'} >Home</li>
                        <li className="all-p" onClick={() => window.location.pathname = '/all-products'} >All Products</li>
                        <li className="accessories" onClick={() => window.location.pathname = '/accessories'}> Accessories</li>
                        <li className="contact" onClick={() => window.location.pathname = '/contact'}> Contact</li>
                    </ul>
                    <img src={menu} onClick={() => setIsOpen(!isOpen)} className='menu' />
                </nav>
            </header>
        </>
    )

}
export default Header;