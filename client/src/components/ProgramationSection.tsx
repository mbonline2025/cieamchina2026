import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function ProgramationSection() {
  const schedule = [
    {
      dia: '15/10',
      local: 'Guangzhou',
      titulo: 'Chegada & Briefing',
      atividades: [
        'Check-in no hotel 5 estrelas',
        'Briefing executivo da missão',
        'Preparação para Canton Fair',
        'Jantar de integração com delegação'
      ]
    },
    {
      dia: '16-17/10',
      local: 'Guangzhou',
      titulo: 'Canton Fair & B2B',
      atividades: [
        'Visita aos pavilhões de eletrônicos',
        'Encontros agendados com fabricantes estratégicos',
        'Networking com fornecedores do setor químico',
        'Workshop: Tendências de manufatura na China'
      ]
    },
    {
      dia: '18/10',
      local: 'Guangzhou → Shanghai',
      titulo: 'Deslocamento Estratégico',
      atividades: [
        'Voo doméstico direto (2h)',
        'Check-in e descanso',
        'Dinner informal com mentores locais'
      ]
    },
    {
      dia: '19-20/10',
      local: 'Shanghai',
      titulo: 'Indústria 4.0 & IA',
      atividades: [
        'Visitas técnicas a fábricas smart',
        'Centros de pesquisa em IA e machine learning',
        'Encontros com startups de inovação',
        'Sessão executiva: Transformação digital'
      ]
    },
    {
      dia: '21/10',
      local: 'Shanghai → Tokyo',
      titulo: 'Ponte para Japão',
      atividades: [
        'Voo doméstico Shanghai-Tokyo (3h)',
        'Check-in em hotel premium',
        'Briefing cultural Japão'
      ]
    },
    {
      dia: '22-23/10',
      local: 'Tokyo',
      titulo: 'Automação & Inovação',
      atividades: [
        'Visitas a fábricas de robótica avançada',
        'Institutos de tecnologia nipônica',
        'Workshop final: Lições para o PIM',
        'Encerramento e networking final'
      ]
    }
  ];

  return (
    <section id="programação" className="section-bg-alt py-24 md:py-32">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mono-label text-[#E31E24] mb-4">04 / PROGRAMAÇÃO</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            O ROTEIRO DA <span className="text-gradient-mb">INOVAÇÃO</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mt-6">
            Cada dia foi meticulosamente curado para expor você aos maiores centros de tecnologia e manufatura de ponta do mundo.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

          {/* Events */}
          <div className="space-y-12 md:space-y-24">
            {schedule.map((event, index) => (
              <motion.div
                key={event.dia}
                className={`relative flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-[#E31E24] border-4 border-[#1A1A1A] z-10" />

                {/* Content */}
                <div className="md:w-1/2 ml-8 md:ml-0 md:px-12">
                  <div className="premium-card p-8 md:p-10 group hover:border-[#E31E24]">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="mono-label text-[#E31E24] mb-2">{event.dia}</div>
                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#E31E24] transition-colors">
                          {event.titulo}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest">
                          <MapPin size={14} className="text-[#E31E24]" />
                          {event.local}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-4 border-t border-white/5 pt-6">
                      {event.atividades.map((atividade, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                          <span className="text-[#E31E24] font-bold">✦</span>
                          {atividade}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
