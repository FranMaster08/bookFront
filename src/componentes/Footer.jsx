import React from "react";
import "../hojas-de-estilo/Footer.css";

function Footer() {
  return (
    <footer className="footer-total">
      <div className="row">
        <div className="footer-column">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href="#">3442450300</a>
            </li>
            <li>
              <a
                href="https://www.gmail.com/mail/help/intl/es/about.html?iframe"
                target="_blank"
              >
                bookstore@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Tienda</h4>
          <ul>
            <li>
              <a href="#">Libros</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Informacion</h4>
          <ul>
            <li>
              <a href="#">Nosotros</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Seguinos</h4>
          <div className="social-links">
            <a href="https://es-la.facebook.com/" target="_blank">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://www.instagram.com/?hl=es-la" target="_blank">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
