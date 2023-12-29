import React from "react";

import about from '../../assets/about.png';

import "./about.css";

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <img
            src={about}
            width="470"
            height="538"
            loading="lazy"
            alt="about banner"
            className="w-100"
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">Sobre nós</p>
          <h2 className="h2 section-title">Cuidamos da sua saúde bucal</h2>

          <p className="section-text section-text-1">
            Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam
            quis volutpat est, sed dapibus sapien. Cras condimentum eu velit id
            tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo
            vehicula arcu.
          </p>

          <p className="section-text">
            Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex
            mattis, ultricies posuere sapien. Morbi a dignissim enim. Fusce
            elementum, augue in elementum porta, sapien nunc volutpat ex, a
            accumsan nunc lectus eu lectus.
          </p>

          {/* <a href="#" className="btn">
            Read more
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
