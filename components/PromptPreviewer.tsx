import React, { useState } from 'react';
import { generateSamplePrompt } from '../services/geminiService';
import { CATEGORIES } from '../constants';

const PromptPreviewer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].title);
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateSamplePrompt(selectedCategory);
      setPrompt(String(result));
    } catch (err) {
      console.error("Interaction failed");
      setPrompt("Desculpe, houve um erro ao gerar o prompt. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-black text-white px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block border border-neon/30 px-4 py-1 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-6 text-neon">
          Interactive Demo
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">O Poder da Inteligência Artificial</h2>
        <p className="text-zinc-400 mb-12 font-medium text-lg max-w-2xl mx-auto">
          Escolha uma categoria abaixo e veja a mágica acontecer. Geramos um prompt exclusivo em tempo real para você.
        </p>
        
        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <select 
                className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-neon transition-all appearance-none cursor-pointer font-bold"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {CATEGORIES.slice(0, 15).map(c => (
                  <option key={c.title} value={c.title} className="bg-black text-white">{c.icon} {c.title}</option>
                ))}
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-neon">
                ▼
              </div>
            </div>
            <button 
              type="button"
              id="demo-generate-button"
              onClick={handleGenerate}
              disabled={loading}
              className="bg-neon text-black font-black px-10 py-4 rounded-2xl hover:scale-105 transition-all disabled:opacity-50 active:scale-95 shadow-xl shadow-neon/20 uppercase tracking-tight"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  PROCESSANDO...
                </span>
              ) : "GERAR PROMPT AGORA"}
            </button>
          </div>

          <div className={`transition-all duration-700 overflow-hidden ${prompt ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-black/50 p-8 rounded-3xl border border-neon/20 text-left relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012-2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z"></path>
                </svg>
              </div>
              <p className="text-neon/90 font-mono text-lg leading-relaxed italic pr-8">
                "{prompt}"
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="flex gap-1">
                  {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" style={{animationDelay: `${i*0.2}s`}}></div>)}
                </div>
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">IA Generativa Pronta para Cópia</span>
              </div>
            </div>
            <p className="text-zinc-500 text-xs mt-4 font-bold uppercase tracking-widest">Este é apenas 1 dos 100 que você receberá</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptPreviewer;