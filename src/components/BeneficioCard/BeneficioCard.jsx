import './BeneficioCard.css'

function BeneficioCard({ icon, titulo, desc }) {
    return (
        <div className="beneficio-item">
            <div className="beneficio-icon">
                <i className={icon}></i>
            </div>
            <div className="beneficio-text">
                <h4>{titulo}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default BeneficioCard
