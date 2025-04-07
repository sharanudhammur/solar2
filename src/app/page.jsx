"use client";

import Image from "next/image";
import "./Home.scss";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri";
import { Button } from "primereact/button";
import img3 from "../Assets/Images/img3.png";
import AboutUs from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="home-component">
      <div className="hero-section">
        <Image
          style={{ borderRadius: "10px" }}
          className="mobile-image"
          src={img3}
          alt=""
        />
        <div className="hero-info">
          <div className="hero-title">Power Your Future with Clean Energy</div>
          <div className="hero-desc">
            Leading the way in solar energy innovation, XYZ Products delivers
            reliable, eco-friendly solutions to power your home and business.
            From solar water heaters to rooftop systems, we help build a
            sustainable future.
          </div>

          <Button
            style={{
              marginTop: "30px",
              backgroundColor: "#2b6cb0",
              color: "white"
            }}
            variant="solid"
          >
            Get started <RiArrowRightLine />
          </Button>
        </div>
        <div>
          <Image
            style={{ borderRadius: "10px" }}
            className="web-image"
            src={img3}
            alt=""
          />
        </div>
      </div>
      <div className="our-story-wrapper">
        <div>
          <div className="our-story">OUR STORY</div>
          <div className="title">Welcome to our products</div>
          <div className="content">
            <div className="desc">
              Our products is one of the Leading Solar Water Heaters
              manufacturing companies in India, based out of Bengaluru and
              established in the year 2004. It has grown from a modest customer
              base to a trusted brand in the home appliances market across the
              country. We recently introduced Glass-Lined Solar Water Heating
              Systems into the market, an internationally renowned technology in
              Solar Water Heating Systems to help provide clean hot water. Our
              products include Solar Water Heaters (Evacuated Tube Collectors
              and Flat Plate Collectors), Solar Rooftop Solutions, Electric
              Geysers, Heat Pumps, Kitchen Chimneys, and more.
            </div>
          </div>
        </div>
        <img
          src="https://thumbs.dreamstime.com/b/ecological-vacuum-solar-tube-collectors-24404873.jpg"
          alt=""
        />
      </div>

      <AboutUs />
      <Contact />
    </div>
  );
}
