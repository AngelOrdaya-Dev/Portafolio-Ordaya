import './Proyectos.css';

const Proyectos = () => {
  // Arreglo de proyectos del usuario con imágenes de alta calidad
  const proyectosData = [
    {
      id: 1,
      imagen: "/imagen app-citas.jpeg",
      titulo: "Sistema de Gestión de Citas – Web App Full-Stack",
      descripcion: "Desarrollo completo Full-Stack con Laravel + MySQL. Implementación de operaciones CRUD, autenticación de usuarios y panel administrativo para automatización de registros de agendamiento.",
      tecnologias: ["Laravel", "MySQL", "PHP", "Bootstrap", "MVC"],
      linkDemo: "https://gestion-citas.free.nf/?i=1",
      linkCodigo: "https://github.com/Vrak23/app-gestion-citas/tree/angel-rama"
    },
    {
      id: 2,
      imagen: "/imagen premier-academy.jpeg",
      titulo: "Premier Academy – Plataforma Web Educativa",
      descripcion: "Interfaz web moderna y completamente responsiva para una plataforma educativa interactiva. Implementación de componentes dinámicos enfocados en optimizar la navegación y la experiencia de usuario.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      linkDemo: "https://premier-academy.infinityfreeapp.com",
      linkCodigo: "https://github.com/AngelOrdaya-Dev/App_Login"
    },
    {
      id: 3,
      imagen: "/imagen ach-details.jpeg",
      titulo: "ACH Details – E-commerce",
      descripcion: "Plataforma web de comercio electrónico y catálogo digital para ACH Details, un negocio especializado en arreglos florales premium. Despliegue continuo en Netlify y control de versiones con Git/GitHub.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "Netlify", "Git"],
      linkDemo: "https://ach-details-lima.netlify.app/?v=2",
      linkCodigo: "https://github.com/AngelOrdaya-Dev/ACH-details"
    },
    {
      id: 4,
      imagen: "/imagen portafolio Angel.jpeg",
      titulo: "Portafolio Profesional React",
      descripcion: "Diseño y desarrollo de este sitio web de presentación personal. Estructurado con componentes modulares de React, estados para la interacción responsive de móviles y animaciones CSS de alto rendimiento.",
      tecnologias: ["React", "Vite", "JavaScript", "CSS3", "Responsive"],
      linkDemo: "https://portafolio-ordaya.vercel.app/",
      linkCodigo: "https://github.com/AngelOrdaya-Dev/Portafolio-Ordaya"
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">Proyectos Destacados</h2>
        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              {/* 1. Imagen del Proyecto */}
              <div className="proyecto-imagen">
                <img src={proyecto.imagen} alt={`Captura de ${proyecto.titulo}`} />
              </div>
              {/* 2. Contenido de la Tarjeta */}
              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>
                {/* 3. Etiquetas de Tecnologías */}
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* 4. Botones de Acción */}
                <div className="proyecto-links">
                  <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Ver Proyecto
                  </a>
                  <a href={proyecto.linkCodigo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-codigo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Ver Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
