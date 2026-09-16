import React from 'react';
import { ShieldCheck, Zap, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid rgba(0, 102, 255, 0.3)', padding: '1.5rem 0', backgroundColor: '#050505' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <ShieldCheck size={32} color="var(--accent-blue)" />
          <div style={{ lineHeight: 1.2 }}>
            <strong style={{ color: 'var(--accent-blue)', display: 'block', fontSize: '0.9rem' }}>SEGURANÇA</strong>
            <span style={{ fontSize: '0.7rem', color: '#ccc' }}>SEUS DADOS<br/>PROTEGIDOS</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <Zap size={32} color="var(--accent-blue)" />
          <div style={{ lineHeight: 1.2 }}>
            <strong style={{ color: 'var(--accent-blue)', display: 'block', fontSize: '0.9rem' }}>RAPIDEZ</strong>
            <span style={{ fontSize: '0.7rem', color: '#ccc' }}>SERVIÇO ÁGIL<br/>E EFICIENTE</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <Award size={32} color="var(--accent-blue)" />
          <div style={{ lineHeight: 1.2 }}>
            <strong style={{ color: 'var(--accent-blue)', display: 'block', fontSize: '0.9rem' }}>GARANTIA</strong>
            <span style={{ fontSize: '0.7rem', color: '#ccc' }}>SATISFAÇÃO<br/>GARANTIDA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
