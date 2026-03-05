import { useState } from 'react'
import '../styles/Reservas.css'

const canchaOptions = [
    { value: '', label: 'Seleccionar cancha' },
    { value: 'cancha1', label: 'Cancha 1 — Aire Libre' },
    { value: 'cancha2', label: 'Cancha 2 — Aire Libre' },
    { value: 'cancha3', label: 'Cancha 3 — Techada' },
]

const horaOptions = [
    '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM',
]

const precios = {
    cancha1: { dia: 80000, noche: 100000 },
    cancha2: { dia: 80000, noche: 100000 },
    cancha3: { dia: 100000, noche: 120000 },
}

function calcularPrecio(cancha, hora, duracion) {
    if (!cancha || !hora) return 0
    const precioCancha = precios[cancha]
    if (!precioCancha) return 0

    const horaNum = parseInt(hora)
    const isPM = hora.includes('PM') && horaNum !== 12
    const hora24 = isPM ? horaNum + 12 : horaNum === 12 && hora.includes('PM') ? 12 : horaNum

    const esNoche = hora24 >= 18
    const precioHora = esNoche ? precioCancha.noche : precioCancha.dia
    return precioHora * duracion
}

function formatPrice(num) {
    return '$' + num.toLocaleString('es-CO')
}

function Reservas() {
    const [form, setForm] = useState({
        nombre: '',
        telefono: '',
        cancha: '',
        fecha: '',
        hora: '',
        duracion: 1,
        notas: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const setDuracion = (d) => {
        setForm({ ...form, duracion: d })
    }

    const precioEstimado = calcularPrecio(form.cancha, form.hora, form.duracion)

    const canchaLabel = canchaOptions.find(c => c.value === form.cancha)?.label || ''

    const handleWhatsApp = (e) => {
        e.preventDefault()

        const msg = `¡Hola MACABI! ⚽\n\n` +
            `Quiero reservar una cancha:\n\n` +
            `👤 *Nombre:* ${form.nombre}\n` +
            `📱 *Teléfono:* ${form.telefono}\n` +
            `🏟️ *Cancha:* ${canchaLabel}\n` +
            `📅 *Fecha:* ${form.fecha}\n` +
            `🕐 *Hora:* ${form.hora}\n` +
            `⏱️ *Duración:* ${form.duracion} hora(s)\n` +
            `💰 *Precio estimado:* ${formatPrice(precioEstimado)}\n` +
            (form.notas ? `📝 *Notas:* ${form.notas}\n` : '') +
            `\n¡Gracias!`

        const url = `https://wa.me/573000000000?text=${encodeURIComponent(msg)}`
        window.open(url, '_blank')
    }

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Reserva tu <span className="highlight">Cancha</span></h1>
                    <p>Selecciona la cancha, fecha y hora — te respondemos por WhatsApp</p>
                </div>
            </section>

            <section className="reservas-content">
                <div className="container">
                    <div className="reservas-wrapper">
                        {/* Form */}
                        <div className="reservas-form-card">
                            <h2>Datos de <span>Reserva</span></h2>
                            <p>Completa el formulario y envía tu solicitud por WhatsApp</p>

                            <form onSubmit={handleWhatsApp}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label><i className="fas fa-user"></i> Nombre completo</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            placeholder="Tu nombre"
                                            value={form.nombre}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><i className="fas fa-phone"></i> Teléfono</label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            placeholder="300 000 0000"
                                            value={form.telefono}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label><i className="fas fa-futbol"></i> Cancha</label>
                                    <select name="cancha" value={form.cancha} onChange={handleChange} required>
                                        {canchaOptions.map(c => (
                                            <option key={c.value} value={c.value}>{c.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label><i className="fas fa-calendar"></i> Fecha</label>
                                        <input
                                            type="date"
                                            name="fecha"
                                            value={form.fecha}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><i className="fas fa-clock"></i> Hora de inicio</label>
                                        <select name="hora" value={form.hora} onChange={handleChange} required>
                                            <option value="">Seleccionar hora</option>
                                            {horaOptions.map(h => (
                                                <option key={h} value={h}>{h}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label><i className="fas fa-hourglass-half"></i> Duración</label>
                                    <div className="duration-buttons">
                                        {[1, 2, 3].map(d => (
                                            <button
                                                key={d}
                                                type="button"
                                                className={`duration-btn ${form.duracion === d ? 'active' : ''}`}
                                                onClick={() => setDuracion(d)}
                                            >
                                                {d} hora{d > 1 ? 's' : ''}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label><i className="fas fa-sticky-note"></i> Notas adicionales (opcional)</label>
                                    <textarea
                                        name="notas"
                                        rows="3"
                                        placeholder="Ej: Necesitamos petos, queremos árbitro..."
                                        value={form.notas}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="price-estimate">
                                    <div className="price-estimate-label">
                                            Precio estimado:
                                    </div>
                                    <div className="price-estimate-value">
                                        {precioEstimado > 0 ? formatPrice(precioEstimado) : '---'}
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
                                    <i className="fab fa-whatsapp"></i> Enviar por WhatsApp
                                </button>
                            </form>
                        </div>

                        {/* Sidebar */}
                        <div className="reservas-sidebar">
                            {/* Hours */}
                            <div className="sidebar-card">
                                <h3><i className="fas fa-clock"></i> Horario</h3>
                                <div className="hours-list">
                                    <div className="hours-item">
                                        <span>Lunes a Sábados</span>
                                        <span>3:00 PM - 11:00 PM</span>
                                    </div>
                                    <div className="hours-item">
                                        <span>Domingos</span>
                                        <span>3:00 PM - 10:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tariff */}
                            <div className="sidebar-card">
                                <h3><i className="fas fa-tags"></i> Tarifas</h3>
                                <table className="tariff-table">
                                    <thead>
                                        <tr>
                                            <th>Cancha</th>
                                            <th>Día</th>
                                            <th>Noche</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cancha 1</td>
                                            <td>$80.000</td>
                                            <td>$100.000</td>
                                        </tr>
                                        <tr>
                                            <td>Cancha 2</td>
                                            <td>$80.000</td>
                                            <td>$100.000</td>
                                        </tr>
                                        <tr>
                                            <td>Cancha 3 </td>
                                            <td>$100.000</td>
                                            <td>$120.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Policy */}
                            <div className="sidebar-card">
                                <h3><i className="fas fa-info-circle"></i> Política de Reserva</h3>
                                <ul className="policy-list">
                                    <li>
                                        <i className="fas fa-check-circle"></i>
                                        <span>Reserva con mínimo 2 horas de anticipación</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle"></i>
                                        <span>Confirmación por WhatsApp con comprobante de pago</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle"></i>
                                        <span>Cancelación gratuita hasta 4 horas antes</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle"></i>
                                        <span>Precios incluyen balón e iluminación</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle"></i>
                                        <span>Disponibilidad sujeta a confirmación</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reservas
