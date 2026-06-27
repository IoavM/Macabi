# MACABI

MACABI es una plataforma web desarrollada para un complejo deportivo de fútbol en Popayán, Colombia. En ella, los usuarios pueden conocer las canchas de fútbol sintético, la escuela de fútbol y los demás servicios del complejo, además de reservar turnos de forma rápida y sencilla a través de WhatsApp.

---

## Tabla de contenidos
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Configuración y Variables](#configuración-y-variables)
- [Despliegue](#despliegue)
- [Contribución](#contribución)
- [Roadmap](#roadmap)
- [Autores](#autores)
- [Licencia](#licencia)

---

## Características

- **Catálogo Detallado de Canchas:** Ficha técnica y visual de las 3 canchas de fútbol del complejo (2 al aire libre y 1 techada) con dimensiones, capacidad recomendada, tarifas diferenciadas para horarios diurnos/nocturnos y galerías de imágenes.
- **Portal de la Escuela de Fútbol:** Espacio dedicado a la escuela formativa asociada, segmentando las categorías de entrenamiento desde niveles infantiles hasta adultos.
- **Zona Social y Cafetería:** Espacio dedicado a los servicios adicionales del establecimiento, destacando la oferta de hidratación, bebidas frías y snacks (mecato) para acompañar los partidos de los clientes.
- **Enlace Rápido de Reservas:** Integración directa con WhatsApp que genera mensajes estructurados de forma automática para facilitar el alquiler de canchas y consultas sobre la escuela.
- **Arquitectura Basada en Componentes:** Refactorización modular en React donde las tarjetas y grids (servicios, canchas, categorías y beneficios) son componentes autocontenidos que encapsulan su código (`.jsx`), sus hojas de estilo (`.css`) y su contenido dinámico (`.json`).
- **Experiencia de Usuario Premium:** Diseño moderno basado en un tema oscuro con acentos de color verde deportivo, animaciones de transición fluidas e interactividad responsiva adaptada a dispositivos móviles.

---

## Tecnologías

- **Frontend:** React 19, Vite, React Router DOM.
- **Estilos:** Hojas de estilo Vanilla CSS estructuradas con variables globales de colores y formato de comentarios unificado (`/*-----TITULO--------*/`).
- **Iconografía:** CDN de FontAwesome.

---

## Requisitos previos

- Node.js (versión 18.x o superior recomendada).
- npm (versión 9.x o superior recomendada).

---

## Instalación

```bash
# 1) Clonar el repositorio
git clone [url-del-repo]

# 2) Entrar al proyecto
cd Macabi/macabi

# 3) Instalar dependencias
npm install
```

---

## Ejecución

Para iniciar la aplicación en el entorno local de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible de forma predeterminada en: [http://localhost:5173](http://localhost:5173)

---

## Scripts disponibles

- `npm run dev`: Levanta el servidor local de desarrollo con recarga rápida (HMR).
- `npm run build`: Genera el empaquetado optimizado de producción en la carpeta `/dist`.
- `npm run preview`: Previsualiza localmente el build de producción para pruebas previas al despliegue.
- `npm run lint`: Ejecuta el análisis estático de código mediante ESLint.

---

## Estructura del proyecto

```text
.
├── public/                 # Recursos estáticos públicos (Favicon, imágenes provisionales de canchas)
│   └── images/
│       └── canchas/        # Carpetas con imágenes independientes para cada cancha (Cancha 1, 2 y 3)
├── src/                    # Código fuente principal
│   ├── components/         # Componentes reutilizables autocontenidos
│   │   ├── BeneficioCard/  # Tarjeta de beneficios (jsx, css, json)
│   │   ├── CanchaCard/     # Tarjeta de canchas con variantes preview/detailed (jsx, css, json)
│   │   ├── CategoriaCard/  # Tarjeta de categorías de edad (jsx, css, json)
│   │   ├── Footer/         # Pie de página estructurado (jsx, css)
│   │   ├── Navbar/         # Menú de navegación fijo y responsivo (jsx, css)
│   │   └── ServicioCard/   # Tarjeta de servicios principales (jsx, css, json)
│   ├── pages/              # Vistas o páginas principales de la aplicación
│   │   ├── Canchas/        # Listado de canchas deportivas (jsx, css)
│   │   ├── Contacto/       # Página de contacto y ubicación (jsx, css)
│   │   ├── Escuela/        # Módulo de Escuela de fútbol (jsx, css)
│   │   ├── Home/           # Página de inicio / Landing page (jsx, css)
│   │   └── Reservas/       # Formulario y cotizador de reservas (jsx, css)
│   ├── styles/             # Hojas de estilo globales
│   │   └── global.css      # Variables de color, fuentes de Google Fonts y reglas generales
│   ├── App.jsx             # Enrutador principal de la aplicación
│   └── main.jsx            # Punto de entrada inicial del DOM
├── eslint.config.js        # Reglas de estilo de desarrollo
├── index.html              # Plantilla base HTML del portal
├── package.json            # Scripts de ejecución y dependencias del proyecto
└── vite.config.js          # Configuración del bundler Vite
```

---

## Configuración y Variables

El proyecto no requiere de variables de entorno ni integraciones de APIs complejas en esta fase de desarrollo. Los datos referentes a canchas, servicios y escuela de fútbol están gestionados mediante archivos estáticos `.json` dentro del directorio de cada componente, logrando una carga ultrarrápida y facilitando el mantenimiento futuro.

---

## Despliegue

1. Generar la compilación optimizada:
   ```bash
   npm run build
   ```
2. Desplegar los archivos de la carpeta `/dist` en plataformas como Vercel, Netlify, GitHub Pages o tu servidor web de preferencia.

---

## Contribución

1. Crear una rama desde `main` (`git checkout -b feature/nombre-mejora`).
2. Implementar los cambios y realizar commits descriptivos.
3. Abrir un Pull Request detallando los ajustes aplicados.

---

## Roadmap

- [ ] Integración de sistema de reservas en línea directamente en la web.
- [ ] Implementar un módulo para consultar campeonatos y torneos locales de Popayán.
- [ ] Pasarela de pagos para el alquiler de canchas.

---

## Autores

### Programación y Diseño
- **Ioav Mizrachi Muñoz** - Desarrollador y Diseñador del Proyecto

---

## Licencia

Copyright © 2026 Ioav Mizrachi. Todos los derechos reservados.

Este proyecto se publica únicamente con fines de demostración como parte de mi portafolio. No está permitido copiar, modificar, distribuir o reutilizar este código, total o parcialmente, sin la autorización expresa del autor. Consulte el archivo [LICENSE](./LICENSE) para más detalles.


