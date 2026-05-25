import './Banner.css';
import miFoto from '../../assets/miFoto.jpeg';

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* 1. Etiqueta de Estado (Badge) */}
        <div className="status-badge">
          <span className="status-dot"></span> Disponible para Prácticas Preprofesionales
        </div>

        {/* 2. Foto de Perfil Circular */}
        <div className="profile-photo-container">
          <img src={miFoto} alt="Angel Ricardo Ordaya Huamanculi" className="profile-photo" />
        </div>

        {/* 3. Título Principal */}
        <h1 className="hero-title">
          Angel <br /> <span className="text-cyan">Ordaya</span>
        </h1>

        {/* 4. Subtítulo (Rol) */}
        <h2 className="hero-subtitle">
          Estudiante de Informática y Desarrollo de Aplicaciones Web | Developer Full-Stack (PHP, Laravel, JS, MySQL)
        </h2>

        {/* 5. Descripción */}
        <p className="hero-description">
          Estudiante de 4to ciclo en SENATI con experiencia práctica en desarrollo Full-Stack. Especializado en diseñar, desarrollar y desplegar aplicaciones web completas utilizando arquitectura MVC, operaciones CRUD y autenticación OAuth. Apasionado por la automatización de procesos y la integración de IA.
        </p>

        {/* 6. Botones de Acción */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>
      </div>

      {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
      <div className="scroll-indicator">
        ↓
      </div>
    </section>
  );
};

export default Banner;
