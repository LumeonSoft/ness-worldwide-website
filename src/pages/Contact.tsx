import contactImage from "../assets/contact.png";
import "../css/Contact.css";

function Contact() {
    return (
        <main className="contact">
            <section className="contact-hero">
                <img src={contactImage} alt="Ness Worldwide Contact" />

                <div className="contact-hero-overlay">
                    <h1>Contact</h1>
                </div>
            </section>

            <section className="contact-content">
                <div className="contact-item">
                    <span className="contact-icon">☎</span>
                    <h2>Call Us</h2>
                    <p>+44 7778 590668</p>
                </div>

                <div className="contact-item">
                    <span className="contact-icon">✉</span>
                    <h2>Send Us an Email</h2>
                    <p>info@nessworldwide.co.uk</p>
                </div>

                <div className="contact-item">
                    <span className="contact-icon">⌖</span>
                    <h2>Our Locations</h2>
                    <p>West End, England</p>
                    <p>Dubai, Empire Heights</p>
                </div>
            </section>

            <section className="locations">
                <div className="locations-title">
                    <h2>Our Locations</h2>
                </div>

                <div className="location-grid">
                    <div className="location-card">
                        <iframe
                            src="https://www.google.com/maps?q=167+Great+Portland+Street+London&output=embed"
                            title="Ness Worldwide London Office"
                            loading="lazy"
                        ></iframe>

                        <div className="location-info">
                            <span>HEADQUARTERS</span>
                            <h3>West End</h3>

                            <p>
                                167 Great Portland Street
                                <br />
                                West End, England, GB
                            </p>

                        </div>
                    </div>

                    <div className="location-card">
                        <iframe
                            src="https://www.google.com/maps?q=Empire+Heights+Business+Bay+Dubai&output=embed"
                            title="Ness Worldwide Dubai Office"
                            loading="lazy"
                        ></iframe>

                        <div className="location-info">
                            <span>BRANCH</span>
                            <h3>Dubai</h3>

                            <p>
                                Business Bay Crossing
                                <br />
                                Empire Heights No:901, Dubai, AE
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;