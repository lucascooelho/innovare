import React from "react";

import angelicaCoelho from '../../assets/angelica-coelho.png';

import "./staff.css";

const Staff = () => {
  return (
    <section className="section doctor" id="staff" aria-label="doctor">
      <div className="container">
        <p className="section-subtitle text-center">Nossa equipe</p>
        <h2 className="h2 section-title text-center">Melhores especialista</h2>

        <ul className="has-scrollbar">
          <li className="scrollbar-item">
            <div className="doctor-card">
              <div
                className="card-banner img-holder"
              >
                <img
                  src={angelicaCoelho}
                  width="460"
                  height="500"
                  loading="lazy"
                  alt="Angélica Coelho"
                  className="img-cover"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Angélica Coelho
                </a>
              </h3>

              <p className="card-subtitle">Cirurgiã Dentista <br />CRO-SP 030889</p>
              <ul className="card-social-list">
                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li> */}
                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="doctor-card">
              <div
                className="card-banner img-holder"
              >
                <img
                  src={angelicaCoelho}
                  width="460"
                  height="500"
                  loading="lazy"
                  alt="Angélica Coelho"
                  className="img-cover"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Angélica Coelho
                </a>
              </h3>

              <p className="card-subtitle">Cirurgiã Dentista <br />CRO-SP 030889</p>
              <ul className="card-social-list">
                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li> */}
                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="doctor-card">
              <div
                className="card-banner img-holder"
              >
                <img
                  src={angelicaCoelho}
                  width="460"
                  height="500"
                  loading="lazy"
                  alt="Angélica Coelho"
                  className="img-cover"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Angélica Coelho
                </a>
              </h3>

              <p className="card-subtitle">Cirurgiã Dentista <br />CRO-SP 030889</p>
              <ul className="card-social-list">
                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li> */}
                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="doctor-card">
              <div
                className="card-banner img-holder"
              >
                <img
                  src={angelicaCoelho}
                  width="460"
                  height="500"
                  loading="lazy"
                  alt="Angélica Coelho"
                  className="img-cover"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Angélica Coelho
                </a>
              </h3>

              <p className="card-subtitle">Cirurgiã Dentista <br />CRO-SP 030889</p>
              <ul className="card-social-list">
                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li> */}
                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Staff;
