import React from "react";
import '../hojas-de-estilo/Footer2.css';

function Footer2() {
    return(
        <footer class="footer-total">
            <div class="row">
                <div class="footer-column">
                    <h4>Contacto</h4>
                    <ul>
                        <li><a href="#">3442450300</a></li>
                        <li><a href="https://www.gmail.com/mail/help/intl/es/about.html?iframe" target="_blank">bookstore@gmail.com</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Tienda</h4>
                    <ul>
                        <li><a href="#">Libros</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Informacion</h4>
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Seguinos</h4>
                    <div class="social-links">
                        <a href="https://es-la.facebook.com/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="https://www.instagram.com/?hl=es-la" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                </div>
            </div>
        </footer>
  );  
}

export default Footer2;