import React from 'react';
import { Check, Instagram, ArrowRight, ShieldCheck, Zap, LayoutGrid, Layers, TrendingUp, UserCheck, Clock } from 'lucide-react';

export default function App() {
  // --- CONFIGURAÇÃO ---
  
  // SOLUÇÃO DA IMAGEM:
  // 1. Renomeie seu arquivo de print para "print-perfil.jpg"
  // 2. Coloque ele na pasta "public" do seu projeto
  // 3. O site vai puxar a imagem automaticamente
  const printUrl = "/print-perfil.jpg"; 

  // Se ainda não tiver colocado a foto na pasta, use este link temporário para testar o layout:
  // const printUrl = "https://placehold.co/600x1000/171717/DC2626?text=Coloque+o+Arquivo+print-perfil.jpg";

  // --- DEFINIÇÃO DOS PACOTES ---
  const packages = [
    {
      id: 1,
      title: "Stories 24h",
      subtitle: "Visibilidade Imediata",
      oldPrice: "35,00",
      price: "19,90",
      link: "https://wa.me/5514991564081?text=%F0%9F%93%B2Ol%C3%A1!%20vim%20pelo%20instagram%2C%20quero%20contratar%20o%20Storys%2024H%20por%20R%2419%2C90", // Link direto
      icon: <Zap className="w-6 h-6 text-red-600" />,
      features: [
        "1 Postagem nos Stories",
        "Interação Direta com Público", 
        "Link de direcionamento",
        "Marcação do @perfil",
      ],
      highlight: false,
      ctaText: "Contratar Story"
    },
    {
      id: 2,
      title: "Feed Timeline",
      subtitle: "Destaque no Feed",
      oldPrice: "60,00",
      price: "29,90",
      link: "https://wa.me/5514991564081?text=%F0%9F%93%B2Ol%C3%A1!%20vim%20pelo%20instagram%2C%20quero%20contratar%20o%20Feed%20Timeline%20por%20R%2429%2C90", // Link direto
      icon: <LayoutGrid className="w-6 h-6 text-red-600" />,
      features: [
        "1 Post no Feed (Foto/Vídeo)",
        "Legenda estratégica",
        "Destaque por 24h (Horário Nobre)", 
        "Indexação por Hashtags",
      ],
      highlight: false,
      ctaText: "Contratar Feed"
    },
    {
      id: 3,
      title: "Combo Pro",
      subtitle: "Alcance Máximo",
      oldPrice: "80,00", 
      price: "44,90",
      link: "import React from 'react';
import { Check, Instagram, ArrowRight, ShieldCheck, Zap, LayoutGrid, Layers, TrendingUp, UserCheck, Clock } from 'lucide-react';

export default function App() {
  // --- CONFIGURAÇÃO ---
  
  // SOLUÇÃO DA IMAGEM:
  // 1. Renomeie seu arquivo de print para "print-perfil.jpg"
  // 2. Coloque ele na pasta "public" do seu projeto
  // 3. O site vai puxar a imagem automaticamente
  const printUrl = "/print-perfil.jpg"; 

  // Se ainda não tiver colocado a foto na pasta, use este link temporário para testar o layout:
  // const printUrl = "https://placehold.co/600x1000/171717/DC2626?text=Coloque+o+Arquivo+print-perfil.jpg";

  // --- DEFINIÇÃO DOS PACOTES ---
  const packages = [
    {
      id: 1,
      title: "Stories 24h",
      subtitle: "Visibilidade Imediata",
      oldPrice: "35,00",
      price: "19,90",
      link: "https://wa.me/5514991564081?text=%F0%9F%93%B2Ol%C3%A1!%20vim%20pelo%20instagram%2C%20quero%20contratar%20o%20Storys%2024H%20por%20R%2419%2C90", // Link direto
      icon: <Zap className="w-6 h-6 text-red-600" />,
      features: [
        "1 Postagem nos Stories",
        "Interação Direta com Público", 
        "Link de direcionamento",
        "Marcação do @perfil",
      ],
      highlight: false,
      ctaText: "Contratar Story"
    },
    {
      id: 2,
      title: "Feed Timeline",
      subtitle: "Destaque no Feed",
      oldPrice: "60,00",
      price: "29,90",
      link: "https://wa.me/5514991564081?text=%F0%9F%93%B2Ol%C3%A1!%20vim%20pelo%20instagram%2C%20quero%20contratar%20o%20Feed%20Timeline%20por%20R%2429%2C90.", // Link direto
      icon: <LayoutGrid className="w-6 h-6 text-red-600" />,
      features: [
        "1 Post no Feed (Foto/Vídeo)",
        "Legenda estratégica",
        "Destaque por 24h (Horário Nobre)", 
        "Indexação por Hashtags",
      ],
      highlight: false,
      ctaText: "Contratar Feed"
    },
    {
      id: 3,
      title: "Combo Pro",
      subtitle: "Alcance Máximo",
      oldPrice: "80,00", 
      price: "44,90",
      link: "https://wa.me/5514991564081?text=%F0%9F%93%B2Ol%C3%A1!%20vim%20pelo%20instagram%2C%20quero%20contratar%20o%20Combo%20Pro%20(feed%20%2B%20storys)%20por%20R%2444%2C90.", // Link direto
      tag: "MAIS VANTAJOSO",
      icon: <Layers className="w-6 h-6 text-white" />,
      features: [
        "Feed + Story no Horário de Pico", 
        "Postagem Simultânea",
        "Economia de R$ 5,00",
        "Melhor Custo-Benefício",
      ],
      highlight: true,
      ctaText: "Quero o Combo"
    }
  ];

  const handleBuy = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-red-600 selection:text-white pb-12">
      
      {/* HEADER / HERO SECTION */}
      <header className="pt-12 pb-10 px-4 text-center border-b border-neutral-900 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* LOGO MODERNA */}
          <div className="mb-8 transform hover:scale-105 transition-all duration-300">
            <div className="w-32 h-32 bg-black rounded-full flex flex-col items-center justify-center shadow-2xl shadow-red-900/10 border border-neutral-800 relative overflow-hidden">
               <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-neutral-800/20 to-transparent pointer-events-none"></div>
               <span className="text-red-600 font-black text-5xl leading-none tracking-tighter z-10" style={{ fontFamily: 'Arial, sans-serif' }}>1000</span>
               <span className="text-white font-black text-2xl leading-none tracking-tight z-10 mt-1" style={{ fontFamily: 'Arial, sans-serif' }}>FUNK'S</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            A vitrine das <span className="text-red-600">Relíquias</span>.
          </h1>
          
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Divulgue sua marca, música ou evento para uma <strong className="text-white">comunidade real e engajada</strong> que cresce todos os dias.
            A escolha certa para quem quer resultado.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-sm font-medium text-neutral-500">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-red-600" />
              <span>Entrega Garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram size={18} className="text-red-600" />
              <span>@1000classicos_do_funk</span>
            </div>
          </div>
        </div>
      </header>

      {/* PRICING SECTION */}
      <main className="max-w-5xl mx-auto px-4 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 border
                ${pkg.highlight 
                  ? 'bg-neutral-900 border-red-600 shadow-xl shadow-red-900/10 md:-mt-4 z-10' 
                  : 'bg-black border-neutral-800 hover:border-neutral-700'
                }
              `}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {pkg.tag}
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${pkg.highlight ? 'bg-red-600' : 'bg-neutral-900'}`}>
                  {pkg.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{pkg.title}</h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-wide">{pkg.subtitle}</p>
                </div>
              </div>

              {/* Pricing Block */}
              <div className="mb-6 border-b border-neutral-800 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-neutral-500 line-through">R$ {pkg.oldPrice}</span>
                  <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                    OFERTA
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-sm text-neutral-300 mr-1">R$</span>
                  <span className="text-4xl font-extrabold text-white tracking-tight">{pkg.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-neutral-300">
                     {feature.includes('24 horas') || feature.includes('Duração') ? (
                       <Clock className={`w-5 h-5 mr-3 shrink-0 text-yellow-500`} />
                    ) : (
                       <Check className={`w-5 h-5 mr-3 shrink-0 ${pkg.highlight ? 'text-red-500' : 'text-neutral-600'}`} />
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBuy(pkg.link)}
                className={`w-full py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-all active:scale-95
                  ${pkg.highlight 
                    ? 'bg-white text-black hover:bg-neutral-200' 
                    : 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
                  }
                `}
              >
                {pkg.ctaText}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}

        </div>

        {/* --- PROVA SOCIAL COM PRINT --- */}
        <div className="mt-20 mb-10 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4 order-2 md:order-1"> 
                    <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        <TrendingUp size={14} />
                        Recorde de Acessos
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase">
                        Números que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">impressionam</span>
                    </h2>
                    
                    <p className="text-neutral-300 leading-relaxed text-lg">
                        Apenas no mês de <strong className="text-white">Novembro de 2025</strong>, a página 1000classicos do funk atingiu a marca histórica de <strong className="text-red-500">40 milhões em alcance</strong>.
                    </p>
                    <p className="text-neutral-400">
                        Isso não é sorte, é engajamento real. Este é o lugar ideal para você divulgar seu material e ser visto por quem importa.
                    </p>
                    
                    <div className="mt-4 p-4 bg-black border border-neutral-800 rounded-lg inline-block w-full md:w-auto">
                        <p className="text-neutral-500 text-xs uppercase mb-1">Alcance Confirmado</p>
                        <p className="text-3xl font-black text-white">+40,4 Milhões</p>
                        <p className="text-green-500 text-xs font-bold mt-1">Visualizações em 30 dias</p>
                    </div>
                </div>

                {/* Área da Imagem do Print */}
                <div className="flex-1 w-full max-w-sm order-1 md:order-2 mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative aspect-[9/16] bg-black rounded-xl border border-neutral-800 overflow-hidden">
                           
                           {/* AQUI A IMAGEM SERÁ PUXADA DO ARQUIVO LOCAL */}
                           <img 
                                src={printUrl}
                                alt="Print do Painel Profissional Instagram mostrando 40 milhões de views" 
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    // Fallback visual caso a imagem não seja encontrada na prévia
                                    e.target.parentElement.style.backgroundColor = '#171717';
                                    e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-center p-4 text-neutral-500 text-xs">⚠️ Imagem "print-perfil.jpg" não encontrada.<br>Coloque o arquivo na pasta public.</div>';
                                }}
                           />
                        </div>
                        <p className="text-center text-xs text-neutral-600 mt-2 md:hidden">
                            Print oficial do painel @1000classicos_do_funk
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* FAQ / FOOTER INFO */}
        <div className="mt-16 text-center border-t border-neutral-900 pt-10">
          <h2 className="text-xl font-bold text-white mb-8">Dúvidas Frequentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8 text-left px-4">
            
            <div className="bg-neutral-900/30 p-5 rounded-xl border border-neutral-800">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={20} className="text-red-600" />
                <h4 className="font-bold text-white">Como faço o pagamento?</h4>
              </div>
              <p className="text-sm text-neutral-400">Ao escolher seu pacote, você fala direto no nosso WhatsApp. Lá aceitamos PIX e Cartão de Crédito com segurança.</p>
            </div>

            <div className="bg-neutral-900/30 p-5 rounded-xl border border-neutral-800">
              <div className="flex items-center gap-2 mb-3">
                <Instagram size={20} className="text-red-600" />
                <h4 className="font-bold text-white">Preciso ter a arte pronta?</h4>
              </div>
              <p className="text-sm text-neutral-400">Sim! Você envia a foto ou vídeo pronto e nós postamos. Se precisar de ajuda na legenda, nós damos aquela força.</p>
            </div>

            <div className="bg-neutral-900/30 p-5 rounded-xl border border-neutral-800">
              <div className="flex items-center gap-2 mb-3">
                <UserCheck size={20} className="text-red-600" />
                <h4 className="font-bold text-white">O atendimento é humano?</h4>
              </div>
              <p className="text-sm text-neutral-400">Com certeza! Você será atendido por uma <strong className="text-white">pessoa real</strong> da nossa equipe. Respondemos em até 24 horas.</p>
            </div>

          </div>
          
          <footer className="mt-16 text-xs text-neutral-600 pb-8">
            © 2024 1000 FUNK'S - Todos os direitos reservados.
          </footer>
        </div>
      </main>
    </div>
  );

}", // Link direto
      tag: "MAIS VANTAJOSO",
      icon: <Layers className="w-6 h-6 text-white" />,
      features: [
        "Feed + Story no Horário de Pico", 
        "Postagem Simultânea",
        "Economia de R$ 5,00",
        "Melhor Custo-Benefício",
      ],
      highlight: true,
      ctaText: "Quero o Combo"
    }
  ];

  const handleBuy = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-red-600 selection:text-white pb-12">
      
      {/* HEADER / HERO SECTION */}
      <header className="pt-12 pb-10 px-4 text-center border-b border-neutral-900 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* LOGO MODERNA */}
          <div className="mb-8 transform hover:scale-105 transition-all duration-300">
            <div className="w-32 h-32 bg-black rounded-full flex flex-col items-center justify-center shadow-2xl shadow-red-900/10 border border-neutral-800 relative overflow-hidden">
               <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-neutral-800/20 to-transparent pointer-events-none"></div>
               <span className="text-red-600 font-black text-5xl leading-none tracking-tighter z-10" style={{ fontFamily: 'Arial, sans-serif' }}>1000</span>
               <span className="text-white font-black text-2xl leading-none tracking-tight z-10 mt-1" style={{ fontFamily: 'Arial, sans-serif' }}>FUNK'S</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            A vitrine das <span className="text-red-600">Relíquias</span>.
          </h1>
          
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Divulgue sua marca, música ou evento para uma <strong className="text-white">comunidade real e engajada</strong> que cresce todos os dias.
            A escolha certa para quem quer resultado.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-sm font-medium text-neutral-500">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-red-600" />
              <span>Entrega Garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram size={18} className="text-red-600" />
              <span>@1000classicos_do_funk</span>
            </div>
          </div>
        </div>
      </header>

      {/* PRICING SECTION */}
      <main className="max-w-5xl mx-auto px-4 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 border
                ${pkg.highlight 
                  ? 'bg-neutral-900 border-red-600 shadow-xl shadow-red-900/10 md:-mt-4 z-10' 
                  : 'bg-black border-neutral-800 hover:border-neutral-700'
                }
              `}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {pkg.tag}
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${pkg.highlight ? 'bg-red-600' : 'bg-neutral-900'}`}>
                  {pkg.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{pkg.title}</h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-wide">{pkg.subtitle}</p>
                </div>
              </div>

              {/* Pricing Block */}
              <div className="mb-6 border-b border-neutral-800 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-neutral-500 line-through">R$ {pkg.oldPrice}</span>
                  <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                    OFERTA
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-sm text-neutral-300 mr-1">R$</span>
                  <span className="text-4xl font-extrabold text-white tracking-tight">{pkg.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-neutral-300">
                     {feature.includes('24 horas') || feature.includes('Duração') ? (
                       <Clock className={`w-5 h-5 mr-3 shrink-0 text-yellow-500`} />
                    ) : (
                       <Check className={`w-5 h-5 mr-3 shrink-0 ${pkg.highlight ? 'text-red-500' : 'text-neutral-600'}`} />
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBuy(pkg.link)}
                className={`w-full py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-all active:scale-95
                  ${pkg.highlight 
                    ? 'bg-white text-black hover:bg-neutral-200' 
                    : 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
                  }
                `}
              >
                {pkg.ctaText}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}

        </div>

        {/* --- PROVA SOCIAL COM PRINT --- */}
        <div className="mt-20 mb-10 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4 order-2 md:order-1"> 
                    <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        <TrendingUp size={14} />
                        Recorde de Acessos
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase">
                        Números que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">impressionam</span>
                    </h2>
                    
                    <p className="text-neutral-300 leading-relaxed text-lg">
                        Apenas no mês de <strong className="text-white">Novembro de 2025</strong>, a página 1000classicos do funk atingiu a marca histórica de <strong className="text-red-500">40 milhões em alcance</strong>.
                    </p>
                    <p className="text-neutral-400">
                        Isso não é sorte, é engajamento real. Este é o lugar ideal para você divulgar seu material e ser visto por quem importa.
                    </p>
                    
                    <div className="mt-4 p-4 bg-black border border-neutral-800 rounded-lg inline-block w-full md:w-auto">
                        <p className="text-neutral-500 text-xs uppercase mb-1">Alcance Confirmado</p>
                        <p className="text-3xl font-black text-white">+40,4 Milhões</p>
                        <p className="text-green-500 text-xs font-bold mt-1">Visualizações em 30 dias</p>
                    </div>
                </div>

                {/* Área da Imagem do Print */}
                <div className="flex-1 w-full max-w-sm order-1 md:order-2 mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative aspect-[9/16] bg-black rounded-xl border border-neutral-800 overflow-hidden">
                           
                           {/* AQUI A IMAGEM SERÁ PUXADA DO ARQUIVO LOCAL */}
                           <img 
                                src={printUrl}
                                alt="Print do Painel Profissional Instagram mostrando 40 milhões de views" 
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    // Fallback visual caso a imagem não seja encontrada na prévia
                                    e.target.parentElement.style.backgroundColor = '#171717';
                                    e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-center p-4 text-neutral-500 text-xs">⚠️ Imagem "print-perfil.jpg" não encontrada.<br>Coloque o arquivo na pasta public.</div>';
                                }}
                           />
                        </div>
                        <p className="text-center text-xs text-neutral-600 mt-2 md:hidden">
                            Print oficial do painel @1000classicos_do_funk
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* FAQ / FOOTER INFO */}
        <div className="mt-16 text-center border-t border-neutral-900 pt-10">
          <h2 className="text-xl font-bold text-white mb-8">Dúvidas Frequentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8 text-left px-4">
            
            <div className="bg-neutral-900/30 p-5 rounded-xl border border-neutral-800">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={20} className="text-red-600" />
                <h4 className="font-bold text-white">Como faço o pagamento?</h4>
              </div>
              <p className="text-sm text-neutral-400">Ao escolher seu pacote, você fala direto no nosso WhatsApp. Lá aceitamos PIX e Cartão de Crédito com segurança.</p>
            </div>

            <div className="bg-neutral-900/30 p-5 rounded-xl border border-neutral-800">
              <div className="flex items-center gap-2 mb-3">
                <Instagram size={20} className="text-red-600" />
                <h4 className="font-bold text-white">Preciso ter a arte pronta?</h4>
              </div>
              <p className="text-sm text-neutral-400">Sim! Você envia a foto ou vídeo pronto e nós postamos. Se precisar de ajuda na legenda, nós damos aquela força.</p>
            </div>

            <div className="bg-neutral-900/30 p-5 rounded-xl border border-neutral-800">
              <div className="flex items-center gap-2 mb-3">
                <UserCheck size={20} className="text-red-600" />
                <h4 className="font-bold text-white">O atendimento é humano?</h4>
              </div>
              <p className="text-sm text-neutral-400">Com certeza! Você será atendido por uma <strong className="text-white">pessoa real</strong> da nossa equipe. Respondemos em até 24 horas.</p>
            </div>

          </div>
          
          <footer className="mt-16 text-xs text-neutral-600 pb-8">
            © 2024 1000 FUNK'S - Todos os direitos reservados.
          </footer>
        </div>
      </main>
    </div>
  );

}

