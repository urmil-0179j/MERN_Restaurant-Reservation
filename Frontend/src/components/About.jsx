// import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we are  serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Munchie Finder, your ultimate Indian culinary destination. Our menu offers everything from spicy North Indian Foods to savory South Indain Foods. We pride ourselves on using the freshest ingredients for an exceptional dining experience. Reserve your table online or enjoy our fast, reliable delivery service, bringing freshly-prepared meals straight to your door. At Munchie Finder, every meal is a celebration!Join us at Munchie Finder, where every meal is a celebration! 
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};


export default About