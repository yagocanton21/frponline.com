import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 2rem',
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? 'rgba(3, 3, 5, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 168, 255, 0.1)' : '1px solid transparent',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>
        Conserta <span style={{ color: 'var(--accent-blue)' }}>Smart</span>
      </div>
      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li><a href="#services" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Serviços</a></li>
        <li><a href="#contato" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
