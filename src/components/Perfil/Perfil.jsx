import './Perfil.css';

const Perfil = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="sobre-mi-grid">
          {/* ===================================== TARJETA 1: PERFIL PROFESIONAL ====================================== */}
          <div className="card">
            <div className="card-header">
              {/* Ícono de Usuario (SVG) */}
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Perfil Profesional</h3>
            </div>
            <p className="card-text">
              Estudiante de 4to ciclo de Informática y Desarrollo de Aplicaciones Web en SENATI con experiencia práctica en desarrollo Full-Stack. Especializado en PHP, Laravel, JavaScript, MySQL y Tailwind CSS.
              <br /><br />
              He diseñado, desarrollado y desplegado aplicaciones web completas utilizando la arquitectura MVC, operaciones CRUD, autenticación OAuth y buenas prácticas de programación.
              <br /><br />
              Busco una oportunidad de prácticas preprofesionales donde pueda aportar soluciones tecnológicas, automatización de procesos y componentes con IA, mientras sigo desarrollando mis habilidades en entornos reales y dinámicos.
            </p>
          </div>

          {/* ===================================== TARJETA 2: EDUCACIÓN & CERTIFICACIONES ====================================== */}
          <div className="card">
            <div className="card-header">
              {/* Ícono de Educación / Sombrero (SVG) */}
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3>Educación & Formación</h3>
            </div>
            <div className="timeline">
              {/* Ítem de Educación 1 */}
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Informática y Desarrollo de Web</h4>
                  <span className="badge badge-outline">En Curso</span>
                </div>
                <span className="timeline-date">SENATI | 4to Ciclo (2026 - Actualidad)</span>
              </div>
              {/* Ítem de Certificación 1 */}
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>BIG School</h4>
                  <span className="badge badge-solid">Certificación IA</span>
                </div>
                <span className="timeline-date">Desarrollo con IA, Data Science, Machine Learning, Ciberseguridad & Hacking Ético (2026)</span>
              </div>
              {/* Ítem de Certificación 2 */}
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Cisco Networking Academy</h4>
                  <span className="badge badge-outline">Cisco Academy</span>
                </div>
                <span className="timeline-date">Networking, Hardware, Cybersecurity Essentials, IoT & Digital Transformation</span>
              </div>
              {/* Ítem de Certificación 3 */}
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Formación Complementaria</h4>
                  <span className="badge badge-outline">Otros</span>
                </div>
                <span className="timeline-date">Fundación Romero (Modelo Canvas) | Excel Avanzado (Semana Excel Imparable)</span>
              </div>
              {/* Ítem de Educación 2 */}
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Educación Secundaria</h4>
                  <span className="badge badge-outline">Egresado</span>
                </div>
                <span className="timeline-date">I.E. 3051 "El Milagro" (2017 - 2021)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
