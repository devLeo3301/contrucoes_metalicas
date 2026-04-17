"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fecha o menu e detecta o scroll para adicionar sombra na barra
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Fechar menu mobile se a tela for redimensionada para desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Links centralizados para facilitar a manutenção
  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: "Obras", path: "/obras" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/5 border-b border-slate-200 py-1" 
          : "bg-white border-b border-slate-100 py-3"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Genérica em Texto (Ideal para Templates) */}
        <Link 
          href="/" 
          className="flex items-center gap-2 transition-transform hover:scale-105 duration-300" 
          onClick={closeMenu}
        >
          {/* Ícone Geométrico */}
          <div className="w-8 h-8 bg-[#1D438A] text-white flex items-center justify-center font-black text-xl rounded-sm">
            E
          </div>
          {/* Nome da Empresa */}
          <span className="text-2xl font-black tracking-tighter text-[#0F172A]">
            EMPRESA<span className="text-[#F28C38]">.</span>
          </span>
        </Link>

        {/* Links Desktop (Com Animated Underline) */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 font-semibold text-[#1D438A]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className="relative group py-2"
              >
                <span className="group-hover:text-[#F28C38] transition-colors duration-300">
                  {link.name}
                </span>
                {/* Linha animada no Hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F28C38] transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          <Link 
            href="/contato" 
            className="group relative overflow-hidden bg-[#1D438A] text-white px-7 py-2.5 rounded-sm font-bold shadow-md hover:shadow-xl hover:shadow-[#F28C38]/20 transition-all duration-300"
          >
            {/* Efeito de brilho no botão */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative">Orçamento</span>
          </Link>
        </div>

        {/* Botão Hambúrguer - Mobile */}
        <button 
          className="md:hidden text-[#1D438A] p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Alternar menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-[2px] bg-current rounded transition-all duration-300 origin-left ${isOpen ? "rotate-45 translate-x-[2px]" : ""}`} />
            <span className={`w-full h-[2px] bg-current rounded transition-all duration-300 ${isOpen ? "opacity-0 translate-x-4" : ""}`} />
            <span className={`w-full h-[2px] bg-current rounded transition-all duration-300 origin-left ${isOpen ? "-rotate-45 translate-x-[2px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Menu Mobile (Deslizante e Elegante) */}
      <div 
        className={`md:hidden absolute left-0 w-full bg-white border-b border-slate-200 shadow-2xl transition-all duration-500 ease-in-out ${
          isOpen 
            ? "top-full opacity-100 visible" 
            : "top-[70%] opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col px-8 py-8 space-y-6 font-semibold text-[#1D438A]">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-slate-100 pb-4">
              <Link 
                href={link.path} 
                onClick={closeMenu} 
                className="block text-lg hover:text-[#F28C38] hover:translate-x-2 transition-all duration-300"
              >
                {link.name}
              </Link>
            </div>
          ))}
          
          <Link 
            href="/contato" 
            onClick={closeMenu} 
            className="bg-[#1D438A] text-white px-6 py-4 rounded-sm hover:bg-[#F28C38] transition-colors text-center mt-4 text-lg shadow-md"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </nav>
  );
}