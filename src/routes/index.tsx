import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const UTM_QS =
  "utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}";

const LINK_PREMIUM = `https://pay.wiapy.com/qbr3F77gQf?${UTM_QS}`;
const LINK_BASICO = `https://pay.wiapy.com/gfkLO9_ixg?${UTM_QS}`;

function useCountdown() {
  const calc = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    const diff = Math.max(0, end.getTime() - now.getTime());
    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    const s = Math.floor((diff % 60_000) / 1000);
    return { h, m, s };
  };
  const [t, setT] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    setT(calc());
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  return t;
}

const pad = (n: number) => n.toString().padStart(2, "0");

function Countdown({ variant = "light" }: { variant?: "light" | "dark" }) {
  const t = useCountdown();
  const items: [string, number][] = [["Horas", t.h], ["Min", t.m], ["Seg", t.s]];
  return (
    <div className="flex justify-center gap-2">
      {items.map(([l, v]) => (
        <div
          key={l}
          className={
            variant === "dark"
              ? "bg-white/15 backdrop-blur border border-white/20 text-white rounded-xl px-3 py-2 text-center min-w-[60px]"
              : "bg-purple-royal text-white rounded-xl px-3 py-2 text-center min-w-[60px] shadow-glow-purple"
          }
        >
          <div className="font-extrabold text-xl leading-none tabular-nums" suppressHydrationWarning>{pad(v)}</div>
          <div className="text-[10px] uppercase mt-1 tracking-wider opacity-90">{l}</div>
        </div>
      ))}
    </div>
  );
}

function VSL() {
  const [play, setPlay] = useState(false);
  return (
    <div className="overflow-hidden rounded-[2rem] aspect-[9/16] bg-black relative">
      {play ? (
        <video
          src="/gym/vsl.mp4"
          poster="/gym/vsl-poster.jpg"
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="w-full h-full object-cover block"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="w-full h-full block relative group"
          aria-label="Reproduzir vídeo"
        >
          <img
            src="/gym/vsl-poster.jpg"
            alt="Prévia do vídeo"
            width={600}
            height={1067}
            decoding="async"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
            <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-glow-gold">
              <span className="ml-1 border-l-[18px] border-l-purple-deep border-y-[12px] border-y-transparent" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

const CURRENT_YEAR = new Date().getFullYear();

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* Top bar */}
      <div className="bg-purple-deep text-white text-center text-xs sm:text-sm py-2 px-3 font-semibold">
        🤸‍♀️ DIFÍCIL MANTER A ATENÇÃO DAS PEQUENAS GINASTAS?
      </div>

      {/* HERO */}
      <section className="bg-hero-gradient text-white px-4 pt-8 pb-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none"
             style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,200,0,0.15), transparent 40%)" }} />
        <div className="relative">
          <Countdown variant="dark" />
          <div className="inline-block mt-5 px-4 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold-soft text-[11px] font-bold tracking-widest">
            ⭐ MÉTODO ALINHADO À BNCC
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl leading-tight max-w-3xl mx-auto mt-4">
            DIFÍCIL MANTER A <span className="text-gold-gradient">ATENÇÃO</span><br className="hidden sm:block" /> DAS PEQUENAS GINASTAS?
          </h1>
          <p className="mt-4 text-base sm:text-xl font-semibold max-w-2xl mx-auto">
            <span className="text-gold-gradient font-extrabold">+250 Dinâmicas Interativas</span> de Ginástica Artística e Rítmica prontas para aplicar em aula.
          </p>

          {/* VSL — phone mockup */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-[300px]">
              <div className="bg-gradient-to-br from-gold to-pink-neon p-[3px] rounded-[3rem] shadow-glow-gold">
                <div className="bg-[#0a0a0a] rounded-[2.8rem] p-3 relative">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-10" />
                  <VSL />
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-pink-neon text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-glow-pink">
                ▶ ASSISTA AGORA
              </div>
            </div>
          </div>

          <a href="#planos" className="mt-10 inline-block rounded-full bg-gradient-to-r from-gold to-pink-neon text-purple-deep font-black px-10 py-4 shadow-glow-gold hover:scale-105 transition text-sm sm:text-base">
            QUERO MINHAS DINÂMICAS AGORA!
          </a>
          <p className="text-xs mt-3 opacity-80">✓ Garantia de 7 dias · ✓ Acesso imediato</p>
        </div>
      </section>

      {/* O que recebe */}
      <section className="bg-pink-bg px-4 py-14">
        <h2 className="text-center font-display font-black text-2xl sm:text-3xl">
          O Que Você <span className="text-pink-neon">Vai Receber?</span>
        </h2>
        <p className="text-center text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
          Tudo que você precisa para transformar suas aulas de ginástica em uma experiência inesquecível.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            ["🤸", "+250 Dinâmicas", "Atividades prontas para aplicar direto no tablado."],
            ["🎁", "Bônus Exclusivos", "Jogos, exercícios e certificado sem custo adicional."],
            ["💻", "Área de Membros", "Todo o conteúdo organizado em um só lugar."],
            ["📱", "Acesso Digital", "Pelo celular ou tablet, a qualquer hora."],
            ["🖨️", "Pronto para Imprimir", "Leve para a aula sem depender de tecnologia."],
            ["🏅", "Alinhado à BNCC", "Metodologia reconhecida para educadores e pais."],
          ].map(([e, t, d]) => (
            <div key={t} className="bg-white rounded-2xl p-5 shadow-sm border border-pink-soft hover:shadow-glow-pink transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-royal to-pink-neon flex items-center justify-center text-2xl">{e}</div>
              <h3 className="mt-3 font-bold">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Para quem é */}
      <section className="bg-white px-4 py-14">
        <p className="text-center text-xs font-bold text-pink-neon tracking-widest">PARA QUEM É?</p>
        <h2 className="text-center font-display font-black text-2xl sm:text-3xl mt-2">
          Este kit foi feito <span className="text-purple-royal">para você se...</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            ["🤸", "Professores e Treinadores", "Que querem aulas mais dinâmicas e alunas mais engajadas."],
            ["👨‍👩‍👧", "Pais de Alunas", "Que desejam ensinar ginástica de forma lúdica e divertida em casa."],
            ["🏫", "Academias e Escolinhas", "Que precisam de material pronto para turmas infantis e iniciantes."],
            ["📚", "Educadores Físicos", "Que buscam atividades alinhadas à BNCC com base em ginástica."],
          ].map(([e, t, d]) => (
            <div key={t} className="flex gap-3 items-start bg-pink-bg rounded-2xl p-5 border border-pink-soft">
              <div className="text-3xl">{e}</div>
              <div>
                <h3 className="font-bold">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dores e Solução lado a lado */}
      <section className="bg-gradient-to-b from-pink-bg to-white px-4 py-14">
        <h2 className="text-center font-display font-black text-2xl sm:text-3xl">
          Você já passou <span className="text-pink-neon">por isso?</span>
        </h2>
        <p className="text-center text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
          De um lado as dores. Do outro, a solução pronta para aplicar.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* Problemas */}
          <div className="bg-white rounded-3xl p-6 border-2 border-red-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-black">✗</div>
              <h3 className="font-bold text-lg text-red-600">Os Problemas</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Aulas que perdem o foco em 5 minutos",
                "Mais tempo pedindo silêncio do que ensinando",
                "Improviso constante e falta de planejamento",
                "Academia do concorrente cheia, a sua não cresce",
                "Vontade de desistir de ensinar para crianças",
              ].map((q) => (
                <li key={q} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-black">✗</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solução */}
          <div className="bg-gradient-to-br from-purple-royal to-purple-deep text-white rounded-3xl p-6 shadow-glow-purple">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold text-purple-deep flex items-center justify-center font-black">✓</div>
              <h3 className="font-bold text-lg text-gold-gradient">A Solução</h3>
            </div>
            <ul className="space-y-3">
              {[
                "+250 dinâmicas prontas, sem criar do zero",
                "Aulas que prendem a atenção do início ao fim",
                "Conteúdo alinhado à BNCC, aprovado por educadores",
                "Material visual e simples, aplique ainda hoje",
                "Resultado visível já na primeira aula",
              ].map((q) => (
                <li key={q} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-gold text-purple-deep flex items-center justify-center text-xs font-black">✓</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="bg-purple-deep text-white px-4 py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: "radial-gradient(circle at 30% 20%, var(--pink-neon), transparent 40%), radial-gradient(circle at 70% 80%, var(--gold), transparent 40%)" }} />
        <div className="relative text-center">
          <span className="inline-block text-xs font-black tracking-widest bg-gold text-purple-deep px-4 py-1.5 rounded-full">
            🎁 BÔNUS EXCLUSIVOS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl mt-4">
            Receba <span className="text-gold-gradient">3 Bônus Incríveis</span> GRÁTIS!
          </h2>
          <p className="text-sm mt-2 opacity-90">Valor total dos bônus: <span className="line-through opacity-70">R$ 97,00</span> · <span className="font-black text-gold-gradient">Hoje sai de graça</span></p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto relative">
          {[
            ["/gym/certificado.jpg", "Certificado de Ginasta", "R$ 27"],
            ["/gym/jogos.jpg", "Jogos de Ginástica", "R$ 37"],
            ["/gym/exercicios.jpg", "100 Exercícios de Ginástica", "R$ 33"],
          ].map(([src, name, val]) => (
            <div key={name} className="bg-white text-foreground rounded-2xl overflow-hidden shadow-glow-gold border-2 border-gold relative group hover:-translate-y-1 transition">
              <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-pink-neon to-purple-royal text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg rotate-3">
                GRÁTIS HOJE
              </div>
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-pink-soft to-pink-bg">
                <img src={src} alt={name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm text-muted-foreground line-through">De {val}</p>
                <p className="mt-1 font-black text-pink-neon">+ HOJE GRÁTIS</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="bg-pink-bg px-4 py-14">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block bg-pink-neon text-white text-[11px] font-black tracking-widest px-3 py-1 rounded-full">
            🔥 OFERTA POR TEMPO LIMITADO
          </span>
          <h2 className="mt-3 font-display font-black text-2xl sm:text-3xl">
            Invista Na Qualidade <span className="text-purple-royal">Das Suas Aulas</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">A oferta encerra hoje à meia-noite — depois disso, o preço volta ao normal.</p>
          <div className="mt-5"><Countdown /></div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
          {/* Básico */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-pink-soft">
            <h3 className="font-bold text-xl">Plano Básico</h3>
            <p className="text-sm text-muted-foreground">Para quem está começando agora.</p>
            <p className="mt-4 text-sm text-muted-foreground line-through">De R$ 67</p>
            <p className="text-4xl font-black text-purple-royal">R$ 10,00</p>
            <p className="text-xs text-muted-foreground">Pagamento único</p>
            <ul className="mt-5 space-y-2 text-sm">
              {["+250 Dinâmicas Interativas", "Acesso Vitalício", "Metodologia Comprovada", "Garantia de 7 dias"].map((i) => (
                <li key={i} className="flex gap-2"><span className="text-purple-royal font-bold">✓</span>{i}</li>
              ))}
            </ul>
            <a href={LINK_BASICO} className="mt-6 block text-center rounded-full bg-foreground text-white font-bold py-3 hover:bg-purple-deep transition">
              ESCOLHER BÁSICO
            </a>
          </div>

          {/* Premium — dominante */}
          <div className="bg-gradient-to-br from-purple-royal to-purple-deep text-white rounded-3xl p-6 shadow-glow-pink border-2 border-gold relative md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-pink-neon text-purple-deep text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
              ⭐ MAIS POPULAR
            </div>
            <h3 className="font-bold text-xl mt-2">Plano Premium</h3>
            <p className="text-sm opacity-80">O arsenal completo para suas aulas.</p>
            <div className="my-4 bg-white/10 rounded-2xl p-3">
              <img src="/gym/produto.png" alt="Produto" loading="lazy" className="w-full h-44 object-contain" />
            </div>
            <ul className="space-y-2 text-sm">
              {[
                "+250 Dinâmicas Interativas",
                "Atualizações Mensais",
                "Suporte VIP Prioritário",
                "Acesso Vitalício",
                "Área de Membros Exclusiva",
                "Certificado de Ginasta",
                "20 Jogos de Ginástica",
                "100 Exercícios de preparação",
              ].map((i) => (
                <li key={i} className="flex gap-2"><span className="text-gold font-bold">✓</span>{i}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm opacity-80 line-through">De R$ 147 por:</p>
            <p className="text-4xl font-black text-gold-gradient">R$ 27,00</p>
            <p className="text-xs opacity-80">Acesso Vitalício</p>
            <a href={LINK_PREMIUM} className="mt-6 block text-center rounded-full bg-gradient-to-r from-gold to-pink-neon text-purple-deep font-black py-3.5 shadow-glow-gold hover:scale-[1.02] transition">
              QUERO O PREMIUM
            </a>
            <p className="mt-3 text-center text-xs opacity-80">✓ Garantia de 7 dias ou seu dinheiro de volta</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-white px-4 py-14">
        <p className="text-center text-xs font-bold text-pink-neon tracking-widest">RESULTADOS REAIS</p>
        <h2 className="text-center font-display font-black text-2xl sm:text-3xl mt-2">
          Depoimentos de <span className="text-purple-royal">Clientes</span>
        </h2>
        <p className="text-center text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
          Veja o que professores, pais, academias e educadores estão dizendo sobre o material.
        </p>

        <div className="mt-10 max-w-6xl mx-auto space-y-10">
          {[
            {
              icon: "🤸",
              label: "Professores e Treinadores",
              items: [
                {
                  quote: "Minhas aulas mudaram da água para o vinho!",
                  text: "Eu sentia que minhas alunas estavam perdendo o foco com os treinos tradicionais. Depois que comecei a aplicar as dinâmicas do material, o engajamento foi total. As crianças agora pedem para treinar e absorvem os fundamentos de GA e GR de forma muito mais natural. É um investimento que se paga na primeira semana.",
                  name: "Ricardo Mello",
                  role: "Treinador de Ginástica Artística",
                  initials: "RM",
                },
                {
                  quote: "Variedade impressionante.",
                  text: "Trabalho com GR há 10 anos e às vezes a criatividade esgota. Ter mais de 250 opções facilita demais o planejamento. O conteúdo é prático, direto ao ponto e bem estruturado. Me poupou horas de pesquisa.",
                  name: "Letícia Fontes",
                  role: "Professora de GR",
                  initials: "LF",
                },
              ],
            },
            {
              icon: "👨‍👩‍👧",
              label: "Pais, Academias e Escolinhas",
              items: [
                {
                  quote: "Diversão garantida em casa.",
                  text: "Minha filha ama ginástica, mas eu não sabia como ajudá-la a praticar de forma segura e divertida. O guia de dinâmicas lúdicas foi a solução! Brincamos juntas e ela desenvolve a coordenação sem perceber que está treinando. Recomendo para todos os pais.",
                  name: "Camila Vasconcelos",
                  role: "Mãe da Sofia (7 anos)",
                  initials: "CV",
                },
                {
                  quote: "Padronização e Qualidade.",
                  text: "Adquirimos o material para nossa escola e foi a melhor decisão para os professores iniciantes. Agora temos um padrão de qualidade nas turmas baby e infantil. A coordenação ficou mais fácil e os pais estão encantados com a evolução das crianças.",
                  name: "Academia Salto Olímpico",
                  role: "Diretoria Pedagógica",
                  initials: "SO",
                },
              ],
            },
          ].map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-royal to-pink-neon text-white flex items-center justify-center text-xl shadow-glow-purple">{cat.icon}</div>
                <h3 className="font-display font-bold text-lg">{cat.label}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-pink-soft to-transparent" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cat.items.map((d) => (
                  <div key={d.name} className="bg-white rounded-3xl p-6 shadow-md border border-pink-soft hover:shadow-glow-pink transition flex flex-col">
                    <div className="text-gold text-base tracking-wider">★★★★★</div>
                    <p className="italic font-bold text-foreground mt-2 text-base">"{d.quote}"</p>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{d.text}</p>
                    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-pink-soft">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-royal to-pink-neon text-white flex items-center justify-center font-black text-sm shadow-glow-purple">
                        {d.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold leading-tight">{d.name}</p>
                        <p className="text-xs text-muted-foreground">{d.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Garantia */}
      <section className="bg-pink-bg px-4 py-14 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold to-pink-neon flex items-center justify-center text-3xl shadow-glow-gold">🛡️</div>
        <h2 className="font-display font-black text-2xl mt-4">Garantia Incondicional de 7 Dias</h2>
        <p className="max-w-xl mx-auto text-sm text-muted-foreground mt-2">
          Teste o material sem risco por 7 dias. Se não fizer sentido para você, devolveremos 100% do seu dinheiro, sem perguntas.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-14">
        <h2 className="text-center font-display font-black text-2xl sm:text-3xl">Perguntas Frequentes</h2>
        <div className="mt-8 max-w-2xl mx-auto space-y-3">
          {[
            ["Como vou acessar o material?", "O acesso é enviado imediatamente para o seu e-mail após a confirmação do pagamento. Você pode baixar os PDFs ou acessar online."],
            ["Serve para qual idade?", "As dinâmicas são adaptáveis para crianças a partir de 4 anos até adolescentes e iniciantes adultas."],
            ["Serve para ginástica artística e rítmica?", "Sim! O material cobre dinâmicas das duas modalidades, com abordagem pedagógica moderna."],
            ["Tenho garantia?", "Sim, garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro."],
          ].map(([q, a]) => (
            <details key={q} className="bg-pink-bg rounded-2xl p-4 border border-pink-soft">
              <summary className="font-semibold cursor-pointer">{q}</summary>
              <p className="text-sm mt-2 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#planos" className="inline-block rounded-full bg-gradient-to-r from-gold to-pink-neon text-purple-deep font-black px-10 py-4 shadow-glow-gold hover:scale-105 transition">
            QUERO COMEÇAR AGORA!
          </a>
        </div>
      </section>

      <footer className="bg-purple-deep text-white/70 text-center text-xs py-6 px-4">
        © {new Date().getFullYear()} Dinâmicas de Ginástica. Todos os direitos reservados.
      </footer>
    </main>
  );
}
