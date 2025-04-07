"use client";

import "./AboutUs.scss";
import Image from "next/image";
import img1 from "../../Assets/Images/img1.png";
import img2 from "../../Assets/Images/img2.png";

export default function AboutUs() {
  return (
    <div className="about-us-page">
      {/* <section className="hero">
                <img src="https://sdmntprwestus.oaiusercontent.com/files/00000000-0e6c-5230-8df0-6f3e5bd58920/raw?se=2025-04-06T14%3A53%3A46Z&sp=r&sv=2024-08-04&sr=b&scid=bfc2927a-d821-5377-9d7c-fc95b9198ef8&skoid=4ae7b564-2531-470e-8ddb-6913f4bee2ee&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-06T10%3A43%3A17Z&ske=2025-04-07T10%3A43%3A17Z&sks=b&skv=2024-08-04&sig=SXVPlvqSAPHqy9KYUYGHH6ej7aIgEKKguOrU8uKjFoE%3D" alt="Solar Panels" className="hero-image" />
                <div className="hero-text">
                    <h1>About Our Company</h1>
                    <p>Empowering a greener future with advanced solar solutions.</p>
                </div>
            </section> */}

      <section className="about-section">
        <div className="content">
          <h2>About Us</h2>
          <p>
            At Our Products, we have set up a large scale solar – energy
            product manufacturing unit, with integrated scientific research,
            production, sales, and after-sales as a complete offering to our
            customers. The core element of Our Products is to adopt advanced
            technology and meet international standards. Our products are well
            received in the home and commercial segments. We have our grounding
            in India and now have set our footprints across the globe.
          </p>
          <br />
          <p>
            Our in house Research Team, which is constantly researching
            improvements in the systems to benefit our customers. Our dealer
            network is spread throughout most of the states, as we have more
            than 3000 Dealers and Distributors across India. We are equipped to
            service our products quickly and effectively anywhere in the
            country.
          </p>
        </div>
        <Image src={img1} alt="Solar Panel Factory" className="section-image" />
      </section>
      <section className="about-section">
        <Image src={img2} alt="Solar Panel Factory" className="section-image" />
        <div className="content">
          <p>
            Founded in 2010, SunPower Industries is a leading solar panel
            manufacturer committed to delivering sustainable energy solutions.
            Our state-of-the-art manufacturing facilities and innovative
            technology ensure high-performance solar panels that meet global
            standards.
          </p>
          <br />
          <p>
            Founded in 2010, SunPower Industries is a leading solar panel
            manufacturer committed to delivering sustainable energy solutions.
            Our state-of-the-art manufacturing facilities and innovative
            technology ensure high-performance solar panels that meet global
            standards.
          </p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Certifications</h2>
          <p>
            Our products are certified by a range of international and local
            quality and product standards. In addition, Our manufacturing
            facility is ISO9001:14001, quality management certified. Test
            reports are available at our Our Solar Centre.
          </p>
        </div>
        <div className="mission">
          <h2>Our Quality Policy</h2>
          <p>
            We at XYZ Products are strongly committed and dedicated to achieving
            total customer satisfaction by supplying quality products on time.
            This is achieved through the total involvement of employees and
            complying with quality management system requirements and
            continually improving its effectiveness.
          </p>
        </div>
        <div className="mission">
          <h2>Vision</h2>
          <p>
            To be India’s best provider of high quality solar energy and home
            appliances products and services.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values">
          <div className="value">
            <h3>Innovation</h3>
            <p>
              We constantly push boundaries to develop better, more efficient
              technologies.
            </p>
          </div>
          <div className="value">
            <h3>Quality</h3>
            <p>
              We adhere to the highest standards to ensure our products are
              reliable and durable.
            </p>
          </div>
          <div className="value">
            <h3>Sustainability</h3>
            <p>
              We are committed to practices that support the health of our
              environment.
            </p>
          </div>
          <div className="value">
            <h3>Integrity</h3>
            <p>
              We build trust through transparency, honesty, and respect for our
              customers and partners.
            </p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose SunPower Industries?</h2>
        <ul>
          <li>Cutting-edge technology and research-backed designs.</li>
          <li>
            Custom solar solutions for residential, commercial, and industrial
            needs.
          </li>
          <li>Global reach with local expertise and support.</li>
          <li>
            Commitment to customer satisfaction and environmental
            responsibility.
          </li>
        </ul>
      </section>
    </div>
  );
}
