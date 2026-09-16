import React from 'react';
import { Lock, Smartphone, Shield, CheckCircle, CheckCircle2, ShieldCheck, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'SAMSUNG',  bg: '#1428A0', text: '#fff' },
  { name: 'MOTOROLA', bg: '#5F5F5F', text: '#fff' },
  { name: 'XIAOMI',   bg: '#FF6900', text: '#fff' },
  { name: 'LG',       bg: '#A50034', text: '#fff' },
  { name: 'REALME',   bg: '#FFD700', text: '#000' },
  { name: 'OPPO',     bg: '#1D6C3B', text: '#fff' },
  { name: 'NOKIA',    bg: '#124191', text: '#fff' },
  { name: 'INFINIX',  bg: '#00A859', text: '#fff' },
];

const benefits = [
  { icon: <Lock size={16} color="#fff" />,         title: 'REMOVA A CONTA GOOGLE',   sub: 'DE FORMA SEGURA E EFICIENTE' },
  { icon: <Smartphone size={16} color="#fff" />,   title: 'COMPATÍVEL COM DIVERSAS',  sub: 'MARCAS E MODELOS'            },
  { icon: <Shield size={16} color="#fff" />,       title: 'SERVIÇO RÁPIDO',           sub: 'E CONFIÁVEL'                 },
  { icon: <CheckCircle size={16} color="#fff" />,  title: 'ATENDIMENTO',              sub: 'ESPECIALIZADO'               },
];

const Flyer = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'var(--font-body)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* ══════════════════════════════════════
          HERO: Badge + Title + Phones
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', padding: '2rem 2rem 1.5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45vw', height: '45vw', background: 'radial-gradient(circle, rgba(0,102,255,0.5) 0%, transparent 65%)', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '30vw', height: '30vw', background: 'radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Grid: LEFT (title + logo) | RIGHT (phones) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.8rem', alignItems: 'center', marginTop: '1.5rem' }}>

            {/* LEFT COLUMN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>



              {/* Title & Logo Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                
                {/* Title */}
                <div style={{ flex: 1 }}>
                  <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4.5vw, 2.8rem)', fontWeight: 900, lineHeight: 1.0, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    DESBLOQUEIO<br />DE CONTA<br />
                    <span style={{ color: 'var(--accent-blue)', textShadow: '0 0 25px rgba(0,102,255,0.9)' }}>GOOGLE</span>
                  </h1>
                  <div style={{ background: 'var(--accent-blue)', padding: '0.4rem 0.8rem', borderRadius: '5px', transform: 'skewX(-4deg)', display: 'inline-block', boxShadow: '0 4px 18px rgba(0,102,255,0.5)' }}>
                    <span style={{ transform: 'skewX(4deg)', display: 'inline-block', fontWeight: 800, fontSize: '0.55rem', textTransform: 'uppercase', lineHeight: 1.3 }}>
                      LIBERE SEU CELULAR E<br />VOLTE A USAR SEM LIMITES!
                    </span>
                  </div>
                </div>

                {/* Logo */}
                <div style={{ flexShrink: 0 }}>
                  <img src="/logo_gold.png" alt="FRP Online Logo" style={{ width: 'clamp(90px, 22vw, 150px)', borderRadius: '12px', mixBlendMode: 'screen', filter: 'drop-shadow(0 0 15px rgba(255,215,0,0.3))' }} />
                </div>

              </div>



            </div>

            {/* RIGHT COLUMN: phones */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '0.5rem', paddingTop: '0.2rem', flexWrap: 'wrap' }}>
              
              {/* Celular 1 - Google */}
              <div style={{ width: 'clamp(100px, 13vw, 130px)', height: 'clamp(190px, 24vw, 240px)', background: 'linear-gradient(160deg,#1a1a2e,#0d0d18)', borderRadius: '16px', border: '2px solid rgba(0,102,255,0.6)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', boxShadow: '0 0 30px rgba(0,102,255,0.3)', padding: '0.8rem 0.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ width: '38px', height: '38px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px', color: '#4285F4', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>G</div>
                <div style={{ fontSize: '0.5rem', color: '#ccc', lineHeight: 1.4 }}>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.6rem' }}>Google</div>
                  <div style={{ marginTop: '3px' }}>Verificar sua conta</div>
                  <div style={{ marginTop: '5px', borderTop: '1px solid #333', paddingTop: '5px', color: '#0af' }}>Saiba mais...</div>
                </div>
              </div>

              {/* Celular 2 - PayJoy */}
              <div style={{ width: 'clamp(105px, 14vw, 140px)', height: 'clamp(200px, 26vw, 260px)', background: '#ffffff', borderRadius: '16px', border: '3px solid #222', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '0.3rem', boxShadow: '0 0 30px rgba(0,200,80,0.2)', padding: '1.2rem 0.5rem 0.6rem', textAlign: 'center', position: 'relative', overflow: 'hidden', color: '#333' }}>
                
                {/* Status bar mock */}
                <div style={{ position: 'absolute', top: '5px', width: '90%', display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#000', fontWeight: 'bold' }}>
                  <span>12:00</span>
                  <div style={{ display: 'flex', gap: '2px' }}><span>LTE</span><span>🔋</span></div>
                </div>

                {/* PayJoy Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', background: 'linear-gradient(135deg, #7ab52f, #4a8019)', borderRadius: '50% 0 50% 50%' }}></div>
                  <div style={{ fontWeight: 900, fontSize: '0.8rem', color: '#555', letterSpacing: '-0.5px' }}>PAYJOY</div>
                </div>

                {/* Yellow Warning Box */}
                <div style={{ background: '#FFC107', borderRadius: '8px', padding: '0.5rem', width: '100%', display: 'flex', alignItems: 'center', gap: '0.4rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                  <Lock size={16} color="#000" />
                  <div style={{ fontSize: '0.4rem', textAlign: 'left', lineHeight: 1.2, fontWeight: 700 }}>
                    Pagamento atrasado.<br/>Efetue o pagamento.
                  </div>
                </div>

                <div style={{ fontSize: '0.4rem', color: '#666', marginTop: '0.3rem', lineHeight: 1.3 }}>
                  Um pagamento de <strong style={{ color: '#000' }}>R$ 156,00</strong> está pendente.
                </div>

                {/* Green Button */}
                <div style={{ background: '#1d7841', color: '#fff', width: '100%', padding: '0.4rem 0', borderRadius: '15px', fontSize: '0.5rem', fontWeight: 'bold', marginTop: '0.3rem' }}>
                  Fazer pagamento
                </div>

                {/* Progress */}
                <div style={{ width: '100%', textAlign: 'left', marginTop: '0.5rem' }}>
                  <div style={{ fontSize: '0.35rem', color: '#888', marginBottom: '2px' }}>Progresso do pagamento: 30%</div>
                  <div style={{ width: '100%', height: '4px', background: '#eee', borderRadius: '2px' }}>
                    <div style={{ width: '30%', height: '100%', background: '#7ab52f', borderRadius: '2px' }}></div>
                  </div>
                </div>

                {/* Bottom Buttons */}
                <div style={{ display: 'flex', gap: '0.3rem', width: '100%', marginTop: 'auto' }}>
                  <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '10px', padding: '0.3rem 0', fontSize: '0.4rem', fontWeight: 600 }}>Config.</div>
                  <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '10px', padding: '0.3rem 0', fontSize: '0.4rem', fontWeight: 600 }}>Ligar</div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════
          BRANDS — seção própria centralizada
      ══════════════════════════════════════ */}
      <section style={{ padding: '1.5rem 2rem 1rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.6rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
          TRABALHAMOS COM AS PRINCIPAIS MARCAS:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.4rem', width: '100%' }}>
          {brands.map(b => (
            <span key={b.name} style={{ background: b.bg, color: b.text, padding: '6px 0', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, textAlign: 'center', boxShadow: `0 3px 10px ${b.bg}66`, display: 'block' }}>
              {b.name}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          BENEFITS: 2×2 grid full width
      ══════════════════════════════════════ */}
      <section style={{ padding: '0 2rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.6rem' }}>
          {benefits.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 * idx }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '0.5rem' }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
              <div style={{ lineHeight: 1.15 }}>
                <strong style={{ display: 'block', fontSize: '0.65rem' }}>{item.title}</strong>
                <span style={{ fontSize: '0.55rem', color: '#bbb' }}>{item.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          HIGHLIGHT BOX + WHATSAPP CTA
      ══════════════════════════════════════ */}
      <section style={{ padding: '0 2rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', alignItems: 'stretch' }}>
          
          {/* Highlight Box */}
          <div style={{ border: '2px solid var(--accent-green)', borderRadius: '10px', padding: '0.8rem 1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(0,210,58,0.06)' }}>
            <CheckCircle2 size={24} color="var(--accent-green)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', color: 'var(--accent-green)', fontSize: '0.85rem', textTransform: 'uppercase', lineHeight: 1.2, marginBottom: '0.2rem' }}>ACABE COM A TELA DE VERIFICAÇÃO!</strong>
              <span style={{ color: '#ddd', fontSize: '0.65rem' }}>RECUPERE O ACESSO TOTAL.</span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/5511969309108" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', background: 'linear-gradient(135deg,#00d23a,#009928)', color: '#fff', padding: '1rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 900, boxShadow: '0 6px 24px rgba(0,210,58,0.4)', border: '2px solid rgba(255,255,255,0.2)', transition: 'transform 0.2s', width: '100%' }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '40px', flexShrink: 0 }} />
            <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.9 }}>FALE CONOSCO!</div>
              <div style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)', letterSpacing: '-0.5px' }}>(11) 96930-9108</div>
              <div style={{ fontSize: '0.6rem', opacity: 0.8 }}>ATENDIMENTO RÁPIDO E 100% SEGURO</div>
            </div>
          </a>

        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER BADGES
      ══════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid rgba(0,102,255,0.25)', padding: '1rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          {[
            { icon: <ShieldCheck size={24} color="var(--accent-blue)" />, title: 'SEGURANÇA', sub: 'DADOS PROTEGIDOS'   },
            { icon: <Zap size={24}         color="var(--accent-blue)" />, title: 'RAPIDEZ',   sub: 'SERVIÇO ÁGIL'       },
            { icon: <Award size={24}       color="var(--accent-blue)" />, title: 'GARANTIA',  sub: 'SATISFAÇÃO'         },
          ].map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {f.icon}
              <div style={{ lineHeight: 1.15 }}>
                <strong style={{ display: 'block', color: 'var(--accent-blue)', fontSize: '0.7rem' }}>{f.title}</strong>
                <span style={{ fontSize: '0.58rem', color: '#aaa' }}>{f.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/5511969309108" target="_blank" rel="noopener noreferrer" className="floating-wa" title="Fale Conosco">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      </div>
    </div>
  );
};

export default Flyer;
