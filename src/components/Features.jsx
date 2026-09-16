import React from 'react';
import { ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Clock size={32} color="#fff" />,
    title: 'Agilidade no Reparo',
    description: 'Sabemos que você não pode ficar sem seu celular. Muitos serviços são feitos na hora!'
  },
  {
    icon: <ShieldCheck size={32} color="#fff" />,
    title: 'Garantia de Qualidade',
    description: 'Oferecemos garantia em todos os nossos serviços e peças substituídas.'
  },
  {
    icon: <ThumbsUp size={32} color="#fff" />,
    title: 'Profissionais Qualificados',
    description: 'Nossa equipe técnica é altamente treinada para resolver qualquer problema.'
  }
];

const Features = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          textAlign: 'center'
        }}>
          {features.map((feat, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 20px rgba(0, 168, 255, 0.3)'
              }}>
                {feat.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginTop: '1rem' }}>{feat.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
