"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Reintroduzido para usar imagens reais no portfólio

// Dados simulados genéricos
// Dados simulados genéricos com imagens verificadas e estáveis
const portfolio = [
  { 
    id: 1, 
    title: "Complexo Industrial C-12", 
    category: "Estruturas Metálicas", 
    location: "São Paulo, SP",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 2, 
    title: "Mezanino Corporativo Tech", 
    category: "Escadas e Mezaninos", 
    location: "Campinas, MG",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 3, 
    title: "Sistema de Cobertura Logística", 
    category: "Calhas e Rufos", 
    location: "Guarulhos, SP",
    image: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 4, 
    title: "Cobertura Metálica em Arco", 
    category: "Estruturas Metálicas", 
    location: "Curitiba, SP",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 5, 
    title: "Escada Industrial de Acesso", 
    category: "Escadas e Mezaninos", 
    location: "Rio de Janeiro, RJ",
    image: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 6, 
    title: "Isolamento e Pingadeiras (Galpão B)", 
    category: "Calhas e Rufos", 
    location: "Joinville, PR",
    image: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=800&q=80"
  },
];

const categories = ["Todos", "Estruturas Metálicas", "Calhas e Rufos", "Escadas e Mezaninos"];

export default function ObrasPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  // Filtra as obras com base na categoria selecionada
  const filteredPortfolio = activeFilter === "Todos" 
    ? portfolio 
    : portfolio.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* 1. Header da Página Interna */}
      <section className="bg-[#0F172A] pt-32 pb-20 text-center relative overflow-hidden border-b-4 border-[#F28C38]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D438A2A_1px,transparent_1px),linear-gradient(to_bottom,#1D438A2A_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-[#F28C38] font-bold tracking-widest uppercase text-xs mb-4 block">
            Galeria de Projetos
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Nosso <span className="text-[#F28C38]">Portfólio</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A qualidade da nossa engenharia comprovada na prática. Explore estruturas entregues com precisão e acabamento impecável.
          </p>
        </div>
      </section>

      {/* 2. Grid de Projetos com Filtro */}
      <section className="py-16 min-h-[600px]">
        <div className="container mx-auto px-6">
          
          {/* Sistema de Filtro (Tabs) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#1D438A] text-white shadow-lg shadow-blue-900/20"
                    : "bg-white text-slate-500 border border-slate-200 hover:border-[#1D438A] hover:text-[#1D438A]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de Obras Animado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div 
                key={item.id} 
                className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-2xl hover:shadow-[#1D438A]/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col"
              >
                {/* Espaço da Imagem */}
                <div className="relative w-full aspect-[4/3] bg-slate-800 overflow-hidden">
                  
                  {/* Imagem do Projeto (Unsplash) */}
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay Escuro com Botão no Hover */}
                  <div className="absolute inset-0 bg-[#0F172A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white font-bold border-2 border-white px-8 py-3 rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      Ver Detalhes
                    </span>
                  </div>

                  {/* Tag Flutuante da Categoria */}
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest text-[#F28C38] shadow-sm">
                    {item.category}
                  </div>
                </div>

                {/* Informações do Projeto */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#1D438A] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <p className="text-sm text-slate-500 flex items-center gap-2 font-medium">
                      <svg className="w-4 h-4 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback caso um filtro fique vazio */}
          {filteredPortfolio.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p className="text-lg">Nenhum projeto encontrado para esta categoria.</p>
            </div>
          )}

        </div>
      </section>

      {/* 3. CTA Final */}
      <section className="bg-[#1D438A] py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#F28C38] rounded-full blur-[200px] opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            O próximo case de sucesso pode ser o seu.
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Traga seu projeto para a nossa equipe. Do desenho estrutural à montagem final, garantimos excelência.
          </p>
          <Link 
            href="/contato" 
            className="inline-flex items-center gap-3 bg-[#F28C38] hover:bg-orange-500 text-white px-10 py-5 rounded-sm font-black text-lg transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            Solicitar Orçamento
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
      </section>
      
    </div>
  );
}