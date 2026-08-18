import "../css/Products.css";
import arkarixHero from "../assets/arkarix.png";
import productsHero from "../assets/products-hero.png";


type Product = {
    name: string;
    category: string;
    slogan: string;
    description: string;
    image: string;
    link: string;
};

const products: Product[] = [
    {
        name: "ARKARIX",
        category: "AI-ASSISTED SECURITY TRAINING",
        slogan: "Smarter Training for Safer Screening",
        description:
            "An integrated platform for training, assessing and certifying X-ray security screening operators through simulation, TIP technology and AI-assisted performance analysis.",
        image: arkarixHero,
        link: "/products/arkarix",
    },
];

function Products() {
    return (
        <main className="products">
            <section
                className="products-hero"
                style={{
                    backgroundImage: `
            linear-gradient(
                90deg,
                rgba(5, 5, 5, 0.96) 0%,
                rgba(5, 5, 5, 0.82) 38%,
                rgba(5, 5, 5, 0.18) 75%,
                rgba(5, 5, 5, 0.08) 100%
            ),
            url(${productsHero})
        `,
                }}
            >
                <span className="products-label">OUR PRODUCTS</span>

                <h1>
                    Technology designed
                    <br />
                    for real-world challenges.
                </h1>

                <p>
                    Explore our products developed to improve operational
                    performance, strengthen security and support smarter
                    decision-making.
                </p>
            </section>

            <section className="products-catalog">
                <div className="products-heading">
                    <span>PRODUCT PORTFOLIO</span>
                    <h2>Our solutions</h2>

                    <p>
                        Discover our technology products designed around
                        practical operational needs. Select a product to explore
                        its capabilities, application areas and technical
                        approach.
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <article
                            className="product-card"
                            key={product.name}
                        >
                            <div className="product-card-image">
                                <img
                                    src={product.image}
                                    alt={`${product.name} product platform`}
                                />

                                <span className="product-card-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="product-card-content">
                                <span className="product-category">
                                    {product.category}
                                </span>

                                <h2>{product.name}</h2>
                                <h3>{product.slogan}</h3>

                                <p>{product.description}</p>

                                <a
                                    className="product-link"
                                    href={product.link}
                                >
                                    View Product Details ↗
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Products;