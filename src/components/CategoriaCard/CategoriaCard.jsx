import './CategoriaCard.css'

function CategoriaCard({ nombre, edad, icon, descripcion }) {
    return (
        <div className="categoria-card">
            <div className="categoria-icon">
                <i className={icon}></i>
            </div>
            <h3>{nombre}</h3>
            <div className="edad">{edad}</div>
            <p>{descripcion}</p>
        </div>
    )
}

export default CategoriaCard
