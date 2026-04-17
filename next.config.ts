import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Diz ao Next para gerar arquivos estáticos
  basePath: '/contrucoes_metalicas',
  images: {
    unoptimized: true, // Obrigatório para o GitHub Pages aceitar o next/image
  },
};

export default nextConfig;