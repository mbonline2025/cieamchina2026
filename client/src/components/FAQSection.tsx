import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      pergunta: 'Quem pode participar da missão?',
      resposta: 'Executivos, empresários e líderes de empresas com interesse no Polo Industrial de Manaus. Preferência para associados do CIEAM, mas aberto a profissionais de qualquer setor que busque expansão internacional.'
    },
    {
      pergunta: 'As passagens aéreas e hospedagem estão incluídas?',
      resposta: 'Não. O investimento de R$ 47.800 cobre curadoria, coordenação em tempo integral, tradução com IA, relatórios executivos e seminário pós-missão. Passagens e hospedagem são de responsabilidade do participante.'
    },
    {
      pergunta: 'Como funciona a tradução durante as visitas?',
      resposta: 'Cada participante recebe tradução simultânea digital individualizada com IA através de earbuds. Funciona em tempo real durante todas as reuniões, visitas técnicas e eventos da programação.'
    },
    {
      pergunta: 'O que acontece após a missão?',
      resposta: 'Todos os participantes são convidados para o Seminário Institucional Pós-Missão em Manaus, onde será apresentado um dossiê completo com aprendizados, tendências mapeadas e oportunidades identificadas.'
    },
    {
      pergunta: 'Qual é o número mínimo de participantes?',
      resposta: 'Delegação mínima de 20 participantes. Atingindo 30 inscritos, o CIEAM contempla 2 vagas adicionais em cortesia.'
    },
  ];

  return (
    <section id="faq" className="section-bg-alt py-24 md:py-32">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mono-label text-[#E31E24] mb-4">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            DÚVIDAS <span className="text-gradient-mb">FREQUENTES</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="premium-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-sm md:text-base font-black text-white text-left uppercase tracking-tight">
                  {faq.pergunta}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-[#E31E24] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/5"
                  >
                    <p className="px-8 py-6 text-white/60 text-sm leading-relaxed">
                      {faq.resposta}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
