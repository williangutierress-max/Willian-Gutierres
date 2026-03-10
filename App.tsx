import React from 'react';
import CategoryCard from './components/CategoryCard';
import { CATEGORIES, TESTIMONIALS, BONUSES } from './constants';

const STEPS = [
  {
    number: "1",
    title: "Escolha o Prompt",
    icon: (
      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: "2",
    title: "Use sua foto",
    icon: (
      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    number: "3",
    title: "IA Processa",
    icon: (
      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    number: "4",
    title: "Pronto!",
    subtitle: "Profissional em 2 min",
    icon: (
      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const App: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const count = CATEGORIES.length;
  const half = Math.ceil(count / 2);
  
  const row1 = [...CATEGORIES.slice(0, half), ...CATEGORIES.slice(0, half)];
  const row2 = [...CATEGORIES.slice(half), ...CATEGORIES.slice(half)];

  return (
    <div className="min-h-screen bg-white text-black selection:bg-neon selection:text-white">
      {/* Banner de Oferta */}
      <div className="bg-neon text-white text-center py-3 px-4 flex flex-col items-center justify-center relative z-40 shadow-sm">
        <span className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80 mb-0.5">OFERTA SOMENTE HOJE</span>
        <span className="font-black text-sm md:text-base uppercase tracking-widest">{currentDate}</span>
      </div>

      {/* Seção Hero */}
      <section className="relative px-4 pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-block bg-zinc-100 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 border border-zinc-200">
          🔥 O Pack mais completo do mercado
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8 text-black">
          PACK <span className="text-neon">+100 PROMPTS</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-500 uppercase">ULTRA REALISTAS</span>
        </h1>

        <p className="max-w-xl text-zinc-600 text-lg md:text-xl mb-10 font-medium leading-relaxed">
          Crie fotos realistas em vários lugares para postar no seu perfil.
        </p>

        <div className="relative w-full max-w-[400px] aspect-square rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border-4 border-white group">
          <div className="absolute inset-0 flex">
            <div className="relative w-1/2 h-full">
              <img src="https://i.postimg.cc/65CFP87B/IMG-3494.jpg" className="w-full h-full object-cover" alt="Antes" />
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full border border-white/20 z-10">Antes</div>
            </div>
            <div className="relative w-1/2 h-full">
              <img src="https://i.postimg.cc/2yV8wzHX/Gemini-Generated-Image-pf3gr8pf3gr8pf3g.png" className="w-full h-full object-cover" alt="Depois" />
              <div className="absolute top-6 right-6 bg-neon text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg z-10">Depois</div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-1/2 w-1 bg-white/30 backdrop-blur-sm -translate-x-1/2 z-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-zinc-100">
               <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 7h8M8 12h8m-8 5h8" />
               </svg>
            </div>
          </div>
        </div>

        {/* Botão Hero - Rola para a oferta via JavaScript para evitar erros de conexão */}
        <button 
          onClick={scrollToPricing}
          id="cta-hero"
          className="bg-neon text-white px-10 py-6 rounded-2xl font-black text-xl md:text-2xl shadow-xl shadow-neon/20 hover:scale-[1.02] active:scale-95 transition-all uppercase neon-glow border-b-4 border-black/10 inline-block cursor-pointer"
        >
          QUERO O SUPER PACK AGORA R$ 10
        </button>

        <div className="mt-8 flex items-center gap-4 text-zinc-400 text-sm font-semibold">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://picsum.photos/seed/${i+10}/100/100`} className="w-8 h-8 rounded-full border-2 border-white" alt="Avatar" />
            ))}
          </div>
          <span>+2.450 Pessoas já estão usando</span>
        </div>
      </section>

      {/* Seção de Recebíveis */}
      <section className="py-20 bg-[#fafafa] border-y border-zinc-100 overflow-hidden">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">O Que Você Vai Receber</h2>
          <p className="text-zinc-500 font-bold text-lg">Cenários de alto nível prontos para copiar e colar.</p>
        </div>
        <div className="relative mb-8">
          <div className="animate-marquee-left flex gap-6 px-4">
            {row1.map((category, idx) => (
              <CategoryCard key={`${category.title}-r1-${idx}`} category={category} />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="animate-marquee-right flex gap-6 px-4">
            {row2.map((category, idx) => (
              <CategoryCard key={`${category.title}-r2-${idx}`} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 px-4 bg-black overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon/10 blur-[120px] rounded-full -z-0"></div>
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-white text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase">Como Funciona</h2>
          <p className="text-neon/70 text-lg md:text-xl font-bold uppercase tracking-widest">4 passos simples</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 md:gap-8 relative z-10">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative bg-neon rounded-[40px] p-8 md:p-12 border border-black/5 flex flex-col items-center text-center transition-all hover:scale-[1.02] shadow-2xl group">
              <div className="absolute top-0 left-0 bg-black text-neon w-10 h-10 md:w-14 md:h-14 flex items-center justify-center font-black text-xl md:text-2xl rounded-tl-[40px] rounded-br-2xl">
                {step.number}
              </div>
              <div className="mb-8 p-6 rounded-3xl bg-black/5 group-hover:bg-black/10 transition-colors duration-500">
                {step.icon}
              </div>
              <div className="flex flex-col items-center text-white">
                <h4 className="text-white text-lg md:text-2xl font-black mb-2 uppercase tracking-tight">{step.title}</h4>
                {step.subtitle && (
                  <p className="text-white/60 text-xs md:text-base font-bold uppercase tracking-widest">{step.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bônus */}
      <section className="py-24 px-4 bg-white overflow-hidden relative border-t border-zinc-50">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Bônus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {BONUSES.map((bonus, idx) => (
              <div key={idx} className="bg-neon text-white p-8 rounded-[2.5rem] border-b-8 border-black/10 relative group hover:scale-[1.02] transition-transform shadow-xl">
                <div className="text-4xl mb-4 drop-shadow-sm">{bonus.icon}</div>
                <h4 className="text-xl md:text-2xl font-black leading-tight uppercase tracking-tight">{bonus.title}</h4>
                <div className="mt-6 text-white/60 text-[10px] font-black uppercase tracking-[0.2em] border-t border-white/10 pt-4">Gratis dentro do Pack</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="py-16 md:py-24 px-4 bg-[#f8fafd]">
        <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-[#0f2137] text-3xl md:text-5xl font-black mb-12 tracking-tight">Avaliações</h2>
            <div className="flex flex-row justify-center items-center gap-4 md:gap-12 mb-12 md:mb-16">
              <div className="flex flex-col items-center">
                <div className="text-[#ffc107] text-xl md:text-2xl mb-1 md:mb-2 flex gap-0.5 md:gap-1"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                <div className="text-3xl md:text-5xl font-black text-[#1a2b4b]">4.9/5</div>
                <div className="text-gray-400 font-medium text-[10px] md:text-base mt-0.5 md:mt-1">847 avaliações</div>
              </div>
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white flex flex-col items-center w-full max-w-[120px] md:max-w-[200px]">
                <div className="text-neon text-2xl md:text-4xl font-black leading-none">98%</div>
                <div className="text-gray-400 font-black text-[8px] md:text-xs mt-1 uppercase tracking-wider">Satisfação</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-6 mb-12">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-white rounded-[20px] md:rounded-[40px] p-4 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.04)] text-left flex flex-col h-full border border-gray-50/50 transition-all hover:shadow-lg">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-3 md:mb-4">
                    <img src={t.avatar} className="w-10 h-10 md:w-14 md:h-14 rounded-full" alt={t.name} />
                    <div>
                      <div className="font-black text-[#1a2b4b] text-sm md:text-lg leading-tight">{t.name}</div>
                      <div className="text-[#ffc107] text-[10px] md:text-sm flex gap-0.5 mt-0.5"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    </div>
                  </div>
                  <p className="text-[#64748b] font-medium leading-snug md:leading-relaxed text-[11px] md:text-[15px]">"{t.text}"</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-neon font-bold text-xs md:text-sm pb-12">
               <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               Depoimentos verificados de alunos reais
            </div>
        </div>
      </section>

      {/* Seção de Oferta Final */}
      <section id="pricing" className="py-32 px-4 bg-black flex flex-col items-center">
        <div className="max-w-3xl w-full bg-neon text-white rounded-[4rem] p-12 text-center relative overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.2)] border-b-8 border-black/10">
          <div className="absolute top-0 right-0 p-4 rotate-12 bg-black text-white font-black px-6 py-2 rounded-full -mt-4 mr-4 shadow-xl text-xs uppercase tracking-widest">Oferta</div>
          <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase">Aproveite agora o Pack Completo</h3>
          <div className="mb-10 flex flex-col items-center">
            <p className="text-white/80 text-lg uppercase font-black tracking-widest mb-1">Apenas hoje</p>
            <div className="relative inline-block">
               <span className="text-white text-7xl md:text-9xl font-black leading-none tracking-tighter italic">R$10</span>
            </div>
          </div>
          {/* Link de Checkout Atualizado */}
          <a 
            href="https://pay.lowify.com.br/checkout?product_id=cTBp5B"
            id="checkout-button"
            className="w-full bg-black text-white py-8 rounded-[2rem] font-black text-2xl md:text-3xl shadow-2xl hover:bg-zinc-800 hover:scale-[1.01] transition-all uppercase active:scale-95 mb-8 inline-block text-center"
          >
            QUERO MEU ACESSO AGORA
          </a>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/80 font-black text-[11px] md:text-sm uppercase tracking-tight">
            <span className="flex items-center gap-2">✔️ 100+ prompts organizados</span>
            <span className="flex items-center gap-2">✔️ Bônus exclusivos</span>
            <span className="flex items-center gap-2">✔️ Acesso imediato</span>
            <span className="flex items-center gap-2">✔️ Pagamento único</span>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-24 px-4 flex justify-center bg-white">
        <div className="max-w-xl w-full bg-blue-50 rounded-[40px] p-10 md:p-14 text-center border border-blue-100 shadow-sm">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-blue-100 rounded-full mb-8">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h2 className="text-blue-900 text-3xl md:text-4xl font-black mb-6 tracking-tight">Garantia de 7 Dias</h2>
          <p className="text-blue-700 text-lg md:text-xl font-bold leading-relaxed">Se não gostar dos resultados, devolvemos 100% do seu dinheiro.</p>
        </div>
      </section>
      <footer className="py-12 bg-white"></footer>
    </div>
  );
};

export default App;