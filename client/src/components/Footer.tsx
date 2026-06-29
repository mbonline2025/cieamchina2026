import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10 py-20">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src="/logos/cieam.png" alt="CIEAM" className="h-16 w-auto" />
              <div className="w-px h-10 bg-white/20" />
              <img src="/logos/mb.png" alt="MB Consultoria" className="h-16 w-auto" />
            </div>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed mb-8">
              Câmara da Indústria, Energia, Agropecuária e Mineração do Amazonas. Liderando a transformação industrial e sustentável da região.
            </p>
            <div className="flex gap-4">
              {['LinkedIn', 'Instagram', 'WhatsApp'].map((social) => (
                <a key={social} href="#" className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-[#E31E24] transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">Navegação</h4>
            <ul className="space-y-4">
              {['Sobre', 'Destinos', 'Programação', 'Investimento'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-white/40 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">Contato</h4>
            <ul className="space-y-4">
              <li className="text-sm text-white/40">contact@cieam.org</li>
              <li className="text-sm text-white/40">+55 92 3121-2000</li>
              <li className="text-sm text-white/40">Manaus, Amazonas</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
            © 2026 CIEAM · Todos os direitos reservados
          </p>
          <div className="flex gap-8">
            {['Privacidade', 'Termos'].map((link) => (
              <a key={link} href="#" className="text-[10px] font-bold text-white/20 uppercase tracking-widest hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
