import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const scrollToInvestment = () => {
    const investmentSection = document.querySelector('[data-investment-section]');
    if (investmentSection) {
      investmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!heroRef.current) return;

    // Parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        gsap.to(heroRef.current, {
          y: scrollY * 0.4,
          duration: 0.5,
          overwrite: 'auto',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full scale-110"
          src="https://www.youtube.com/embed/kb1dXcf3QQs?autoplay=1&mute=1&loop=1&playlist=kb1dXcf3QQs&controls=0&modestbranding=1&rel=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{
            pointerEvents: 'none',
            opacity: 0.3,
            filter: 'grayscale(100%) contrast(120%)',
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-[#1A1A1A] z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="mono-label text-[#E31E24] tracking-[0.3em] font-bold text-xl md:text-2xl">
            Executive Mission 2026
          </span>
        </motion.div>

        <motion.h1
          ref={titleRef}
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-[0.9] tracking-tighter"
        >
          MISSÃO
          <br />
          <span className="text-gradient-mb">ÁSIA 2026</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
            Uma imersão executiva de alto impacto nos maiores polos de inovação e tecnologia do mundo.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button
            onClick={scrollToInvestment}
            className="btn-primary w-full md:w-auto"
          >
            Garanta sua Vaga
          </button>
          <button
            onClick={() => {
              const programacaoSection = document.querySelector('#programação');
              if (programacaoSection) {
                programacaoSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-outline w-full md:w-auto"
          >
            Ver Roteiro
          </button>
        </motion.div>

        {/* Info Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
        >
          {[
            { label: 'Grupo Limitado', value: '30 Vagas' },
            { label: 'Networking', value: 'Alto Nível' },
            { label: 'Conteúdo', value: 'IA & Inovação' },
            { label: 'Duração', value: '9 Dias' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-sm font-bold text-white">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
