import React from 'react';

const Brands = () => {
  return (
    <section style={{ padding: '1rem 0 3rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Call to Action Button */}
        <div style={{ textAlign: 'center' }}>
          <a href="https://wa.me/5511969309108" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '40px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', lineHeight: 1.1 }}>
              <span style={{ fontSize: '1rem', fontWeight: 700 }}>FALE CONOSCO!</span>
              <span style={{ fontSize: '1.8rem' }}>(11) 96930-9108</span>
              <span style={{ fontSize: '0.7rem', fontWeight: 400, marginTop: '4px' }}>ATENDIMENTO RÁPIDO E 100% SEGURO!</span>
            </div>
          </a>
        </div>

        {/* Brands Section */}
        <div>
          <p style={{ fontSize: '0.8rem', color: '#ccc', textTransform: 'uppercase', marginBottom: '1rem' }}>
            TRABALHAMOS COM AS PRINCIPAIS MARCAS:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ background: '#004c99', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>SAMSUNG</span>
            <span style={{ background: '#333', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>MOTOROLA</span>
            <span style={{ background: '#ff6600', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>XIAOMI</span>
            <span style={{ background: '#cc0033', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>LG</span>
            <span style={{ background: '#ffcc00', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', color: '#000' }}>REALME</span>
            <span style={{ background: '#009933', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>OPPO</span>
            <span style={{ background: '#003399', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>NOKIA</span>
            <span style={{ background: '#222', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>E MUITO MAIS!</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Brands;
