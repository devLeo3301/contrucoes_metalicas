import Link from "next/link";
import Image from "next/image";

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Cabeçalho da Página Interna */}
      <section className="bg-[#0F172A] pt-32 pb-20 text-center relative overflow-hidden border-b-4 border-[#F28C38]">
        {/* Detalhe de fundo - Grade técnica sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D438A2A_1px,transparent_1px),linear-gradient(to_bottom,#1D438A2A_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-[#F28C38] font-bold tracking-widest uppercase text-xs mb-4 block">
            Nossa Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Serviços de <span className="text-[#F28C38]">Excelência</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Especialistas em aço. Executamos desde a fundação estrutural até os acabamentos de cobertura com precisão milimétrica e materiais de usinas certificadas.
          </p>
        </div>
      </section>

      {/* Conteúdo Detalhado dos Serviços */}
      <section className="py-24 space-y-32">
        
        {/* SERVIÇO 1: Estruturas Metálicas */}
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-slate-100 rounded-sm -z-10 group-hover:bg-[#1D438A]/5 transition-colors duration-500" />
              <div className="aspect-video bg-slate-800 rounded-sm overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent z-10 pointer-events-none" />
                <Image 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                  alt="Estruturas Metálicas" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F28C38] -z-20 rounded-sm" />
            </div>
            
            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#1D438A] text-white rounded-sm flex items-center justify-center text-2xl shadow-md">
                🏗️
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight">
                Estruturas Metálicas p/ todos os fins
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                A espinha dorsal de qualquer grande projeto. Desenvolvemos e montamos estruturas metálicas que suportam cargas extremas com vãos livres otimizados, ideais para indústrias, comércios e residências modernas.
              </p>
              <ul className="space-y-3 pt-4">
                {['Galpões industriais e centros logísticos.', 'Coberturas para quadras e estacionamentos.', 'Rapidez na montagem e zero desperdício de material.'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#F28C38] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Linha Divisória Elegante */}
        <div className="container mx-auto px-6"><div className="w-full h-px bg-slate-200" /></div>

        {/* SERVIÇO 2: Calhas e Rufos (Invertido) */}
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Texto vem primeiro em telas grandes (ordem invertida) */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="w-14 h-14 bg-[#1D438A] text-white rounded-sm flex items-center justify-center text-2xl shadow-md">
                🏠
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight">
                Calhas, Rufos e Pingadeiras c/ 6 MT
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Nosso grande diferencial: trabalhamos com maquinário capaz de perfilar peças contínuas de até 6 metros de comprimento. Isso reduz drasticamente o número de emendas no telhado.
              </p>
              <ul className="space-y-3 pt-4">
                {['Risco quase nulo de vazamentos e infiltrações.', 'Acabamento estético contínuo e mais limpo.', 'Fabricação sob medida para a inclinação exata da sua obra.'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#F28C38] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-slate-100 rounded-sm -z-10 group-hover:bg-[#1D438A]/5 transition-colors duration-500" />
              <div className="aspect-video bg-slate-800 rounded-sm overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent z-10 pointer-events-none" />
                <Image 
                  src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=1200&q=80" 
                  alt="Coberturas e Telhados" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Detalhe Laranja à esquerda agora */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#F28C38] -z-20 rounded-sm" />
            </div>
            
          </div>
        </div>

        {/* Linha Divisória Elegante */}
        <div className="container mx-auto px-6"><div className="w-full h-px bg-slate-200" /></div>

        {/* SERVIÇO 3: Escadas e Mezaninos */}
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-slate-100 rounded-sm -z-10 group-hover:bg-[#1D438A]/5 transition-colors duration-500" />
              <div className="aspect-video bg-slate-800 rounded-sm overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent z-10 pointer-events-none" />
                <Image 
                  src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&w=1200&q=80" 
                  alt="Escadas e Mezaninos" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F28C38] -z-20 rounded-sm" />
            </div>
            
            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#1D438A] text-white rounded-sm flex items-center justify-center text-2xl shadow-md">
                🪜
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight">
                Escadas e Mezaninos
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Multiplique o espaço útil da sua empresa. Nossos mezaninos e escadas metálicas combinam cálculo estrutural rigoroso com estética industrial premium, entregando segurança sem abrir mão do design.
              </p>
              <ul className="space-y-3 pt-4">
                {['Capacidade de carga adequada para estoque ou escritórios.', 'Escadas retas, caracol ou com patamar.', 'Instalação ágil e sem a sujeira da alvenaria tradicional.'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#F28C38] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* CTA Final (Call to Action) */}
      <section className="bg-[#1D438A] py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#F28C38] rounded-full blur-[200px] opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Sua obra precisa de especialistas.
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Garantimos o melhor custo-benefício com materiais de primeira linha e equipe técnica qualificada.
          </p>
          <Link 
            href="/contato" 
            className="inline-flex items-center gap-3 bg-[#F28C38] hover:bg-orange-500 text-white px-10 py-5 rounded-sm font-black text-lg transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            Falar com a Engenharia
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>
      </section>

    </div>
  );
}