import './Educacion.css';

const Educacion = () => {

  const educacion = [
    {
      id: 1,
      institucion: 'SENATI',
      titulo: 'Informática y Desarrollo de Aplicaciones Web',
      nivel: 'Educación Superior Técnica · 4to Ciclo',
      periodo: '2024 — Actualidad',
      icono: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
    {
      id: 2,
      institucion: 'I.E. 3051 "El Milagro"',
      titulo: 'Educación Secundaria Completa',
      nivel: 'Educación Básica Regular',
      periodo: '2017 — 2021',
      icono: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
    {
      id: 3,
      institucion: 'I.E. 3053 "Virgen del Carmen"',
      titulo: 'Educación Primaria Completa',
      nivel: 'Educación Básica Regular',
      periodo: '2010 — 2016',
      icono: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
  ];

  const certificaciones = [
    {
      id: 1,
      titulo: 'Jornadas de Data Science con IA',
      emisor: 'BIG School',
      fecha: '08 May 2026',
      pdf: '/certificados/Certificado-Angel-Ricardo-Ordaya-Huamanculi-nnnes1n9.pdf',
    },
    {
      id: 2,
      titulo: 'Curso de Ciberseguridad y Hacking Ético',
      emisor: 'BIG School',
      fecha: '11 Apr 2026',
      pdf: '/certificados/Certificado-Angel-Ordaya-450aturz.pdf',
    },
    {
      id: 3,
      titulo: 'Iniciación al Desarrollo con IA: de 0 a Producción',
      emisor: 'BIG School',
      fecha: '14 Mar 2026',
      pdf: '/certificados/Certificado-Angel-Ricardo-Ordaya-Huamanculi-6h61f32b.pdf',
    },
    {
      id: 4,
      titulo: 'Conceptos Básicos de Redes',
      emisor: 'Cisco Networking Academy / SENATI',
      fecha: '23 Jun 2025',
      pdf: '/certificados/Networking_Basics_certificate_1661085-senati-pe_4995dc4c-8766-4e41-b255-e4045abdcb4f.pdf',
    },
    {
      id: 5,
      titulo: 'Introducción al Internet de las Cosas y Transformación Digital',
      emisor: 'Cisco Networking Academy / SENATI',
      fecha: '03 Jun 2025',
      pdf: '/certificados/Introduction_to_IoT_certificate_1661085-senati-pe_8a842051-1feb-4f61-986a-5062d7a98012.pdf',
    },
    {
      id: 6,
      titulo: 'Introducción a la Ciencia de Datos',
      emisor: 'Cisco Networking Academy / SENATI',
      fecha: '25 May 2025',
      pdf: '/certificados/Introduction_to_Data_Science_certificate_1661085-senati-pe_be7f5b20-7245-412b-9ce7-475f5b5f08ec.pdf',
    },
    {
      id: 7,
      titulo: 'Conceptos Básicos de Hardware de Computadora',
      emisor: 'Cisco Networking Academy / SENATI',
      fecha: '19 May 2025',
      pdf: '/certificados/Computer_Hardware_Basics_certificate_1661085-senati-pe_4b1a5d44-173d-4eb5-a00d-e8da33b8a9e5.pdf',
    },
    {
      id: 8,
      titulo: 'Descubriendo el Emprendimiento',
      emisor: 'Cisco Networking Academy / SENATI',
      fecha: '22 Apr 2025',
      pdf: '/certificados/Discovering_Entrepreneurship_certificate_1661085-senati-pe_64fa99aa-e014-4f40-8c35-1f4746b3c7d6.pdf',
    },
    {
      id: 9,
      titulo: 'Introducción a la Ciberseguridad',
      emisor: 'Cisco Networking Academy / SENATI',
      fecha: '09 Apr 2025',
      pdf: '/certificados/Introduction_to_Cybersecurity_certificate_1661085-senati-pe_952f35f4-9866-4166-8508-e553c4b16ac5.pdf',
    },
    {
      id: 10,
      titulo: 'Create Digital Content, Communicate and Collaborate Online',
      emisor: 'Cisco Networking Academy / SENATI',
      fecha: '30 Mar 2025',
      pdf: '/certificados/Create_Digital_Content-_Communicate_and_Collaborate_Online_certificate_1661085-senati-pe_f0f03087-59b1-4421-88d2-553e85fcff5d.pdf',
    },
    {
      id: 11,
      titulo: 'Uso de Computadoras y Dispositivos Móviles',
      emisor: 'Cisco Networking Academy / SENATI',
      fecha: '20 Mar 2025',
      pdf: '/certificados/Using_Computer_and_Mobile_Devices_certificate_1661085-senati-pe_f1a8ff32-17b4-459a-9a33-6d529a60d059.pdf',
    },
    {
      id: 12,
      titulo: 'Conciencia Digital',
      emisor: 'Cisco Networking Academy / SENATI',
      fecha: '15 Mar 2025',
      pdf: '/certificados/Digital_Awareness_certificate_1661085-senati-pe_d5854e6d-b88f-4392-b6da-d00cd1416692.pdf',
    },
  ];

  const DownloadIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );

  return (
    <section id="educacion" className="educacion-section">
      <div className="educacion-container">

        {/* ── Section Header ── */}
        <h2 className="educacion-section-title">Educación &amp; Certificaciones</h2>
        <p className="educacion-section-sub">
          Mi trayectoria académica y los certificados oficiales que respaldan mis habilidades.
        </p>

        {/* ══════════════════════════════
            SUBSECCIÓN: EDUCACIÓN
        ══════════════════════════════ */}
        <div className="edu-block">
          <h3 className="edu-block-title">
            <span className="edu-block-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              </svg>
            </span>
            Educación
          </h3>

          <div className="timeline">
            {educacion.map((item, index) => (
              <div key={item.id} className="timeline-item">
                {/* Dot + line */}
                <div className="timeline-track">
                  <div className="timeline-dot">{item.icono}</div>
                  {index < educacion.length - 1 && <div className="timeline-line" />}
                </div>

                {/* Card */}
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <h4 className="timeline-institucion">{item.institucion}</h4>
                      <p className="timeline-titulo">{item.titulo}</p>
                      <span className="timeline-nivel">{item.nivel}</span>
                    </div>
                    <span className="timeline-periodo">{item.periodo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════
            SUBSECCIÓN: CERTIFICACIONES
        ══════════════════════════════ */}
        <div className="edu-block">
          <h3 className="edu-block-title">
            <span className="edu-block-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </span>
            Certificaciones Oficiales
            <span className="cert-count">{certificaciones.length}</span>
          </h3>

          <div className="cert-grid">
            {certificaciones.map((cert) => (
              <article key={cert.id} className="cert-card">
                {/* Accent bar */}
                <div className="cert-accent" />

                <div className="cert-body">
                  {/* Emisor badge */}
                  <span className="cert-emisor">{cert.emisor}</span>

                  {/* Título */}
                  <h4 className="cert-titulo">{cert.titulo}</h4>

                  {/* Footer: fecha + botón */}
                  <div className="cert-footer">
                    <span className="cert-fecha">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {cert.fecha}
                    </span>

                    <a
                      href={cert.pdf}
                      download
                      className="cert-download-btn"
                      aria-label={`Descargar certificado: ${cert.titulo}`}
                      title="Descargar PDF"
                    >
                      <DownloadIcon />
                      <span>Descargar PDF</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Educacion;
