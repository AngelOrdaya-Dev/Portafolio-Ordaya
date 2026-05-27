import { useState } from 'react';
import './Contacto.css';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const [formulario, setFormulario] = useState({ nombre: '', email: '', mensaje: '' });
  const [estadoEnvio, setEstadoEnvio] = useState(null); // null, 'enviando', 'exito', 'error'

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    // Mapeamos los nombres del input para actualizar el estado correctamente
    const campoEstado = name === 'name' ? 'nombre' : name === 'message' ? 'mensaje' : name;

    setFormulario({
      ...formulario,
      [campoEstado]: value
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setEstadoEnvio('enviando');

    try {
      const templateParams = {
        from_name: formulario.nombre,
        from_email: formulario.email,
        message: formulario.mensaje,
      };
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      // EmailJS returns a response object; treat any successful call as success
      if (result?.status === 200) {
        setEstadoEnvio('exito');
        setFormulario({ nombre: '', email: '', mensaje: '' });
        setTimeout(() => setEstadoEnvio(null), 5000);
      } else {
        setEstadoEnvio('error');
        setTimeout(() => setEstadoEnvio(null), 5000);
      }
    } catch (error) {
      setEstadoEnvio('error');
      setTimeout(() => setEstadoEnvio(null), 5000);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <h2 className="contacto-main-title">Trabajemos Juntos</h2>
        <div className="contacto-grid">
          {/* ===================================== COLUMNA IZQUIERDA: INFORMACIÓN ====================================== */}
          <div className="contacto-info">
            <h3 className="info-title">Ponte en Contacto</h3>
            <p className="info-desc">
              ¿Tienes un proyecto en mente o buscas un practicante de desarrollo web motivado para aportar soluciones reales? Me encantaría conversar contigo.
            </p>
            <div className="info-items">
              {/* Ítem Email */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Email</span>
                  <p className="item-text">angel1120171@hotmail.com</p>
                </div>
              </div>
              {/* Ítem Teléfono */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Teléfono</span>
                  <p className="item-text">+51 954 827 167</p>
                </div>
              </div>
              {/* Ítem Ubicación */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Ubicación</span>
                  <p className="item-text"> Lima - Perú</p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================== COLUMNA DERECHA: FORMULARIO ====================================== */}
          <div className="contacto-form-wrapper">
            <form
              action="https://formspree.io/f/xwvzrzqd"
              method="POST"
              onSubmit={manejarEnvio}
              className="contacto-form"
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="name" value={formulario.nombre} onChange={manejarCambio} placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formulario.email} onChange={manejarCambio} placeholder="tu@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="message" value={formulario.mensaje} onChange={manejarCambio} placeholder="Cuéntame sobre tu proyecto..." rows="5" required ></textarea>
              </div>
              <button type="submit" className="btn-submit" disabled={estadoEnvio === 'enviando'}>
                {estadoEnvio === 'enviando' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              {estadoEnvio === 'exito' && (
                <p style={{ color: '#10b981', marginTop: '12px', fontSize: '0.9rem', textAlign: 'center', fontWeight: '500' }}>
                  ¡Mensaje enviado con éxito!
                </p>
              )}
              {estadoEnvio === 'error' && (
                <p style={{ color: '#ef4444', marginTop: '12px', fontSize: '0.9rem', textAlign: 'center', fontWeight: '500' }}>
                  Hubo un error al enviar. Por favor, inténtalo de nuevo.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;