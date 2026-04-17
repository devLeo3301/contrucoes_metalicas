"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Número fictício para o template
    const whatsappNumber = "5500900000000"; 
    
    // Mapeamento de serviços
    const serviceMap: { [key: string]: string } = {
      estruturas: "Estruturas Metálicas",
      calhas: "Calhas e Rufos",
      escadas: "Escadas e Mezaninos",
    };
    const selectedService = serviceMap[formData.service] || "Não especificado";

    const textMessage = `
🏗️ *Nova Solicitação de Orçamento - Site*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Serviço de Interesse:* ${selectedService}

*Detalhes do Projeto:*
${formData.message || "Nenhum detalhe adicional fornecido."}
    `.trim();

    const encodedMessage = encodeURIComponent(textMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* 1. HERO SECTION PREMIUM */}
      <section className="relative h-[90vh] min-h-[650px] w-full flex items-center bg-[#0F172A] overflow-hidden">
        {/* Padrão de Fundo (Grid Sutil) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D438A1A_1px,transparent_1px),linear-gradient(to_bottom,#1D438A1A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1D438A]/20 to-transparent skew-x-12 translate-x-20" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest text-[#F28C38] uppercase border border-[#F28C38]/30 bg-[#F28C38]/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#F28C38] animate-pulse" />
                Construções Metálicas
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Força e <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F28C38] to-orange-300">
                  Precisão em Aço.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed font-light">
                Estruturas sob medida, calhas sem emendas e mezaninos de alto padrão. Execução impecável para obras residenciais e industriais.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#F28C38] hover:bg-[#d97d32] text-white px-8 py-4 rounded-sm font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/20 flex items-center gap-2"
              >
                Fazer Orçamento
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative w-full h-[550px] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] via-transparent to-[#1D438A]/30 z-10" />
              {/* Espaço para foto real */}
              <div className="flex items-center justify-center h-full bg-slate-800 text-slate-500 font-mono text-sm">
                 [ Inserir Foto de Estrutura Metálica ]
              </div>
            </div>
            {/* Elementos Decorativos */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1D438A] to-transparent opacity-60 blur-xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#F28C38] rounded-sm -z-10" />
          </div>
        </div>
      </section>

      {/* 2. TRUST BANNER (Estatísticas rápidas) */}
      <section className="bg-[#1D438A] py-8 border-y border-white/10 relative z-20 -mt-10 mx-6 md:mx-auto md:w-[90%] lg:w-[80%] rounded-sm shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/20">
          <div className="px-4">
            <p className="text-3xl font-black text-white">100%</p>
            <p className="text-xs text-[#F28C38] uppercase tracking-wider font-bold mt-1">Aço Certificado</p>
          </div>
          <div className="px-4">
            <p className="text-3xl font-black text-white">6m</p>
            <p className="text-xs text-[#F28C38] uppercase tracking-wider font-bold mt-1">Peças s/ Emenda</p>
          </div>
          <div className="px-4">
            <p className="text-3xl font-black text-white">+10</p>
            <p className="text-xs text-[#F28C38] uppercase tracking-wider font-bold mt-1">Anos de Mercado</p>
          </div>
          <div className="px-4">
            <p className="text-3xl font-black text-white">Top</p>
            <p className="text-xs text-[#F28C38] uppercase tracking-wider font-bold mt-1">Acabamento</p>
          </div>
        </div>
      </section>

      {/* 3. SOBRE A EMPRESA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] rounded-sm overflow-hidden bg-slate-100 group">
             <div className="absolute inset-0 bg-[#1D438A]/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
             <div className="flex items-center justify-center h-full text-slate-400 font-mono text-sm border-2 border-dashed border-slate-300 m-4 rounded-sm">
                [ Inserir Foto da Equipe ou Obra ]
             </div>
          </div>
          <div>
            <h2 className="text-[#F28C38] font-bold tracking-widest uppercase text-sm mb-4">Sobre Nós</h2>
            <h3 className="text-4xl font-black text-[#0F172A] mb-6 leading-tight">
              A base forte que o seu projeto precisa.
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Com sede na excelência técnica, atuamos na fabricação e montagem de estruturas metálicas de alta performance. Nosso diferencial está na atenção aos detalhes e no uso de tecnologia de ponta.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Trabalhamos com equipamentos capazes de dobrar e perfilar peças de até <strong>6 metros contínuos</strong>. Isso significa menos emendas, maior resistência estrutural e vedação perfeita para o seu telhado ou galpão.
            </p>
            <div className="flex items-center gap-4 border-l-4 border-[#1D438A] pl-4">
              <div className="font-bold text-[#0F172A]">
                <p className="text-lg">Compromisso com Qualidade</p>
                <p className="text-sm text-[#F28C38] font-medium">Engenharia de Resultados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOSSOS SERVIÇOS (Design Premium) */}
      <section id="servicos" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#F28C38] font-bold tracking-widest uppercase text-sm mb-4">Especialidades</h2>
            <p className="text-4xl md:text-5xl font-black text-[#1D438A]">Soluções em Construção Metálica</p>
            <div className="w-24 h-1 bg-[#F28C38] mx-auto mt-8 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Serviço 1 */}
            <div className="group relative bg-white p-10 border border-slate-200 rounded-sm hover:border-[#1D438A] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1D438A]/10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-[#F28C38]/10 transition-colors" />
              <div className="w-14 h-14 bg-[#1D438A] text-white rounded-sm flex items-center justify-center text-2xl mb-8 group-hover:bg-[#F28C38] transition-colors shadow-md">
                🏗️
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Estruturas Metálicas</h3>
              <p className="text-slate-600 leading-relaxed">
                Projetos completos para todos os fins. Construções robustas, seguras e sob medida para necessidades residenciais, comerciais e industriais.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="group relative bg-white p-10 border border-slate-200 rounded-sm hover:border-[#1D438A] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1D438A]/10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-[#F28C38]/10 transition-colors" />
              <div className="w-14 h-14 bg-[#1D438A] text-white rounded-sm flex items-center justify-center text-2xl mb-8 group-hover:bg-[#F28C38] transition-colors shadow-md">
                🏠
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Calhas e Rufos</h3>
              <p className="text-slate-600 leading-relaxed">
                Produção de calhas, rufos e pingadeiras com peças de até <strong>6 MT</strong>. A ausência de emendas garante máxima vedação contra infiltrações.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="group relative bg-white p-10 border border-slate-200 rounded-sm hover:border-[#1D438A] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1D438A]/10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-[#F28C38]/10 transition-colors" />
              <div className="w-14 h-14 bg-[#1D438A] text-white rounded-sm flex items-center justify-center text-2xl mb-8 group-hover:bg-[#F28C38] transition-colors shadow-md">
                🪜
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Escadas e Mezaninos</h3>
              <p className="text-slate-600 leading-relaxed">
                Otimização inteligente de espaços industriais e comerciais. Estruturas seguras com acabamento estético de alto padrão.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. GALERIA (Visual Proof) */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-[#F28C38] font-bold tracking-widest uppercase text-sm mb-4">Portfólio</h2>
              <p className="text-4xl font-black">Qualidade entregue na prática.</p>
            </div>
            <p className="text-slate-400 max-w-sm">Veja o acabamento e a grandiosidade das estruturas montadas pela nossa equipe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative h-72 bg-slate-800 rounded-sm overflow-hidden group cursor-pointer border border-slate-700 hover:border-[#F28C38] transition-colors">
                {/* Overlay de Hover */}
                <div className="absolute inset-0 bg-[#1D438A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Ver Projeto
                  </span>
                </div>
                <div className="flex items-center justify-center h-full text-slate-600 font-mono text-sm group-hover:scale-110 transition-transform duration-700">
                   [ Imagem da Obra {item} ]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FORMULÁRIO DE CONVERSÃO / ORÇAMENTO (Atualizado com dados fictícios) */}
      <section id="orcamento" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-5 gap-16 items-center">
          
          {/* Coluna da Esquerda (Texto + Info) */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6 leading-tight">
                Vamos construir o seu <span className="text-[#1D438A]">futuro</span> juntos.
              </h2>
              <p className="text-lg text-slate-600">
                Entre em contato com nossa equipe técnica para um diagnóstico preciso e um orçamento transparente da sua obra.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-sm border border-slate-200 space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white p-2 rounded-sm shadow-sm border border-slate-100"><svg className="w-5 h-5 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
                <div>
                  <p className="font-bold text-[#0F172A]">Atendimento WhatsApp</p>
                  <p className="text-slate-600">(00) 00000-0000</p>
                  <p className="text-xs text-slate-400 mt-1">Atendimento Comercial</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white p-2 rounded-sm shadow-sm border border-slate-100"><svg className="w-5 h-5 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                <div>
                  <p className="font-bold text-[#0F172A]">E-mail corporativo</p>
                  <p className="text-slate-600 break-all">contato@empresa.com.br</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita (Formulário Dark) */}
          <div className="lg:col-span-3 bg-[#1D438A] p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Solicite sua cotação expressa</h3>
            
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Nome / Empresa <span className="text-[#F28C38]">*</span></label>
                  <input required type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-[#0F172A]/50 border border-white/10 text-white rounded-sm focus:outline-none focus:border-[#F28C38] focus:bg-[#0F172A] transition-all" placeholder="Responsável" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Seu WhatsApp <span className="text-[#F28C38]">*</span></label>
                  <input required type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-[#0F172A]/50 border border-white/10 text-white rounded-sm focus:outline-none focus:border-[#F28C38] focus:bg-[#0F172A] transition-all" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Serviço Desejado <span className="text-[#F28C38]">*</span></label>
                <select required id="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-[#0F172A]/50 border border-white/10 text-white rounded-sm focus:outline-none focus:border-[#F28C38] focus:bg-[#0F172A] transition-all [&>option]:bg-[#0F172A]">
                  <option value="" disabled>Selecione a especialidade...</option>
                  <option value="estruturas">Estruturas Metálicas</option>
                  <option value="calhas">Calhas / Rufos / Pingadeiras (6 MT)</option>
                  <option value="escadas">Escadas e Mezaninos</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Detalhes (Metragem, local, etc.)</label>
                <textarea id="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 bg-[#0F172A]/50 border border-white/10 text-white rounded-sm focus:outline-none focus:border-[#F28C38] focus:bg-[#0F172A] transition-all resize-none" placeholder="Conte-nos brevemente sobre a obra..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#F28C38] hover:bg-orange-500 text-white font-black py-4 rounded-sm transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-3 text-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                Enviar p/ Engenharia
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#0F172A] text-slate-400 py-12 border-t border-slate-800 text-center md:text-left">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
             <span className="text-2xl font-black text-white tracking-tight">Empresa</span>
             <span className="text-sm">Construções Metálicas</span>
          </div>
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Empresa. Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}