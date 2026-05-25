import './Habilidades.css';

const Habilidades = () => {
  // Arreglo de datos: Información real del usuario
  const skillsData = [
    {
      id: 1,
      titulo: "PHP & Laravel",
      descripcion: "Desarrollo backend robusto, REST APIs, arquitectura MVC y migraciones de bases de datos.",
      nivel: "Avanzado",
      botonTexto: "COMPLETADO",
      estado: "completado"
    },
    {
      id: 2,
      titulo: "JavaScript (ES6+)",
      descripcion: "Creación de interactividad avanzada, peticiones asíncronas y componentes dinámicos.",
      nivel: "Avanzado",
      botonTexto: "COMPLETADO",
      estado: "completado"
    },
    {
      id: 3,
      titulo: "Tailwind CSS & Bootstrap",
      descripcion: "Maquetación moderna, layouts flexibles, responsive design y sistemas de diseño adaptables.",
      nivel: "Avanzado",
      botonTexto: "COMPLETADO",
      estado: "completado"
    },
    {
      id: 4,
      titulo: "MySQL & CRUD Operations",
      descripcion: "Diseño y administración de bases de datos relacionales, consultas complejas y optimización.",
      nivel: "Avanzado",
      botonTexto: "COMPLETADO",
      estado: "completado"
    },
    {
      id: 5,
      titulo: "HTML5 & CSS3",
      descripcion: "Estructuras web semánticas y estilos dinámicos respetando estándares de accesibilidad.",
      nivel: "Avanzado",
      botonTexto: "COMPLETADO",
      estado: "completado"
    },
    {
      id: 6,
      titulo: "Git & GitHub",
      descripcion: "Control de versiones, flujos de trabajo colaborativos y repositorios en la nube.",
      nivel: "Avanzado",
      botonTexto: "COMPLETADO",
      estado: "completado"
    },
    {
      id: 7,
      titulo: "HeidiSQL & Figma",
      descripcion: "Modelado/administración de bases de datos y diseño/prototipado de interfaces UI/UX.",
      nivel: "Intermedio",
      botonTexto: "COMPLETADO",
      estado: "completado"
    },
    {
      id: 8,
      titulo: "Netlify & Deployment",
      descripcion: "Despliegue de aplicaciones frontend, hosting estático y pipelines de integración continua.",
      nivel: "Intermedio",
      botonTexto: "COMPLETADO",
      estado: "completado"
    },
    {
      id: 9,
      titulo: "Fundamentos de IA",
      descripcion: "Automatización de flujos de trabajo y desarrollo asistido por modelos de lenguaje artificial.",
      nivel: "Aprendizaje Activo",
      botonTexto: "EN PROCESO",
      estado: "proceso"
    },
    {
      id: 10,
      titulo: "Ciberseguridad Básica",
      descripcion: "Conceptos fundamentales de seguridad web, protección contra amenazas y hacking ético.",
      nivel: "Aprendizaje Activo",
      botonTexto: "EN PROCESO",
      estado: "proceso"
    },
    {
      id: 11,
      titulo: "Integración OAuth",
      descripcion: "Implementación de login social e integraciones seguras con Facebook y GitHub.",
      nivel: "Avanzado",
      botonTexto: "COMPLETADO",
      estado: "completado"
    },
    {
      id: 12,
      titulo: "Idiomas (Español / Inglés)",
      descripcion: "Español en nivel Nativo e Inglés en nivel Básico instrumental.",
      nivel: "Competencia Básica",
      botonTexto: "COMPLETADO",
      estado: "completado"
    }
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <h2 className="section-title text-center">Habilidades & Tech Stack</h2>
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">
              {/* Cabecera de la tarjeta: Ícono y Botón */}
              <div className="skill-header">
                <div className="skill-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                {/* Clases dinámicas */}
                <span className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}`}>
                  {skill.botonTexto}
                </span>
              </div>
              {/* Cuerpo de la tarjeta: Textos */}
              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
                <span className="skill-level">{skill.nivel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
