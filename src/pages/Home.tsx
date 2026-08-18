import { useState } from "react";
import heroLeft from "../assets/nessworld-1.jpg";
import heroRight from "../assets/nessworld-2.jpg";
import "../css/Home.css";

function Home() {
    const [showSecondImage, setShowSecondImage] = useState(false);

    return (
        <main className="home">
            <section className="hero">
                <img
                    className="hero-image"
                    src={showSecondImage ? heroRight : heroLeft}
                    alt="Ness Worldwide"
                />

                <div className="hero-content">
                    <h1>Your Global Solution Partner</h1>
                    <p>
                        Managing projects. Planning growth. Building stronger businesses.
                    </p>
                </div>

                <button
                    type="button"
                    className="hero-arrow"
                    aria-label="Next image"
                    onClick={() => setShowSecondImage(!showSecondImage)}
                >
                    →
                </button>
            </section>
        </main>
    );
}

export default Home;