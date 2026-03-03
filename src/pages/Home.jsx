import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
    return (
        <>
            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=993&auto=format&fit=crop"
                        alt="Cancha sintética Macabi"
                    />
                </div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-badge">Canchas Sintéticas Premium</div>
                    <h1>VIVE EL FÚTBOL<br />EN <span>MACABI</span></h1>
                    <p>
                        El mejor complejo de canchas sintéticas de la ciudad.
                        Reserva tu cancha, entrena con nosotros y disfruta del deporte rey.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/reservas" className="btn btn-primary">
                            <i className="fas fa-calendar-check"></i> Reservar Ahora
                        </Link>
                        <Link to="/canchas" className="btn btn-outline">
                            <i className="fas fa-futbol"></i> Ver Canchas
                        </Link>
                    </div>
                </div>
                <div className="hero-scroll">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>

            {/* ===== STATS BAR ===== */}
            <section className="stats-bar">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">3</div>
                            <div className="stat-label">Canchas Sintéticas</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">1</div>
                            <div className="stat-label">Cancha Techada</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">3 - 11 PM</div>
                            <div className="stat-label">Horario</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Césped Premium</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES ===== */}
            <section className="services section">
                <div className="container">
                    <h2 className="section-title">
                        Nuestros <span className="highlight">Servicios</span>
                    </h2>
                    <p className="section-subtitle">
                        Todo lo que necesitas para vivir la mejor experiencia futbolística
                    </p>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-futbol"></i>
                            </div>
                            <h3>Canchas</h3>
                            <p>
                                3 canchas sintéticas de última generación, incluyendo una techada
                                para jugar sin importar el clima.
                            </p>
                            <Link to="/canchas" className="service-link">
                                Ver Canchas <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3>Escuela</h3>
                            <p>
                                Escuela de fútbol con entrenadores certificados para todas las edades.
                                Formamos los campeones del mañana.
                            </p>
                            <Link to="/escuela" className="service-link">
                                Más Info <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <h3>Reservas</h3>
                            <p>
                                Reserva tu cancha de forma rápida y sencilla por WhatsApp.
                                Horarios flexibles y tarifas accesibles.
                            </p>
                            <Link to="/reservas" className="service-link">
                                Reservar <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CANCHAS PREVIEW ===== */}
            <section className="canchas-preview section">
                <div className="container">
                    <h2 className="section-title">
                        Nuestras <span className="highlight">Canchas</span>
                    </h2>
                    <p className="section-subtitle">
                        Instalaciones de primer nivel para que disfrutes al máximo
                    </p>
                    <div className="canchas-preview-grid">
                        {/* Cancha 1 */}
                        <div className="cancha-preview-card">
                            <div className="placeholder-img">
                                <img
                                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=993&auto=format&fit=crop"
                                    alt="Cancha sintética Macabi"
                                />
                            </div>
                            <div className="cancha-preview-info">
                                <span className="cancha-tag">Aire Libre</span>
                                <h3>Cancha 1</h3>
                                <p>Cancha sintética al aire libre con la mejor grama.</p>
                                <span className="cancha-price">Desde $80.000/h</span>
                            </div>
                        </div>
                        {/* Cancha 2 */}
                        <div className="cancha-preview-card">
                            <div className="placeholder-img">
                                <img
                                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=993&auto=format&fit=crop"
                                    alt="Cancha sintética Macabi"
                                />
                            </div>
                            <div className="cancha-preview-info">
                                <span className="cancha-tag">Aire Libre</span>
                                <h3>Cancha 2</h3>
                                <p>Cancha sintética al aire libre con iluminación LED.</p>
                                <span className="cancha-price">Desde $80.000/h</span>
                            </div>
                        </div>
                        {/* Cancha 3 */}
                        <div className="cancha-preview-card">
                            <div className="placeholder-img">
                                <img
                                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=993&auto=format&fit=crop"
                                    alt="Cancha sintética Macabi"
                                />
                            </div>
                            <div className="cancha-preview-info">
                                <span className="cancha-tag" style={{ background: 'rgba(0,200,83,0.3)' }}>Techada</span>
                                <h3>Cancha 3</h3>
                                <p>Nuestra cancha premium techada. Juega llueva o truene.</p>
                                <span className="cancha-price">Desde $100.000/h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ESCUELA CTA ===== */}
            <section className="escuela-cta section">
                <div className="container">
                    <div className="escuela-cta-wrapper">
                        <div className="escuela-cta-content">
                            <h2>Escuela de<br /><span>Fútbol MACABI</span></h2>
                            <p>
                                Formamos jugadores con valores, disciplina y pasión por el deporte.
                                Nuestros entrenadores certificados trabajan con todas las categorías de edad.
                            </p>
                            <ul className="escuela-features">
                                <li><i className="fas fa-check-circle"></i> Entrenadores certificados</li>
                                <li><i className="fas fa-check-circle"></i> Categorías de 5 a 18+ años</li>
                                <li><i className="fas fa-check-circle"></i> Torneos y competencias</li>
                                <li><i className="fas fa-check-circle"></i> Formación integral</li>
                            </ul>
                            <Link to="/escuela" className="btn btn-primary">
                                <i className="fas fa-graduation-cap"></i> Conocer la Escuela
                            </Link>
                        </div>
                        <div className="escuela-cta-image">
                            <div className="placeholder-img">
                                <i className="fas fa-image"></i>
                                <span>FOTO ESCUELA DE FÚTBOL (600×450)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== VIDEO SECTION ===== */}
            <section className="video-section section">
                <div className="container">
                    <h2 className="section-title">
                        Mira <span className="highlight">MACABI</span> en Acción
                    </h2>
                    <p className="section-subtitle">
                        Conoce nuestras instalaciones y vive la experiencia
                    </p>
                    <div className="video-wrapper">
                        <div className="video-placeholder">
                            <div className="placeholder-content">
                                <iframe
                                    width="854"
                                    height="480"
                                    src="https://www.youtube.com/embed/3eyzKkt2q_w"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
