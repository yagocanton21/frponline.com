import React from 'react';
import { Lock, Smartphone, Shield, CheckCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '2rem 0' }}>
      
      {/* Header Conserta Smart */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          padding: '8px 16px', 
          borderRadius: '20px', 
          fontSize: '0.85rem', 
          letterSpacing: '1px',
          textTransform: 'uppercase',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          Conserta Smart • Assistência Especializada
        </span>
      </div>

      {/* Glow Effect Top Right */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '300px',
        height: '300px',
        background: 'var(--accent-blue-glow)',
        filter: 'blur(100px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Title Section */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 className="title-giant">
            DESBLOQUEIO <br/>
            DE CONTA <br/>
            <span className="text-blue">GOOGLE</span>
          </h1>
          
          <div className="subtitle-banner">
            <span>LIBERE SEU CELULAR E VOLTE A USAR SEM LIMITES!</span>
          </div>
        </div>

        {/* Content Section: Features & Mockups */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '2rem' }}>
          
          {/* List of Benefits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="icon-blue-circle">
                <Lock size={20} color="#fff" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>REMOVA A CONTA GOOGLE</strong>
                <span style={{ fontSize: '0.9rem', color: '#ccc' }}>DE FORMA SEGURA E EFICIENTE</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="icon-blue-circle">
                <Smartphone size={20} color="#fff" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>COMPATÍVEL COM DIVERSAS</strong>
                <span style={{ fontSize: '0.9rem', color: '#ccc' }}>MARCAS E MODELOS</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="icon-blue-circle">
                <Shield size={20} color="#fff" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>SERVIÇO RÁPIDO</strong>
                <span style={{ fontSize: '0.9rem', color: '#ccc' }}>E CONFIÁVEL</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="icon-blue-circle">
                <CheckCircle size={20} color="#fff" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>ATENDIMENTO</strong>
                <span style={{ fontSize: '0.9rem', color: '#ccc' }}>ESPECIALIZADO</span>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Box */}
        <div className="feature-box" style={{ marginBottom: '2rem' }}>
          <CheckCircle2 size={40} color="var(--accent-green)" style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ display: 'block', color: 'var(--accent-green)', fontSize: '1.2rem', textTransform: 'uppercase' }}>
              ACABE COM A TELA DE VERIFICAÇÃO!
            </strong>
            <span style={{ color: '#fff', fontSize: '0.9rem' }}>
              RECUPERE O ACESSO TOTAL AO SEU APARELHO.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
