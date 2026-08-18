import "../css/Footer.css";
import nessLogo from "../assets/ness.jpg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <a href="/" aria-label="Ness Worldwide home page">
                        <img
                            src={nessLogo}
                            alt="Ness Worldwide logo"
                        />
                    </a>

                    <div>
                        <h3>NESS WORLDWIDE</h3>
                        <p>Your Global Solution Partner</p>
                    </div>
                </div>

                <nav
                    className="footer-links"
                    aria-label="Footer navigation"
                >
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/products">Products</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Ness Worldwide Services Limited</p>

                <div className="footer-contact">
                    <a href="tel:+447778590668">
                        +44 7778 590668
                    </a>

                    <span>West End, England</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;