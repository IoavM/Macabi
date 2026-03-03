import { Link } from 'react-router-dom'
import '../styles/Canchas.css'

const canchasData = [
    {
        id: 1,
        nombre: 'Cancha 1',
        tipo: 'Aire Libre',
        techada: false,
        descripcion: 'Cancha sintética al aire libre con césped de última generación. Perfecta para partidos diurnos y nocturnos con iluminación LED de alto rendimiento.',
        capacidad: '6 vs 6 / 7 vs 7',
        dimensiones: '35m × 18m',
        precioDia: '$70.000',
        precioNoche: '$100.000',
        caracteristicas: ['Césped sintético', 'Iluminación LED', 'Parqueadero'],
    },
    {
        id: 2,
        nombre: 'Cancha 2',
        tipo: 'Aire Libre',
        techada: false,
        descripcion: 'Nuestra segunda cancha al aire libre cuenta con la mejor superficie de juego y sistema de drenaje para que juegues incluso después de la lluvia.',
        capacidad: '6 vs 6 / 7 vs 7',
        dimensiones: '35m × 18m',
        precioDia: '$70.000',
        precioNoche: '$100.000',
        caracteristicas: ['Césped sintético', 'Iluminación LED', 'Drenaje avanzado'],
    },
    {
        id: 3,
        nombre: 'Cancha 3',
        tipo: 'Techada',
        techada: true,
        descripcion: 'Nuestra cancha premium con techo completo. Juega sin importar el clima, con la mejor iluminación y ventilación. La favorita de los torneos.',
        capacidad: '6 vs 6 / 7 vs 7',
        dimensiones: '35m × 18m',
        precioDia: '$100.000',
        precioNoche: '$120.000',
        caracteristicas: ['Techada', 'Césped premium', 'Iluminación LED'],
    },
]

function Canchas() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Nuestras <span className="highlight">Canchas</span></h1>
                    <p>Instalaciones de primer nivel para tu mejor experiencia deportiva</p>
                </div>
            </section>

            <section className="canchas-list">
                <div className="container">
                    {canchasData.map((cancha, index) => (
                        <div key={cancha.id} className={`cancha-item ${index % 2 !== 0 ? 'reverse' : ''}`}>
                            {/* Gallery */}
                            <div className="cancha-gallery">
                                <div className="cancha-gallery-main">
                                    <div className="placeholder-img">
                                        <img
                                            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=993&auto=format&fit=crop"
                                            alt="Cancha sintética Macabi"
                                        />
                                    </div>
                                </div>
                                {/* Info */}
                                <div className="cancha-gallery-thumbs">
                                    {/* FOTO 2 */}
                                    <div className="placeholder-img">
                                        <img
                                            src="https://images.unsplash.com/photo-1517747614396-d21a78b850e8?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="Cancha sintética Macabi"
                                        />
                                    </div>
                                    {/* FOTO 3 */}
                                    <div className="placeholder-img">
                                        <img
                                            src="https://images.unsplash.com/photo-1517747614396-d21a78b850e8?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="Cancha sintética Macabi"
                                        />
                                    </div>
                                    {/* FOTO 4 */}
                                    <div className="placeholder-img">
                                        <img
                                            src="https://images.unsplash.com/photo-1517747614396-d21a78b850e8?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="Cancha sintética Macabi"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="cancha-info">
                                <span className={`cancha-type-badge ${cancha.techada ? 'techada' : ''}`}>
                                    {cancha.techada ? '' : ''}{cancha.tipo}
                                </span>
                                <h2>{cancha.nombre} <span>MACABI</span></h2>
                                <p className="cancha-description">{cancha.descripcion}</p>

                                <div className="cancha-specs">
                                    <div className="cancha-spec">
                                        <i className="fas fa-users"></i>
                                        <span>{cancha.capacidad}</span>
                                    </div>
                                    <div className="cancha-spec">
                                        <i className="fas fa-ruler-combined"></i>
                                        <span>{cancha.dimensiones}</span>
                                    </div>
                                    <div className="cancha-spec">
                                        <i className="fas fa-lightbulb"></i>
                                        <span>Iluminación LED</span>
                                    </div>
                                    <div className="cancha-spec">
                                        <i className="fas fa-seedling"></i>
                                        <span>Césped Sintético</span>
                                    </div>
                                </div>

                                <div className="cancha-prices">
                                    <h4>Tarifas por hora</h4>
                                    <div className="price-row">
                                        <span className="price-label">
                                            <i className="fas fa-sun"></i> Horario Día (3pm - 6pm)
                                        </span>
                                        <span className="price-value">{cancha.precioDia}</span>
                                    </div>
                                    <div className="price-row">
                                        <span className="price-label">
                                            <i className="fas fa-moon"></i> Horario Noche (7pm - 11pm)
                                        </span>
                                        <span className="price-value">{cancha.precioNoche}</span>
                                    </div>
                                </div>

                                <div className="cancha-features">
                                    {cancha.caracteristicas.map((feat, i) => (
                                        <span key={i} className="feature-badge">
                                            <i className="fas fa-check"></i> {feat}
                                        </span>
                                    ))}
                                </div>

                                <Link to="/reservas" className="btn btn-primary">
                                    <i className="fas fa-calendar-check"></i> Reservar {cancha.nombre}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Canchas
