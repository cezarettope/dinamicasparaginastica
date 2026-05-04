import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const UTM_QS =
  "utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}";

const LINK_PREMIUM = `https://go.perfectpay.com.br/PPU38CQBEGF?${UTM_QS}`;
const LINK_BASICO = `https://go.perfectpay.com.br/PPU38CQBEH4?${UTM_QS}`;

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
  const [t, setT] = useState(calc);
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  return t;
}

const pad = (n: number) => n.toString().padStart(2, "0");

function Index() {
  const t = useCountdown();
  return (
    <main className="overflow-x-hidden">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground text-center text-xs sm:text-sm py-2 px-3 font-semibold">
        🤸‍♀️ DIFÍCIL MANTER A ATENÇÃO DAS PEQUENAS GINASTAS?
      </div>

      {/* HERO */}
      <section className="bg-white px-4 pt-6 pb-12 text-center">
        {/* Countdown above headline */}
        <div className="flex justify-center gap-2 mb-5">
          {[["Horas", t.h], ["Min", t.m], ["Seg", t.s]].map(([l, v]) => (
            <div key={l as string} className="bg-primary text-white rounded-xl px-3 py-2 text-center min-w-[56px]">
              <div className="font-bold text-lg leading-none">{pad(v as number)}</div>
              <div className="text-[10px] uppercase mt-1">{l as string}</div>
            </div>
          ))}
        </div>
        <h1 className="font-display font-extrabold text-2xl sm:text-4xl leading-tight max-w-3xl mx-auto">
          <span className="text-secondary">+250</span> Dinâmicas Interativas
          <br />de <span className="text-primary">Ginástica Artística e Rítmica</span>
          <br />Prontas para Aplicar em Aula
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Acesso imediato a atividades interativas que estimulam coordenação, expressão corporal e técnica.
          Alinhado à BNCC para professores, educadores e famílias.
        </p>

        {/* VSL placeholder */}
        <div className="mt-6 mx-auto max-w-md aspect-[9/16] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-dashed border-primary/40 flex items-center justify-center text-center p-6">
          <div>
            <div className="text-4xl mb-2">▶️</div>
            <p className="font-bold text-primary">Espaço para sua VSL</p>
            <p className="text-xs text-muted-foreground mt-1">Cole aqui o embed do seu vídeo</p>
          </div>
        </div>

        <a href="#planos" className="mt-6 inline-block rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 shadow-lg shadow-primary/30 hover:scale-105 transition">
          QUERO MINHAS DINÂMICAS AGORA!
        </a>
      </section>

      {/* O que recebe */}
      <section className="bg-pink-bg px-4 py-12">
        <h2 className="text-center font-display font-extrabold text-2xl sm:text-3xl">
          O Que Você <span className="text-primary">Vai Receber?</span>
        </h2>
        <p className="text-center text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
          Tudo que você precisa para transformar suas aulas de ginástica em experiência inesquecível.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            ["🤸", "+250 Dinâmicas", "Atividades prontas para aplicar direto no tablado."],
            ["🎁", "Bônus Exclusivos", "Jogos, exercícios e certificado sem custo adicional."],
            ["💻", "Área de Membros", "Todo o conteúdo organizado em um só lugar."],
            ["📱", "Acesso Digital", "Pelo celular ou tablet, a qualquer hora."],
            ["🖨️", "Pronto para Imprimir", "Leve para a aula sem depender de tecnologia."],
            ["🏅", "Alinhado à BNCC", "Metodologia reconhecida para educadores e pais."],
          ].map(([e, t, d]) => (
            <div key={t} className="bg-white rounded-2xl p-5 shadow-sm border border-pink-soft">
              <div className="w-10 h-10 rounded-lg bg-pink-soft flex items-center justify-center text-xl">{e}</div>
              <h3 className="mt-3 font-bold">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Para quem é */}
      <section className="bg-white px-4 py-12">
        <p className="text-center text-xs font-bold text-primary tracking-widest">PARA QUEM É?</p>
        <h2 className="text-center font-display font-extrabold text-2xl sm:text-3xl mt-2">
          Este kit foi feito <span className="text-primary">para você se...</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            ["🤸", "Professores e Treinadores", "Que querem aulas mais dinâmicas e alunas mais engajadas."],
            ["👨‍👩‍👧", "Pais de Alunas", "Que desejam ensinar ginástica de forma lúdica e divertida em casa."],
            ["🏫", "Academias e Escolinhas", "Que precisam de material pronto para turmas infantis e iniciantes."],
            ["📚", "Educadores Físicos", "Que buscam atividades alinhadas à BNCC com base em ginástica."],
          ].map(([e, t, d]) => (
            <div key={t} className="flex gap-3 items-start bg-pink-bg rounded-2xl p-4">
              <div className="text-2xl">{e}</div>
              <div>
                <h3 className="font-bold">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dores */}
      <section className="bg-pink-bg px-4 py-12">
        <h2 className="text-center font-display font-extrabold text-2xl sm:text-3xl">
          Você já passou <span className="text-primary">por isso?</span> 😩
        </h2>
        <p className="text-center text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
          Se você respondeu sim para qualquer uma dessas perguntas, você não está sozinha.
        </p>
        <div className="mt-6 max-w-2xl mx-auto space-y-3">
          {[
            "Sua aula começa e em 5 minutos as crianças já estão dispersas?",
            "Você passa mais tempo pedindo silêncio do que ensinando técnica?",
            "Sente que improvisa demais e planeja de menos?",
            "Vê a academia do concorrente cheia enquanto a sua não cresce?",
            "Tem vontade de desistir de ensinar para crianças?",
          ].map((q) => (
            <div key={q} className="bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-sm">
              <span className="text-primary font-bold">✗</span>
              <span className="text-sm">{q}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Solução */}
      <section className="bg-white px-4 py-12">
        <h2 className="text-center font-display font-extrabold text-2xl sm:text-3xl">
          Agora você tem uma <span className="text-primary">solução simples</span> 💡
        </h2>
        <p className="text-center text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
          O Kit de Dinâmicas Interativas de Ginástica foi criado para resolver exatamente esses problemas de forma prática, rápida e acessível.
        </p>
        <div className="mt-6 max-w-2xl mx-auto space-y-2">
          {[
            "Mais de 250 dinâmicas prontas, sem precisar criar do zero",
            "Aulas planejadas que mantêm a atenção das crianças do início ao fim",
            "Conteúdo alinhado à BNCC, reconhecido e aprovado",
            "Material visual e simples, aplique ainda hoje",
            "Resultado visível na primeira aula",
          ].map((q) => (
            <div key={q} className="flex items-center gap-3 text-sm">
              <span className="text-primary font-bold">✓</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bônus */}
      <section className="bg-secondary text-white px-4 py-12">
        <p className="text-center text-xs font-bold tracking-widest bg-white/15 inline-block px-3 py-1 rounded-full mx-auto">
          <span className="block">BÔNUS EXCLUSIVOS</span>
        </p>
        <div className="text-center">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl mt-3">
            Receba 3 Bônus Incríveis GRÁTIS!
          </h2>
          <p className="text-sm mt-1 opacity-90">Valor total dos bônus: R$97,00 <span className="opacity-75">(Hoje sai de graça)</span></p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            ["/gym/certificado.jpg", "Certificado de Ginasta", "R$27"],
            ["/gym/jogos.jpg", "Jogos de Ginástica", "R$37"],
            ["/gym/exercicios.jpg", "100 Exercícios de Ginástica", "R$33"],
          ].map(([src, name, val]) => (
            <div key={name} className="bg-white text-foreground rounded-2xl overflow-hidden shadow-lg">
              <img src={src} alt={name} loading="lazy" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm text-muted-foreground">Valor separado: {val}</p>
                <p className="mt-2 text-xs font-bold text-primary">+ HOJE GRÁTIS</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="bg-pink-bg px-4 py-12">
        <h2 className="text-center font-display font-extrabold text-2xl sm:text-3xl">
          Invista Na Qualidade Das Suas Aulas
        </h2>
        <p className="text-center text-sm text-muted-foreground mt-2">Oferta por tempo limitado — encerra hoje à meia-noite.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Básico */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-pink-soft">
            <h3 className="font-bold text-xl">Plano Básico</h3>
            <p className="text-sm text-muted-foreground">Para quem está começando agora.</p>
            <p className="mt-4 text-sm text-muted-foreground line-through">De R$ 67</p>
            <p className="text-3xl font-extrabold text-primary">R$ 10,00</p>
            <p className="text-xs text-muted-foreground">Pagamento único</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✓ +250 Dinâmicas Interativas</li>
              <li>✓ Acesso Vitalício</li>
              <li>✓ Metodologia Comprovada</li>
              <li>✓ Garantia de 7 dias</li>
            </ul>
            <a href={LINK_BASICO} className="mt-6 block text-center rounded-full bg-foreground text-white font-bold py-3">
              ESCOLHER BÁSICO
            </a>
          </div>

          {/* Premium */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-primary relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              MAIS POPULAR
            </div>
            <h3 className="font-bold text-xl">Plano Premium</h3>
            <p className="text-sm text-muted-foreground">O arsenal completo para suas aulas.</p>
            <img src="/gym/produto.png" alt="Produto" loading="lazy" className="w-full h-48 object-contain my-3" />
            <ul className="space-y-2 text-sm">
              <li>✓ +250 Dinâmicas Interativas</li>
              <li>✓ Atualizações Mensais</li>
              <li>✓ Suporte VIP Prioritário</li>
              <li>✓ Acesso Vitalício</li>
              <li>✓ Área de Membros Exclusiva</li>
              <li>✓ Certificado de Ginasta</li>
              <li>✓ 20 Jogos de Ginástica</li>
              <li>✓ 100 Exercícios de preparação</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground line-through">De R$ 147 por:</p>
            <p className="text-3xl font-extrabold text-primary">R$ 27,00</p>
            <p className="text-xs text-muted-foreground">Acesso Vitalício</p>
            <a href={LINK_PREMIUM} className="mt-6 block text-center rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 shadow-lg shadow-primary/30">
              QUERO O PREMIUM
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">✓ Garantia de 7 dias ou seu dinheiro de volta</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-white px-4 py-12">
        <p className="text-center text-xs font-bold text-primary tracking-widest">RESULTADOS REAIS</p>
        <h2 className="text-center font-display font-extrabold text-xl sm:text-3xl mt-2">
          O QUE NOSSAS <span className="text-primary">PROFESSORAS ESTÃO FALANDO</span>
        </h2>
        <p className="text-center text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
          Veja depoimentos reais de professoras e academias que já utilizam nossas dinâmicas.
        </p>
        <div className="mt-8 max-w-md mx-auto bg-pink-bg rounded-2xl p-5 shadow-sm">
          <div className="text-yellow-500">★★★★★</div>
          <p className="text-sm mt-2">"Minhas alunas adoraram! As dinâmicas são fáceis de aplicar e o engajamento aumentou muito. Recomendo demais!"</p>
          <p className="mt-3 text-xs font-bold">— Profª Carla, Treinadora de Ginástica</p>
        </div>
      </section>

      {/* Garantia */}
      <section className="bg-pink-bg px-4 py-12 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400 flex items-center justify-center text-2xl">🛡️</div>
        <h2 className="font-display font-extrabold text-2xl mt-4">Garantia Incondicional</h2>
        <p className="max-w-xl mx-auto text-sm text-muted-foreground mt-2">
          Teste o material sem risco por 7 dias. Se não fizer sentido para você, devolveremos 100% do seu dinheiro, sem perguntas.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-12">
        <h2 className="text-center font-display font-extrabold text-2xl sm:text-3xl">Perguntas Frequentes</h2>
        <div className="mt-6 max-w-2xl mx-auto space-y-3">
          {[
            ["Como vou acessar o material?", "O acesso é enviado imediatamente para o seu e-mail após a confirmação do pagamento. Você pode baixar os PDFs ou acessar online."],
            ["Serve para qual idade?", "As dinâmicas são adaptáveis para crianças a partir de 4 anos até adolescentes e iniciantes adultas."],
            ["Serve para ginástica artística e rítmica?", "Sim! O material cobre dinâmicas das duas modalidades, com abordagem pedagógica moderna."],
            ["Tenho garantia?", "Sim, garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro."],
          ].map(([q, a]) => (
            <details key={q} className="bg-pink-bg rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">{q}</summary>
              <p className="text-sm mt-2 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#planos" className="inline-block rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 shadow-lg shadow-primary/30">
            QUERO COMEÇAR AGORA!
          </a>
        </div>
      </section>

      <footer className="bg-foreground text-white/70 text-center text-xs py-6 px-4">
        © {new Date().getFullYear()} Dinâmicas de Ginástica. Todos os direitos reservados.
      </footer>
    </main>
  );
}
