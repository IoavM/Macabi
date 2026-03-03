import { useState } from 'react'
import '../styles/Contacto.css'

const asuntoOptions = [
    { value: '', label: 'Seleccionar asunto' },
    { value: 'reserva', label: 'Información sobre reservas' },
    { value: 'escuela', label: 'Escuela de fútbol' },
    { value: 'torneos', label: 'Torneos y eventos' },
    { value: 'empresarial', label: 'Eventos empresariales' },
    { value: 'otro', label: 'Otro' },
]

function Contacto() {
    const [form, setForm] = useState({
        nombre: '',
        telefono: '',
        email: '',
        asunto: '',
        mensaje: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleWhatsApp = (e) => {
        e.preventDefault()

        const asuntoLabel = asuntoOptions.find(a => a.value === form.asunto)?.label || ''

        const msg = `¡Hola MACABI! 👋\n\n` +
            `📋 *Formulario de Contacto*\n\n` +
            `👤 *Nombre:* ${form.nombre}\n` +
            `📱 *Teléfono:* ${form.telefono}\n` +
            (form.email ? `📧 *Email:* ${form.email}\n` : '') +
            `📌 *Asunto:* ${asuntoLabel}\n` +
            `💬 *Mensaje:* ${form.mensaje}\n` +
            `\n¡Gracias!`

        const url = `https://wa.me/573000000000?text=${encodeURIComponent(msg)}`
        window.open(url, '_blank')
    }

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Contácta<span className="highlight">nos</span></h1>
                    <p>Estamos aquí para ayudarte. ¡Escríbenos!</p>
                </div>
            </section>

            <section className="contacto-content">
                <div className="container">
                    <div className="contacto-wrapper">
                        {/* Info Panel */}
                        <div className="contacto-info">
                            <div className="contacto-info-card">
                                <h3><i className="fas fa-headset"></i> Información de Contacto</h3>
                                <div className="contacto-data-list">
                                    <div className="contacto-data-item">
                                        <div className="contacto-data-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contacto-data-text">
                                            <h4>Dirección</h4>
                                            <p>sector la Rioja, Variante Nte., Popayán, Cauca</p>
                                        </div>
                                    </div>
                                    <div className="contacto-data-item">
                                        <div className="contacto-data-icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="contacto-data-text">
                                            <h4>Teléfono</h4>
                                            <a href="tel:+573014775550">+57 301 477 5550</a>
                                        </div>
                                    </div>
                                    <div className="contacto-data-item">
                                        <div className="contacto-data-icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="contacto-data-text">
                                            <h4>Instagram</h4>
                                            <a href="https://www.instagram.com/macabipopayan/">@macabipopayan</a>
                                        </div>
                                    </div>
                                    <div className="contacto-data-item">
                                        <div className="contacto-data-icon">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div className="contacto-data-text">
                                            <h4>Horario</h4>
                                            <p>Lunes a Domingo: 3:00pm - 11:00pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="contacto-info-card">
                                <h3><i className="fas fa-share-alt"></i> Redes Sociales</h3>
                                <div className="contacto-social">
                                    <a href="https://www.instagram.com/macabipopayan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.tiktok.com/@macabipopayan" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                        <i className="fab fa-tiktok"></i>
                                    </a>
                                    <a href="https://wa.me/573014775550" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="contacto-info-card contacto-map">
                                <h3><i className="fas fa-map"></i> Ubicación</h3>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.043304791669!2d-76.58274942690021!3d2.4926120568414514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3005bd47b96c33%3A0x49ae8a1c0d2b551a!2sMACABI%20Canchas%20Sint%C3%A9ticas!5e0!3m2!1ses-419!2sco!4v1772500866772!5m2!1ses-419!2sco"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0, borderRadius: '8px', display: 'block' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación Macabi"
                                />
                            </div>
                        </div>

                        {/* Form */}
                        <div className="contacto-form-card">
                            <h2>Envíanos un <span>Mensaje</span></h2>
                            <p>Completa el formulario y te responderemos por WhatsApp</p>

                            <form onSubmit={handleWhatsApp}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label><i className="fas fa-user"></i> Nombre</label>
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
                                    <label><i className="fas fa-envelope"></i> Email (opcional)</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="correo@ejemplo.com"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><i className="fas fa-tag"></i> Asunto</label>
                                    <select name="asunto" value={form.asunto} onChange={handleChange} required>
                                        {asuntoOptions.map(a => (
                                            <option key={a.value} value={a.value}>{a.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label><i className="fas fa-comment-dots"></i> Mensaje</label>
                                    <textarea
                                        name="mensaje"
                                        rows="5"
                                        placeholder="Escribe tu mensaje aquí..."
                                        value={form.mensaje}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
                                    <i className="fab fa-whatsapp"></i> Enviar por WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacto
