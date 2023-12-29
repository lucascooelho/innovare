import React from 'react';
import serviceIcon1 from '../../assets/service-icon-1.png';
import serviceIcon2 from '../../assets/service-icon-2.png';
import serviceIcon3 from '../../assets/service-icon-3.png';
import serviceIcon4 from '../../assets/service-icon-4.png';
import serviceIcon5 from '../../assets/service-icon-5.png';
import serviceIcon6 from '../../assets/service-icon-6.png';
import serviceBanner from '../../assets/service-banner.png';

import "./services.css";

const Services = () => {
  return (
    <section className="section service" id="service" aria-label="service">
        <div className="container">
          <p className="section-subtitle text-center">Nossos serviços</p>
          <h2 className="h2 section-title text-center">O que oferecemos</h2>

          <ul className="service-list">
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={serviceIcon1} width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                </div>

                <div>
                  <h3 className="h3 card-title">Tratamento de Canal</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={serviceIcon2} width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                </div>

                <div>
                  <h3 className="h3 card-title">Próteses Dentária</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={serviceIcon3} width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                </div>

                <div>
                  <h3 className="h3 card-title">Aparelhos Ortodônticos</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                  </p>
                </div>
              </div>
            </li>

            <li className="service-banner">
              <figure>
                <img src={serviceBanner} width="409" height="467" loading="lazy" alt="service banner" className="w-100" />
              </figure>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={serviceIcon4} width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                </div>

                <div>
                  <h3 className="h3 card-title">Implantes</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={serviceIcon5} width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                </div>

                <div>
                  <h3 className="h3 card-title">Restaurações e Lente em Resina</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={serviceIcon6} width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                </div>

                <div>
                  <h3 className="h3 card-title">Clareamentos</h3>
                  <p className="card-text">
                    Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Services