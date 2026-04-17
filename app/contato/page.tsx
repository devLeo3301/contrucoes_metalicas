"use client";

import { useState } from "react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    // Número fictício
    const whatsappNumber = "5500900000000"; 

    // Mapeamento fictício
    const serviceMap: { [key: string]: string } = {
      estruturas: "Estruturas Metálicas",
      calhas: "Calhas e Rufos",
      escadas: "Escadas e Mezaninos",
    };
    const selectedService = serviceMap[formData.service] || "Não especificado";

    const textMessage = `
🏗️ *Nova Solicitação de Orçamento*

*Nome/Empresa:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}

*Interesse Principal:* ${selectedService}

*Detalhes do Projeto:*
${formData.message || "Nenhum detalhe adicional fornecido."}
    `.trim();

    const encodedMessage = encodeURIComponent(textMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Header Premium */}
      <section className="bg-[#0F172A] pt-32 pb-40 text-center relative overflow-hidden border-b-4 border-[#F28C38]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D438A2A_1px,transparent_1px),linear-gradient(to_bottom,#1D438A2A_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-[#F28C38] font-bold tracking-widest uppercase text-xs mb-4 block">
            Atendimento Técnico
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Fale com nossa <span className="text-[#F28C38]">Equipe</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Pronto para tirar o seu projeto do papel? Nossa engenharia está à disposição para estruturar a melhor solução para sua obra.
          </p>
        </div>
      </section>

      {/* Seção Principal de Contato */}
      <section className="container mx-auto px-6 relative -mt-24 pb-24 z-20">
        <div className="bg-white rounded-sm shadow-2xl shadow-[#1D438A]/10 overflow-hidden flex flex-col lg:flex-row border border-slate-200">
          
          {/* Coluna de Informações (Esquerda) */}
          <div className="bg-[#1D438A] text-white p-10 lg:p-14 lg:w-1/3 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0F172A]/50 pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-10 text-[#F28C38]">Informações Diretas</h2>
              
              <div className="space-y-8">
                {/* Contato Fictício */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-sm">
                    <svg className="w-6 h-6 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">WhatsApp / Telefone</p>
                    <p className="text-slate-300 mt-1">(00) 00000-0000</p>
                    <p className="text-xs text-[#F28C38] mt-1 font-semibold uppercase tracking-wider">Atendimento Comercial</p>
                  </div>
                </div>

                {/* Email Fictício */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-sm">
                    <svg className="w-6 h-6 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">E-mail Corporativo</p>
                    <p className="text-slate-300 mt-1 break-all">contato@empresa.com.br</p>
                  </div>
                </div>

                {/* Localização Fictícia */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-sm">
                    <svg className="w-6 h-6 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Endereço</p>
                    <p className="text-slate-300 mt-1">Av. Exemplo Industrial, 1234</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Coluna do Formulário (Direita) */}
          <div className="p-10 lg:p-14 lg:w-2/3 bg-white">
            <div className="mb-10">
              <h3 className="text-3xl font-black text-[#0F172A] mb-2">Envie os detalhes da sua obra</h3>
              <p className="text-slate-500">Preencha os campos abaixo para que nossa equipe técnica possa analisar sua necessidade preliminarmente.</p>
            </div>
            
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nome / Empresa <span className="text-[#F28C38]">*</span></label>
                  <input required type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-[#1D438A] focus:bg-white transition-all shadow-sm" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">E-mail</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-[#1D438A] focus:bg-white transition-all shadow-sm" placeholder="email@empresa.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Seu WhatsApp <span className="text-[#F28C38]">*</span></label>
                  <input required type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-[#1D438A] focus:bg-white transition-all shadow-sm" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Serviço de Interesse <span className="text-[#F28C38]">*</span></label>
                  <select required id="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-[#1D438A] focus:bg-white transition-all text-slate-700 shadow-sm">
                    <option value="" disabled>Selecione uma opção...</option>
                    <option value="estruturas">Estruturas Metálicas</option>
                    <option value="calhas">Calhas e Rufos</option>
                    <option value="escadas">Escadas e Mezaninos</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Detalhes (Metragem, local, etc.)</label>
                <textarea id="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-[#1D438A] focus:bg-white transition-all resize-none shadow-sm" placeholder="Conte-nos brevemente sobre a sua necessidade técnica..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#F28C38] hover:bg-[#d97d32] text-white font-black text-lg py-4 rounded-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/20 flex items-center justify-center gap-3 mt-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Enviar via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}