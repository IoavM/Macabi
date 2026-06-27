import CategoriaCard from '../../components/CategoriaCard/CategoriaCard'
import BeneficioCard from '../../components/BeneficioCard/BeneficioCard'
import categorias from '../../components/CategoriaCard/categorias.json'
import beneficios from '../../components/BeneficioCard/beneficios.json'
import './Escuela.css'

function Escuela() {
    const whatsappNumber = '573000000000'
    const whatsappMsg = encodeURIComponent(
        '¡Hola MACABI! 👋\n\nEstoy interesado(a) en inscribir a mi hijo/a en la Escuela de Fútbol.\n\nMe gustaría recibir más información sobre:\n- Categorías disponibles\n- Horarios de entrenamiento\n- Costos de inscripción\n\n¡Gracias!'
    )

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Escuela de <span className="highlight">Fútbol</span></h1>
                    <p>Formamos los campeones del mañana con valores y disciplina</p>
                </div>
            </section>

            <section className="escuela-intro">
                <div className="container">
                    <div className="escuela-intro-wrapper">
                        <div className="escuela-intro-text">
                            <h2>Formación <span>Integral</span></h2>
                            <p>
                                La Escuela de Fútbol MACABI nació con el propósito de formar jugadores
                                con habilidades técnicas, tácticas y valores humanos. Contamos con un
                                equipo de entrenadores certificados que trabajan con pasión para
                                desarrollar el potencial de cada alumno.
                            </p>
                            <p>
                                Desde los más pequeños hasta los adultos, ofrecemos programas
                                adaptados a cada edad con metodologías modernas de entrenamiento.
                            </p>
                        </div>
                        <div className="escuela-intro-image">
                            <div className="placeholder-img">
                                <i className="fas fa-image"></i>
                                <span>FOTO ESCUELA — Entrenamiento (600×400)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="escuela-stats">
                <div className="container">
                    <div className="escuela-stats-grid">
                        <div className="escuela-stat">
                            <div className="stat-number">200+</div>
                            <div className="stat-label">Estudiantes Activos</div>
                        </div>
                        <div className="escuela-stat">
                            <div className="stat-number">5</div>
                            <div className="stat-label">Entrenadores</div>
                        </div>
                        <div className="escuela-stat">
                            <div className="stat-number">3</div>
                            <div className="stat-label">Años de Experiencia</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="escuela-categorias">
                <div className="container">
                    <h2 className="section-title">
                        Nuestras <span className="highlight">Categorías</span>
                    </h2>
                    <p className="section-subtitle">
                        Programas diseñados para cada etapa de desarrollo
                    </p>
                    <div className="categorias-grid">
                        {categorias.map((cat, i) => (
                            <CategoriaCard
                                key={i}
                                nombre={cat.nombre}
                                edad={cat.edad}
                                icon={cat.icon}
                                descripcion={cat.descripcion}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="escuela-beneficios">
                <div className="container">
                    <h2 className="section-title">
                        ¿Por qué <span className="highlight">Elegirnos</span>?
                    </h2>
                    <p className="section-subtitle">
                        Beneficios que hacen la diferencia
                    </p>
                    <div className="beneficios-grid">
                        {beneficios.map((b, i) => (
                            <BeneficioCard
                                key={i}
                                icon={b.icon}
                                titulo={b.titulo}
                                desc={b.desc}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="escuela-galeria">
                <div className="container">
                    <h2 className="section-title">
                        <span className="highlight">Galería</span>
                    </h2>
                    <p className="section-subtitle">
                        Momentos de nuestra escuela
                    </p>
                    <div className="galeria-grid">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className="placeholder-img">
                                <i className="fas fa-image"></i>
                                <span>FOTO ESCUELA {n} (400×300)</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="escuela-inscripcion">
                <div className="container">
                    <div className="cta-box">
                        <h2>¡Inscríbete <span>Ahora</span>!</h2>
                        <p>
                            No pierdas la oportunidad de formar parte de la familia MACABI.
                            Contáctanos por WhatsApp para más información.
                        </p>
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp"
                        >
                            <i className="fab fa-whatsapp"></i> Inscribirme por WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Escuela
