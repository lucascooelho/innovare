import React from "react";

import ctaBanner from '../../assets/cta-banner.png';

const CTA = () => {
  return (
    <section className="section cta" aria-label="cta">
      <div className="container">
        <figure className="cta-banner">
          <img
            src={ctaBanner}
            width="1056"
            height="1076"
            loading="lazy"
            alt="cta banner"
            className="w-100"
          />
        </figure>

        <div className="cta-content">
          <p className="section-subtitle">Marcar consulta</p>
          <h2 className="h2 section-title">
            Estamos abertos e receptivos aos pacientes
          </h2>
          <a href="https://api.whatsapp.com/send?phone=5518997298778" className="btn">
            Agendar
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
