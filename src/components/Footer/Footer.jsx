import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      label: 'Gmail',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=angel1120171@hotmail.com&su=Propuesta%20Laboral%20-%20Desarrollador%20Web',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://web.facebook.com/profile.php?id=100016706585167',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/AngelOrdaya-Dev',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/angel-ordaya-58a72b3a2/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ---- Top Row ---- */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="logo-accent">Angel</span> Ordaya
            </span>
            <p className="footer-tagline">
              Desarrollador Web Full-Stack · Lima, Perú
            </p>
          </div>

          {/* Social Icons */}
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-icon"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ---- Divider ---- */}
        <div className="footer-divider" />

        {/* ---- Bottom Row ---- */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Angel Ordaya. Todos los derechos reservados.
          </p>
          <p className="footer-stack">
            Construido con <span className="stack-tag">React</span> &amp; <span className="stack-tag">Vite</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
