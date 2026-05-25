import './Servicios.css';

const Servicios = () => {
  const serviciosData = [
    {
      id: 1,
      titulo: "Desarrollo Web Full-Stack",
      descripcion: "Creación de aplicaciones y sistemas web dinámicos a medida utilizando la arquitectura MVC, operaciones CRUD completas y flujos de trabajo eficientes.",
      tags: ["PHP", "Laravel", "MySQL"],
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      titulo: "Desarrollo Frontend y Diseño Responsivo",
      descripcion: "Transformación de ideas y maquetas en interfaces web modernas, limpias y completamente optimizadas para cualquier tipo de pantalla (móvil, tablet y escritorio).",
      tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      id: 3,
      titulo: "Integración de APIs y Autenticación",
      descripcion: "Conexión de plataformas con servicios externos mediante REST APIs e implementación de sistemas de inicio de sesión seguro y autenticación social (OAuth).",
      tags: ["REST APIs", "OAuth", "Git"],
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      id: 4,
      titulo: "Diseño y Gestión de Bases de Datos",
      descripcion: "Estructuración, diseño y optimización de bases de datos relacionales, garantizando la integridad, seguridad y manipulación eficiente de los datos del sistema.",
      tags: ["MySQL", "HeidiSQL", "CRUD"],
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="servicios" className="servicios-section">
      <div className="servicios-container">
        <h2 className="section-title text-center">Mis Servicios</h2>
        <div className="servicios-grid">
          {serviciosData.map((servicio) => (
            <div key={servicio.id} className="servicio-card">
              <div className="servicio-header">
                <div className="servicio-icon">
                  {servicio.icono}
                </div>
              </div>
              <div className="servicio-body">
                <h3 className="servicio-title">{servicio.titulo}</h3>
                <p className="servicio-desc">{servicio.descripcion}</p>
              </div>
              <div className="servicio-footer">
                <div className="servicio-tags">
                  {servicio.tags.map((tag, index) => (
                    <span key={index} className="servicio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
