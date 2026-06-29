import { motion } from 'framer-motion';

export default function AboutSection() {
  const stats = [
    { value: '46', label: 'Anos', detail: 'Fundada em 1979' },
    { value: '500+', label: 'Indústrias', detail: 'Polo Industrial de Manaus' },
    { value: '3', label: 'Cidades', detail: 'Guangzhou · Shanghai · Tokyo' },
    { value: '9', label: 'Dias', detail: 'Imersão completa' },
  ];

  return (
    <section id="sobre" className="section-bg py-24 md:py-32 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mono-label text-[#E31E24] mb-6">01 / SOBRE A MISSÃO</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              PROTAGONISTA DA <span className="text-gradient-mb">INDÚSTRIA DO AMAZONAS</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              A CIEAM é uma entidade civil de direito privado que representa as indústrias instaladas no Polo Industrial de Manaus — vetor regional para o desenvolvimento do Brasil.
            </p>
            <div className="flex items-center gap-4 p-6 bg-white/5 border-l-4 border-[#E31E24] rounded-r-lg">
              <p className="text-white/90 font-medium italic">
                "Única entidade amazonense com assento no Conselho Nacional de Desenvolvimento Industrial (CNDI) do MDIC."
              </p>
            </div>
          </motion.div>

          {/* Right Content / Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="premium-card p-8 md:p-12 border-white/10 bg-gradient-to-br from-[#262626] to-[#1A1A1A]">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
                A PORTA PARA OS ECOSSISTEMAS DE INOVAÇÃO DA ÁSIA
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                Uma delegação estratégica para executivos brasileiros que buscam transformação global — conectando a indústria do Amazonas aos maiores centros de tecnologia e negócios do mundo.
              </p>
              <ul className="space-y-4">
                {[
                  'Curadoria executiva exclusiva',
                  'Networking de alto nível',
                  'Acesso a ecossistemas restritos',
                  'Conteúdo prático sobre IA e Inovação'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold text-white/80">
                    <span className="w-1.5 h-1.5 bg-[#E31E24] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="premium-card p-8 text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-black text-white mb-2 group-hover:text-[#E31E24] transition-colors">
                {stat.value}
              </div>
              <div className="mono-label text-[#E31E24] mb-2">{stat.label}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
