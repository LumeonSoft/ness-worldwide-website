import "../css/Services.css";
import servicesImage from "../assets/services.png";

type Service = {
    title: string;
    description: string;
};

const services: Service[] = [
    {
        title: "Aviation",
        description: "Professional solutions for the aviation industry.",
    },
    {
        title: "Software",
        description: "Software solutions tailored to business needs.",
    },
    {
        title: "Security",
        description: "Solutions designed to protect systems and operations.",
    },
    {
        title: "Consultation",
        description: "Professional guidance supporting business growth.",
    },
    {
        title: "Data",
        description: "Data solutions supporting informed business decisions.",
    },
    {
        title: "Infrastructure",
        description: "Reliable infrastructure solutions for organisations.",
    },
    {
        title: "E-Learning",
        description: "Digital learning solutions for modern organisations.",
    },
    {
        title: "Mobile Learning",
        description: "Accessible learning solutions for mobile platforms.",
    },
    {
        title: "Development",
        description: "Development services designed for evolving business needs.",
    },
];

function Services() {
    return (
        <main className="services">
            <section
                className="services-hero"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            180deg,
                            rgba(0, 0, 0, 0.25) 0%,
                            rgba(0, 0, 0, 0.45) 45%,
                            rgba(0, 0, 0, 0.92) 100%
                        ),
                        url(${servicesImage})
                    `,
                }}
            >
                <span className="services-label">WHAT WE DO</span>

                <h1>Business Consulting and Services</h1>

                <p>
                    We provide strategic, technological and industry-focused
                    solutions that help businesses grow and move forward.
                </p>
            </section>

            <section className="expertise">
                <div className="expertise-heading">
                    <span>OUR EXPERTISE</span>
                    <h2>Areas of Expertise</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <article
                            className="service-card"
                            key={service.title}
                        >
                            <span className="service-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="services-cta">
                <div>
                    <span>LET&apos;S WORK TOGETHER</span>
                    <h2>Looking for the right solution?</h2>
                </div>

                <a href="/contact">Contact Us ↗</a>
            </section>
        </main>
    );
}

export default Services;