import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">MACA<span>BI</span></div>
                        <p>
                            El mejor complejo de canchas sintéticas de la ciudad.
                            Vive la pasión del fútbol en instalaciones de primer nivel.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.instagram.com/macabipopayan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.tiktok.com/@macabipopayan" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a href="https://wa.me/573014775550" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="footer-column">
                        <h4>Navegación</h4>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/canchas">Canchas</Link></li>
                            <li><Link to="/escuela">Escuela</Link></li>
                            <li><Link to="/reservas">Reservas</Link></li>
                            <li><Link to="/contacto">Contáctanos</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column">
                        <h4>Contacto</h4>
                        <ul>
                            <li>
                                <span><i className="fas fa-map-marker-alt"></i> sector la Rioja, Variante Nte., Popayán, Cauca </span>
                            </li>
                            <li>
                                <a href="tel:+573014775550"><i className="fas fa-phone"></i> +57 301 477 5550</a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="footer-column">
                        <h4>Horario</h4>
                        <ul>
                            <li><span><i className="fas fa-clock"></i> Lunes a Viernes</span></li>
                            <li><span>3:00 PM - 11:00 PM</span></li>
                            <li><span><i className="fas fa-clock"></i> Sábados y Domingos</span></li>
                            <li><span>3:00 PM - 11:00 PM</span></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {currentYear} <span>MACABI</span> — Canchas Sintéticas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
