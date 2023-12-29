import React, { useEffect } from "react";

import "./header.css";

const Header = () => {
  // Função para adicionar eventos a elementos
  const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  };

  // Função para alternar a barra de navegação
  const toggleNav = function () {
    const navbar = document.querySelector("[data-navbar]");
    const navbarToggler = document.querySelector("[data-nav-toggler]");

    navbar.classList.toggle("active");
    navbarToggler.classList.toggle("active");
  };

  // Função para fechar a barra de navegação
  const closeNav = function () {
    const navbar = document.querySelector("[data-navbar]");
    const navbarToggler = document.querySelector("[data-nav-toggler]");

    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  };

  // Adiciona os eventos aos elementos do React após o componente ser montado
  useEffect(() => {
    const navbarToggler = document.querySelector("[data-nav-toggler]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");

    addEventOnElem(navbarToggler, "click", toggleNav);
    addEventOnElem(navbarLinks, "click", closeNav);

    // Cleanup: remove os eventos ao desmontar o componente
    return () => {
      removeEventFromElem(navbarToggler, "click", toggleNav);
      removeEventFromElem(navbarLinks, "click", closeNav);
    };
  }, []); // O array vazio como segundo argumento garante que o efeito só seja executado uma vez

  // Função para remover eventos de elementos
  const removeEventFromElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].removeEventListener(type, callback);
      }
    } else {
      elem.removeEventListener(type, callback);
    }
  };

  // Função para tornar o cabeçalho ativo durante o scroll
  const handleScroll = function () {
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    if (window.scrollY >= 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  };

  // Adiciona o evento de scroll após o componente ser montado
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <ul className="contact-list">
              <li className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:info@example.com" className="contact-link">
                  innovare@venceslau.com
                </a>
              </li>

              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:+5518997298778" className="contact-link">
                  (18) 99729-8778
                </a>
              </li>
            </ul>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link" target="_blank">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/innovare_venceslau/"
                  className="social-link"
                  target="_blank"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5518997298778"
                  className="social-link"
                  target="_blank"
                >
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </li>

              {/* <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="header-bottom" data-header>
          <div className="container">
            <a href="#" className="logo">
              Innovare.
            </a>

            <nav className="navbar container" data-navbar>
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>
                    Home
                  </a>
                </li>

                <li>
                  <a href="#service" className="navbar-link" data-nav-link>
                    Serviços
                  </a>
                </li>

                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    Sobre nós
                  </a>
                </li>

                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#" className="navbar-link" data-nav-link>
                    Contato
                  </a>
                </li>
              </ul>
            </nav>

            <a
              href="https://api.whatsapp.com/send?phone=5518997298778"
              className="btn"
              target="_blank"
            >
              Agendar
            </a>

            <button
              className="nav-toggle-btn"
              aria-label="Toggle menu"
              data-nav-toggler
            >
              <ion-icon
                name="menu-sharp"
                aria-hidden="true"
                className="menu-icon"
              ></ion-icon>
              <ion-icon
                name="close-sharp"
                aria-hidden="true"
                className="close-icon"
              ></ion-icon>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
