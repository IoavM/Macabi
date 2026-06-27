import CanchaCard from '../../components/CanchaCard/CanchaCard'
import canchasData from '../../components/CanchaCard/canchasData.json'
import './Canchas.css'

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
                        <CanchaCard
                            key={cancha.id}
                            cancha={cancha}
                            variant="detailed"
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Canchas

