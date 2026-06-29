import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertCircle, Mail, User, Building2, Phone } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  cargo?: string;
  phone?: string;
}

export default function InvestmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    cargo: '',
    phone: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const included = [
    'Curadoria estratégica internacional',
    'Coordenação presencial full-time',
    'Sessões executivas de alinhamento',
    'Tradução simultânea digital com IA',
    'Relatórios executivos diários',
    'Seminário Institucional Pós-Missão',
    'Cobertura fotográfica e vídeo',
    'Revista exclusiva do conteúdo',
  ];

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name': return !value.trim() ? 'Nome é obrigatório' : undefined;
      case 'email': return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email inválido' : undefined;
      case 'phone': return value.replace(/\D/g, '').length < 10 ? 'Telefone inválido' : undefined;
      default: return !value.trim() ? 'Campo obrigatório' : undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="investimento" className="section-bg py-24 md:py-32" data-investment-section>
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mono-label text-[#E31E24] mb-6">05 / INVESTIMENTO</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              INVISTA NO SEU <span className="text-gradient-mb">FUTURO ESTRATÉGICO</span>
            </h2>
            
            <div className="mb-12">
              <div className="text-6xl font-black text-white mb-2">R$ 47.800</div>
              <p className="text-xl text-white/40 uppercase tracking-widest font-bold">por participante</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Check size={16} className="text-[#E31E24]" /> Incluso
                </h4>
                <ul className="space-y-4">
                  {included.map((item) => (
                    <li key={item} className="text-sm text-white/60 flex items-center gap-3">
                      <span className="w-1 h-1 bg-[#E31E24] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-black text-white/40 uppercase tracking-widest mb-6">Não Incluso</h4>
                <ul className="space-y-4">
                  {['Passagens aéreas', 'Hospedagem', 'Seguro viagem'].map((item) => (
                    <li key={item} className="text-sm text-white/30 flex items-center gap-3">
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Content / Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="premium-card p-8 md:p-12 border-white/10"
          >
            <h3 className="text-2xl font-black text-white mb-2">GARANTA SUA VAGA</h3>
            <p className="text-white/40 text-sm mb-8 uppercase tracking-widest font-bold">Vagas limitadas a 30 participantes</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {[
                  { name: 'name', label: 'Nome Completo', icon: User, placeholder: 'Seu nome' },
                  { name: 'email', label: 'Email Corporativo', icon: Mail, placeholder: 'email@empresa.com' },
                  { name: 'company', label: 'Empresa', icon: Building2, placeholder: 'Nome da empresa' },
                  { name: 'phone', label: 'WhatsApp', icon: Phone, placeholder: '(00) 00000-0000' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">
                      {field.label}
                    </label>
                    <div className="relative">
                      <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                      <input
                        type="text"
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-white/5 border ${errors[field.name as keyof FormErrors] ? 'border-[#E31E24]' : 'border-white/10'} rounded-lg py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-[#E31E24] transition-all`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button type="submit" className="btn-primary w-full py-5 text-sm">
                Enviar Inscrição
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-500 text-sm font-bold"
                  >
                    <Check size={18} /> Inscrição enviada com sucesso!
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
