import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Canchas from './pages/Canchas/Canchas'
import Escuela from './pages/Escuela/Escuela'
import Reservas from './pages/Reservas/Reservas'
import Contacto from './pages/Contacto/Contacto'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canchas" element={<Canchas />} />
          <Route path="/escuela" element={<Escuela />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
