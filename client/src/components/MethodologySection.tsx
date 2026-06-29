import { motion } from 'framer-motion';

export default function MethodologySection() {
  const phases = [
    {
      title: 'PRÉ-MISSÃO',
      period: 'AGOSTO - SETEMBRO 2026',
      items: [
        'Seleção de delegados',
        'Briefing executivo estratégico',
        'Preparação de materiais exclusivos',
        'Agendamento de reuniões B2B',
      ],
    },
    {
      title: 'DURANTE A MISSÃO',
      period: '15 - 23 OUTUBRO 2026',
      items: [
        'Visitas a hubs de inovação global',
        'Reuniões estratégicas de alto nível',
        'Networking com líderes locais',
        'Experiências culturais imersivas',
      ],
    },
    {
      title: 'PÓS-MISSÃO',
      period: 'OUTUBRO - DEZEMBRO 2026',
      items: [
        'Relatório de inteligência e oportunidades',
        'Follow-up assistido com contatos',
        'Implementação de parcerias estratégicas',
        'Avaliação de impacto e resultados',
      ],
    },
  ];

  return (
    <section className="section-bg py-24 md:py-32 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mono-label text-[#E31E24] mb-4">03 / METODOLOGIA</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            ESTRUTURA DE <span className="text-gradient-mb">IMERSÃO ESTRATÉGICA</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />

          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              className="relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="premium-card p-8 md:p-10 h-full group hover:bg-[#262626]">
                <div className="w-12 h-12 bg-[#E31E24] text-white rounded-full flex items-center justify-center font-black mb-8 group-hover:scale-110 transition-transform">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-[#E31E24] transition-colors">
                  {phase.title}
                </h3>
                <p className="mono-label text-[#E31E24]/60 mb-8 text-[10px]">{phase.period}</p>
                <ul className="space-y-4">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="text-[#E31E24] mt-1">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
