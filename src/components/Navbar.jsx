import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
        window.scrollTo(0, 0)
    }, [location])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="navbar-logo">
                    MACA<span>BI</span>
                </Link>

                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                        Inicio
                    </Link>
                    <Link to="/canchas" className={location.pathname === '/canchas' ? 'active' : ''}>
                        Canchas
                    </Link>
                    <Link to="/escuela" className={location.pathname === '/escuela' ? 'active' : ''}>
                        Escuela
                    </Link>
                    <Link to="/reservas" className={location.pathname === '/reservas' ? 'active' : ''}>
                        Reservas
                    </Link>
                    <Link to="/contacto" className={location.pathname === '/contacto' ? 'active' : ''}>
                        Contáctanos
                    </Link>
                    <Link to="/reservas" className="navbar-cta">
                        Reservar Ahora
                    </Link>
                </div>

                <button
                    className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menú"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
