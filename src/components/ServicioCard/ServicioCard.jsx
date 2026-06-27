import { Link } from 'react-router-dom'
import './ServicioCard.css'

function ServicioCard({ icon, titulo, descripcion, enlace, textoEnlace }) {
    return (
        <div className="tarjeta-servicio">
            <div className="icono-servicio">
                <i className={icon}></i>
            </div>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <Link to={enlace} className="enlace-servicio">
                {textoEnlace} <i className="fas fa-arrow-right"></i>
            </Link>
        </div>
    )
}

export default ServicioCard
