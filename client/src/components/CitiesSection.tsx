import { motion } from 'framer-motion';

export default function CitiesSection() {
  const cities = [
    {
      name: 'Guangzhou',
      date: '15-17 Outubro',
      description: 'Porta de entrada para o mercado chinês, Guangzhou é um centro comercial dinâmico com inovação em manufatura e tecnologia.',
      highlights: ['Inovação', 'Manufatura', 'Comércio'],
      image: '/images/cities/guangzhou.webp',
    },
    {
      name: 'Shanghai',
      date: '18-20 Outubro',
      description: 'Metrópole futurista e centro financeiro global, Shanghai oferece oportunidades em tecnologia, finanças e sustentabilidade.',
      highlights: ['Finanças', 'Tecnologia', 'Sustentabilidade'],
      image: '/images/cities/shanghai.png',
    },
    {
      name: 'Tokyo',
      date: '21-23 Outubro',
      description: 'Capital da inovação asiática, Tokyo é referência em tecnologia, design e excelência operacional para negócios globais.',
      highlights: ['Inovação', 'Design', 'Tecnologia'],
      image: '/images/cities/tokyo.jpg',
    },
  ];

  return (
    <section id="destinos" className="section-bg-alt py-24 md:py-32 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-20 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mono-label text-[#E31E24] mb-4">02 / ROTEIRO</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            TRÊS CIDADES, <span className="text-gradient-mb">INFINITAS OPORTUNIDADES</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              className="premium-card overflow-hidden group flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Container */}
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-transparent opacity-60 md:opacity-0 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Content Container */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="mono-label text-[#E31E24] mb-2">{city.date}</div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 group-hover:text-[#E31E24] transition-colors">
                  {city.name}
                </h3>
                <p className="text-white/60 leading-relaxed mb-8">
                  {city.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {city.highlights.map((h) => (
                    <span key={h} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 text-white/80 rounded">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
