import { Link } from 'react-router-dom'
import ServicioCard from '../../components/ServicioCard/ServicioCard'
import CanchaCard from '../../components/CanchaCard/CanchaCard'
import serviciosData from '../../components/ServicioCard/servicios.json'
import canchasData from '../../components/CanchaCard/canchasData.json'
import './Home.css'

function Home() {
    return (
        <>
            <section className="principal">
                <div className="principal-fondo">
                    <img
                        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=993&auto=format&fit=crop"
                        alt="Cancha sintética Macabi"
                    />
                </div>
                <div className="principal-capa"></div>
                <div className="principal-contenido">
                    <div className="principal-insignia">Canchas Sintéticas Premium</div>
                    <h1>VIVE EL FÚTBOL<br />EN <span>MACABI</span></h1>
                    <p>
                        El mejor complejo de canchas sintéticas de la ciudad.
                        Reserva tu cancha, entrena con nosotros y disfruta del deporte rey.
                    </p>
                    <div className="principal-botones">
                        <Link to="/reservas" className="boton boton-primario">
                            <i className="fas fa-calendar-check"></i> Reservar Ahora
                        </Link>
                        <Link to="/canchas" className="boton boton-delineado">
                            <i className="fas fa-futbol"></i> Ver Canchas
                        </Link>
                    </div>
                </div>
                <div className="principal-desplazamiento">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>

            <section className="barra-estadisticas">
                <div className="contenedor">
                    <div className="cuadricula-estadisticas">
                        <div className="elemento-estadistica">
                            <div className="numero-estadistica">3</div>
                            <div className="etiqueta-estadistica">Canchas Sintéticas</div>
                        </div>
                        <div className="elemento-estadistica">
                            <div className="numero-estadistica">1</div>
                            <div className="etiqueta-estadistica">Cancha Techada</div>
                        </div>
                        <div className="elemento-estadistica">
                            <div className="numero-estadistica">3 - 11 PM</div>
                            <div className="etiqueta-estadistica">Horario</div>
                        </div>
                        <div className="elemento-estadistica">
                            <div className="numero-estadistica">100%</div>
                            <div className="etiqueta-estadistica">Césped Premium</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="servicios seccion">
                <div className="contenedor">
                    <h2 className="titulo-seccion">
                        Nuestros <span className="destacado">Servicios</span>
                    </h2>
                    <p className="subtitulo-seccion">
                        Todo lo que necesitas para vivir la mejor experiencia futbolística
                    </p>
                    <div className="cuadricula-servicios">
                        {serviciosData.map((servicio) => (
                            <ServicioCard
                                key={servicio.id}
                                icon={servicio.icon}
                                titulo={servicio.titulo}
                                descripcion={servicio.descripcion}
                                enlace={servicio.enlace}
                                textoEnlace={servicio.textoEnlace}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="vista-previa-canchas seccion">
                <div className="contenedor">
                    <h2 className="titulo-seccion">
                        Nuestras <span className="destacado">Canchas</span>
                    </h2>
                    <p className="subtitulo-seccion">
                        Instalaciones de primer nivel para que disfrutes al máximo
                    </p>
                    <div className="cuadricula-vista-previa-canchas">
                        {canchasData.map((cancha) => (
                            <CanchaCard
                                key={cancha.id}
                                cancha={cancha}
                                variant="preview"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-escuela seccion">
                <div className="contenedor">
                    <div className="contenedor-cta-escuela">
                        <div className="contenido-cta-escuela">
                            <h2>Escuela de<br /><span>Fútbol MACABI</span></h2>
                            <p>
                                Formamos jugadores con valores, disciplina y pasión por el deporte.
                                Nuestros entrenadores certificados trabajan con todas las categorías de edad.
                            </p>
                            <ul className="caracteristicas-escuela">
                                <li><i className="fas fa-check-circle"></i> Entrenadores certificados</li>
                                <li><i className="fas fa-check-circle"></i> Categorías de 5 a 18+ años</li>
                                <li><i className="fas fa-check-circle"></i> Torneos y competencias</li>
                                <li><i className="fas fa-check-circle"></i> Formación integral</li>
                            </ul>
                            <Link to="/escuela" className="boton boton-primario">
                                <i className="fas fa-graduation-cap"></i> Conocer la Escuela
                            </Link>
                        </div>
                        <div className="imagen-cta-escuela">
                            <div className="marcador-imagen">
                                <i className="fas fa-image"></i>
                                <span>FOTO ESCUELA DE FÚTBOL (600×450)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="seccion-video seccion">
                <div className="contenedor">
                    <h2 className="titulo-seccion">
                        Mira <span className="destacado">MACABI</span> en Acción
                    </h2>
                    <p className="subtitulo-seccion">
                        Conoce nuestras instalaciones y vive la experiencia
                    </p>
                    <div className="contenedor-video">
                        <div className="marcador-video">
                            <div className="contenido-marcador">
                                <i className="fas fa-play-circle"></i>
                                <p>Video de las instalaciones</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
