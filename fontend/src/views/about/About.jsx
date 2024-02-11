import "./about.css";

const About = () => {
    return (
        <div className="about-container">

            <h2>About Our Food Oil Delivery Service</h2>
            <p>Welcome to our food oil delivery service! Here's some information about us:</p>
    
            <div className="about-section">
                <h3>Our Mission</h3>
                <p>Our mission is to provide high-quality food oil products to our customers and ensure convenient and timely delivery services.</p>
            </div>
    
            <div className="about-section">
                <h3>Our Products</h3>
                <p>We offer a wide range of food oil products, including:</p>
                <ul>
                    <li>Palm Oil</li>
                    <li>Groundnut Oil</li>
                </ul>
            </div>
    
            <div className="about-section">
                <h3>Delivery Service</h3>
                <p>Our delivery service ensures that your orders are delivered right to your doorstep, providing convenience and peace of mind.</p>
            </div>
    
            <div className="about-section">
                <h3>Contact Information</h3>
                <p>If you have any questions, feedback, or inquiries about our products or delivery service, please feel free to contact us:</p>
                <ul>
                    <li>Email: info@foodoildelivery.com</li>
                    <li>Phone: 123-456-7890</li>
                    {/* Add more contact details as needed */}
                </ul>
            </div>
        </div>
    )
}

export default About;