import React from "react";

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              Innovare.
            </a>
            <p className="footer-text">
              Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur
              sagittis libero tincidunt tempor finibus. Mauris at dignissim
              ligula, nec tristique orci.Quisque vitae metus.
            </p>

            <div className="schedule">
              <div className="schedule-icon">
                <ion-icon name="time-outline"></ion-icon>
              </div>
              <span className="span">
                Segunda a Sábado:
                <br />
                9:00 - 18:00
              </span>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Outros links</p>
            </li>

            <li>
              <a href="#home" className="footer-link">
                <ion-icon name="add-outline"></ion-icon>
                <span className="span">Home</span>
              </a>
            </li>

            <li>
              <a href="#service" className="footer-link">
                <ion-icon name="add-outline"></ion-icon>
                <span className="span">Serviços</span>
              </a>
            </li>

            <li>
              <a href="#about" className="footer-link">
                <ion-icon name="add-outline"></ion-icon>
                <span className="span">Sobre nós</span>
              </a>
            </li>

            <li>
              <a href="#staff" className="footer-link">
                <ion-icon name="add-outline"></ion-icon>
                <span className="span">Nossa equipe</span>
              </a>
            </li>

            <li>
              <a href="#blog" className="footer-link">
                <ion-icon name="add-outline"></ion-icon>
                <span className="span">Últimas notícias</span>
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Nossos serviços</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="add-outline"></ion-icon>
                <span className="span">Tratamento de Canal</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="add-outline"></ion-icon>
                <span className="span">Próteses Dentária</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="add-outline"></ion-icon>
                <span className="span">Aparelhos Ortodônticos</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="add-outline"></ion-icon>
                <span className="span">Implantes</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="add-outline"></ion-icon>
                <span className="span">Restaurações e Lente em Resina</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="add-outline"></ion-icon>
                <span className="span">Clareamentos</span>
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contato</p>
            </li>

            <li className="footer-item">
              <div className="item-icon">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=5518997298778"
                className="footer-link"
              >
                Whatsapp
              </a>
            </li>

            <li className="footer-item">
              <div className="item-icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <a
                href="https://maps.app.goo.gl/6tCNfFpnnNELdSfn7"
                className="item-text"
                target="_blank"
              >
                Av. Princesa Isabel, 615 <br /> Pres. Venceslau - SP,
                <br />
                19400-000, Brasil
              </a>
            </li>

            <li className="footer-item">
              <div className="item-icon">
                <ion-icon name="call-outline"></ion-icon>
              </div>

              <a href="tel:+5518997298778" className="footer-link">
                (18) 99729-8778
              </a>
            </li>

            <li className="footer-item">
              <div className="item-icon">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <a href="mailto:innovare@venceslau.com" className="footer-link">
                innovare@venceslau.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {anoAtual} - Todos os direitos reservados por LNC.
          </p>

          <ul className="social-list">
            <li>
              <a
                href="https://www.instagram.com/innovare_venceslau/"
                className="social-link"
                target="_blank"
              >
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
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
