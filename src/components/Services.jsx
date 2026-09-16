import React from 'react';
import { Smartphone, Battery, Cpu, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: <Smartphone size={40} color="var(--accent-blue)" />,
    title: 'Troca de Tela',
    description: 'Substituição de displays quebrados ou com falhas, usando peças originais ou de primeira linha.'
  },
  {
    icon: <Battery size={40} color="var(--accent-blue)" />,
    title: 'Troca de Bateria',
    description: 'Bateria descarregando rápido? Trocamos por uma nova com garantia de durabilidade.'
  },
  {
    icon: <Cpu size={40} color="var(--accent-blue)" />,
    title: 'Reparo em Placa',
    description: 'Consertos complexos em nível de componente para salvar aparelhos condenados.'
  },
  {
    icon: <Droplets size={40} color="var(--accent-blue)" />,
    title: 'Desoxidação',
    description: 'Seu celular caiu na água? Temos equipamentos especiais para limpar e recuperar.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-color-light)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2>Nossos Serviços</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Oferecemos soluções completas para o seu dispositivo, com rapidez e eficiência.
          </p>
        </motion.div>

        <div className="grid-3">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              className="card" 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(0, 168, 255, 0.2)' }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}
            >
              <div style={{ padding: '1rem', backgroundColor: 'rgba(0, 168, 255, 0.1)', borderRadius: '12px' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
