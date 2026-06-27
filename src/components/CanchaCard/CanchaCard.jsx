import { Link } from 'react-router-dom'
import './CanchaCard.css'

function CanchaCard({ cancha, variant = 'detailed', index = 0 }) {
    if (variant === 'preview') {
        const badgeStyle = cancha.techada ? { background: 'rgba(0,200,83,0.3)' } : {}
        return (
            <div className="tarjeta-vista-previa-cancha">
                <div className="marcador-imagen">
                    <img
                        src={cancha.imagenPrincipal}
                        alt={cancha.nombre}
                    />
                </div>
                <div className="informacion-vista-previa-cancha">
                    <span className="etiqueta-cancha" style={badgeStyle}>
                        {cancha.tipo}
                    </span>
                    <h3>{cancha.nombre}</h3>
                    <p>{cancha.descripcionCorta || cancha.descripcion}</p>
                    <span className="precio-cancha">Desde {cancha.precioDia}/h</span>
                </div>
            </div>
        )
    }

    return (
        <div className={`cancha-item ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="cancha-gallery">
                <div className="cancha-gallery-main">
                    <div className="placeholder-img">
                        <img
                            src={cancha.imagenPrincipal}
                            alt={cancha.nombre}
                        />
                    </div>
                </div>
                <div className="cancha-gallery-thumbs">
                    {cancha.imagenesGaleria && cancha.imagenesGaleria.map((img, i) => (
                        <div key={i} className="placeholder-img">
                            <img
                                src={img}
                                alt={`${cancha.nombre} miniatura ${i + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="cancha-info">
                <span className={`cancha-type-badge ${cancha.techada ? 'techada' : ''}`}>
                    {cancha.tipo}
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
    )
}

export default CanchaCard
