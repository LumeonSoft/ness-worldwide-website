import "../css/About.css";

const values = [
    {
        number: "01",
        title: "Strategic Approach",
        description:
            "We develop practical strategies aligned with each client’s goals, operations and long-term vision.",
    },
    {
        number: "02",
        title: "Reliable Delivery",
        description:
            "Our experienced team manages every stage with clarity, responsibility and attention to detail.",
    },
    {
        number: "03",
        title: "Long-Term Partnership",
        description:
            "We build lasting relationships by delivering consistent value and dependable support.",
    },
];

function About() {
    return (
        <main className="about">
            <section className="about-hero">
                <p className="about-label">ABOUT NESS WORLDWIDE</p>

                <h1>
                    Strategic thinking.
                    <br />
                    Reliable execution.
                </h1>

                <p className="about-intro">
                    We help organisations turn ambitious ideas into structured,
                    sustainable and successful business outcomes.
                </p>
            </section>

            <section className="about-overview">
                <div className="about-overview-heading">
                    <span>WHO WE ARE</span>
                    <h2>Experience built around your business</h2>
                </div>

                <div className="about-text">
                    <p>
                        Ness Worldwide Services Limited is a reputable company
                        providing comprehensive project management services
                        since 2013, with a particular focus on finance,
                        investment management and strategic planning.
                    </p>

                    <p>
                        Our experienced team helps clients achieve their
                        business goals through efficient project execution and
                        informed financial planning. With a commitment to
                        excellence and customer satisfaction, we are a trusted
                        partner for organisations seeking professional and
                        dependable solutions.
                    </p>
                </div>
            </section>

            <section className="about-stats">
                <article>
                    <strong>2013</strong>
                    <span>Founded</span>
                </article>

                <article>
                    <strong>10+</strong>
                    <span>Years of Experience</span>
                </article>

                <article>
                    <strong>Global</strong>
                    <span>Business Perspective</span>
                </article>
            </section>

            <section className="about-values">
                <div className="about-values-heading">
                    <span>HOW WE WORK</span>
                    <h2>Built on strategy, trust and execution</h2>
                </div>

                <div className="about-values-grid">
                    {values.map((value) => (
                        <article className="about-value-card" key={value.title}>
                            <span className="about-value-number">
                                {value.number}
                            </span>

                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="about-cta">
                <div>
                    <span>LET&apos;S WORK TOGETHER</span>
                    <h2>Let&apos;s build something valuable together.</h2>
                </div>

                <a href="/contact">Contact Us ↗</a>
            </section>
        </main>
    );
}

export default About;