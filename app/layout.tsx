import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // Importando a Navbar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadados reais da Diastru para SEO
export const metadata: Metadata = {
  title: "DIASTRU | Construções Metálicas e Galpões",
  description: "Especialistas em estruturas metálicas de alta qualidade, galpões industriais e soluções em aço.",
  icons: {
    icon: "/favicon.ico", // Lembre-se de colocar um favicon depois
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        {/* Navbar fixa no topo */}
        <Navbar />
        
        {/* Padding-top para não ficar escondido sob a Navbar fixa */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Aqui você pode adicionar um <Footer /> depois */}
      </body>
    </html>
  );
}