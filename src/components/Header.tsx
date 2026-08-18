import "../css/Header.css"
import ness from "../assets/ness.jpg"

function Header() {
    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={ness} alt="Ness Worldwide" />
            </a>

            <nav className="nav">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/products">Products</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header