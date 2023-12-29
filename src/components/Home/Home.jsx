import React from "react";

import "./home.css";

import innovareBanner from '../../assets/innovare-banner.png';

const Home = () => {
  return (
    <main>
      <article>
        {/* <section className="section hero" id="home" style="background-image: url('../assets/hero-bg.png')" aria-label="hero"> */}
        <section className="section hero" id="home" aria-label="hero">
          <div className="container">
            <div className="hero-content">
              <p className="section-subtitle">Bem-vindo à Innovare</p>
              <h1 className="h1 hero-title">Somos o melhor serviço odontológico</h1>

              <p className="hero-text">
                Donec vitae libero non enim placerat eleifend aliquam erat
                volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed
                nisl tristique, commodo gravida lectus non.
              </p>

              {/* <form action="" className="hero-form">
                <input
                  type="email"
                  name="email_address"
                  aria-label="email"
                  placeholder="Seu endereço de email..."
                  required
                  className="email-field"
                />

                <button type="submit" className="btn">
                  Receber chamada de volta
                </button>
              </form> */}
            </div>

            <figure className="hero-banner">
              <img src={innovareBanner} width="587" height="839" alt="innovare" className="w-100" />
            </figure>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Home;
