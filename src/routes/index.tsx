import { createFileRoute } from "@tanstack/react-router";

import audimaxProduct from "../assets/audimax-product.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Audimax Pro — Pare o Zumbido na Raiz" },
      {
        name: "description",
        content:
          "Protocolo líquido Audimax Pro para zumbido, tontura e clareza mental com garantia de 90 dias.",
      },
      { property: "og:title", content: "Audimax Pro — Pare o Zumbido na Raiz" },
      {
        property: "og:description",
        content: "Reconquiste silêncio, equilíbrio e clareza com o protocolo líquido de tripla ação.",
      },
    ],
  }),
  component: Index,
});

const symptoms = [
  ["Zumbido no Ouvido", "Aquele chiado que não para, piora à noite e rouba sono, concentração e paz."],
  ["Tontura e Labirintite", "O medo de cair, a insegurança ao sair e a sensação de perder a independência."],
  ["Falhas de Memória", "Nomes, compromissos e palavras simples começam a escapar com mais frequência."],
];

const ingredients = [
  ["Curcumina", "Ajuda a modular a resposta inflamatória silenciosa ligada ao desconforto auditivo."],
  ["L-cisteína", "Apoia a produção de glutationa, antioxidante essencial para células auditivas."],
  ["Complexo B", "Nutre o sistema nervoso e contribui para sinais auditivos mais estáveis."],
  ["Selenometionina", "Forma absorvível de selênio associada à proteção celular e cognição."],
];

const testimonials = [
  ["Finalmente consigo dormir em silêncio. Chorei de emoção quando percebi que passei a noite inteira sem o barulho.", "Maria L., 62 anos"],
  ["A labirintite me prendia em casa. Na segunda semana já estava caminhando sozinho de novo.", "Antônio R., 58 anos"],
  ["Minha filha notou minha melhora. A clareza voltou e me sinto eu mesma de novo.", "Helena P., 57 anos"],
];

const plans = [
  { title: "1 Frasco", subtitle: "30 dias", price: "R$ 197", badge: "Entrada" },
  { title: "3 Frascos", subtitle: "Tratamento recomendado", price: "R$ 147", badge: "Mais escolhido", featured: true },
  { title: "6 Frascos", subtitle: "Resultado completo", price: "R$ 117", badge: "Melhor valor" },
];

const faqs = [
  ["Tenho zumbido há anos. Ainda pode ajudar?", "O protocolo foi pensado para uso contínuo. Em casos antigos, recomendamos pelo menos 60 dias para observar resultados mais expressivos."],
  ["Quanto tempo leva para sentir diferença?", "Muitas pessoas relatam percepção de melhora entre a 2ª e a 4ª semana, com evolução gradual e cumulativa."],
  ["Por que o formato líquido é importante?", "O formato líquido facilita a rotina diária e começa a ser absorvido ainda na mucosa oral."],
  ["Como funciona a garantia?", "Você testa por 90 dias. Se não ficar satisfeito, recebe 100% do valor de volta, sem burocracia."],
];

function SectionTitle({ tag, title, accent }: { tag: string; title: string; accent: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center reveal-up">
      <span className="mb-4 inline-flex rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-gold">
        {tag}
      </span>
      <h2 className="font-display text-5xl leading-none tracking-normal text-primary md:text-7xl">
        {title} <span className="text-gold">{accent}</span>
      </h2>
    </div>
  );
}

function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#oferta"
      className="inline-flex min-h-14 items-center justify-center rounded-xl bg-cta-gradient px-7 py-4 text-center text-base font-black uppercase tracking-wide text-success-foreground shadow-premium transition duration-300 hover:-translate-y-1 hover:shadow-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring md:text-lg"
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="aurora-sweep bg-destructive px-4 py-3 text-center text-sm font-bold tracking-wide text-destructive-foreground md:text-base">
        ⚠️ Devido à produção limitada da fórmula líquida, apenas <strong>17</strong> unidades disponíveis hoje
      </div>

      <section className="relative overflow-hidden bg-hero-gradient text-hero-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.08fr_.92fr] md:px-10 md:py-20">
          <div className="reveal-up">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold">
              <i className="h-2 w-2 rounded-full bg-gold" /> Dr. R. Medeiros · Especialista Neurológico
            </span>
            <h1 className="font-display text-6xl leading-[0.88] tracking-normal text-balance md:text-8xl lg:text-9xl">
              <span className="block text-3xl text-hero-foreground/80 md:text-5xl">O que começa como um simples zumbido…</span>
              <span className="block text-gold">PODE PIORAR</span>
              <span className="block">E AFETAR SUA MEMÓRIA</span>
              <span className="block text-3xl text-hero-foreground/60 md:text-5xl">SE VOCÊ NÃO AGIR AGORA</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light text-hero-foreground/78 text-pretty md:text-xl">
              Descubra o protocolo líquido que está ajudando pessoas a <strong className="font-bold text-hero-foreground">silenciar o zumbido, recuperar o equilíbrio e proteger a mente</strong> — antes que os sintomas avancem.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Acima de 35 anos', 'Zumbido constante', 'Tontura e memória'].map((pill) => (
                <span key={pill} className="rounded-full border border-hero-foreground/12 bg-hero-foreground/7 px-4 py-2 text-sm font-semibold text-hero-foreground/86">
                  ✓ {pill}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start gap-4">
              <CtaButton>Quero Parar o Zumbido Agora</CtaButton>
              <div className="flex flex-wrap gap-4 text-sm text-hero-foreground/62">
                <span>🔒 Compra segura</span><span>🚚 Frete grátis</span><span>✅ Garantia 90 dias</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md reveal-up">
            <div className="absolute inset-x-8 bottom-2 h-28 rounded-full bg-gold/25 blur-3xl" />
            <img src={audimaxProduct} alt="Frasco Audimax Pro fórmula líquida" className="relative z-10 mx-auto w-full max-w-[420px] soft-float drop-shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <SectionTitle tag="Atenção" title="Isso pode estar acontecendo" accent="com você" />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {symptoms.map(([title, text]) => (
            <article key={title} className="rounded-xl border bg-card p-7 shadow-premium transition duration-300 hover:-translate-y-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-2xl">!</div>
              <h3 className="mb-3 text-2xl font-extrabold text-primary">{title}</h3>
              <p className="text-base text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-center font-semibold text-primary">
          Esses três sintomas podem ter a mesma raiz — e quanto mais você espera, mais difícil fica retomar sua rotina.
        </p>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-gold">Descoberta</span>
            <h2 className="font-display text-5xl leading-none md:text-7xl">O verdadeiro problema não está no ouvido…</h2>
          </div>
          <div className="space-y-5 text-primary-foreground/72">
            <p>O zumbido pode estar ligado a um processo silencioso que afeta os sinais responsáveis por audição, equilíbrio e memória.</p>
            <p>Essa inflamação não dói, não sangra e não aparece facilmente em exames comuns — mas pode corroer sua paz todos os dias.</p>
            <p className="rounded-xl border border-gold/25 bg-gold/10 p-5 font-semibold text-primary-foreground">O Audimax Pro foi desenvolvido para agir com uma fórmula líquida de tripla ação.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 md:px-10">
        <SectionTitle tag="A fórmula" title="Audimax Pro —" accent="Tripla Ação" />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
          {ingredients.map(([title, text], index) => (
            <article key={title} className="rounded-xl border bg-card p-6 shadow-premium">
              <div className="mb-5 font-display text-5xl text-gold">0{index + 1}</div>
              <h3 className="mb-3 text-xl font-extrabold text-primary">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 rounded-xl bg-primary p-7 text-primary-foreground shadow-premium md:grid-cols-[160px_1fr] md:p-9">
          <div className="font-display text-6xl text-gold">30ml</div>
          <div>
            <h3 className="mb-2 text-2xl font-black">Por que líquido faz toda a diferença</h3>
            <p className="text-primary-foreground/72">São apenas 20 gotas por dia. Uma rotina simples, com ativos em formato líquido para facilitar o uso diário.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <SectionTitle tag="Quem já usou" title="O Silêncio que Voltou." accent="A Vida que Voltou." />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {testimonials.map(([quote, person]) => (
            <figure key={person} className="rounded-xl border bg-card p-7 shadow-premium">
              <div className="mb-4 text-3xl text-gold">★★★★★</div>
              <blockquote className="text-lg font-medium text-primary">“{quote}”</blockquote>
              <figcaption className="mt-5 text-sm font-bold text-muted-foreground">— {person}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-cream px-5 py-20 md:px-10">
        <SectionTitle tag="Modo de uso" title="Simples." accent="20 Gotas por Dia." />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {['Conte 20 gotas', 'Evite extremos', 'Uma vez ao dia'].map((step, index) => (
            <div key={step} className="rounded-xl border bg-card p-7 text-center shadow-premium">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient font-black text-gold-foreground">{index + 1}</div>
              <h3 className="mb-2 text-xl font-extrabold text-primary">{step}</h3>
              <p className="text-sm text-muted-foreground">Use diariamente, de preferência no mesmo horário, com água em temperatura ambiente.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="oferta" className="bg-primary px-5 py-20 text-primary-foreground md:px-10">
        <SectionTitle tag="Escolha o seu pacote" title="Últimas Unidades" accent="Com Desconto" />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.title} className={`relative rounded-xl border p-7 shadow-premium ${plan.featured ? 'border-gold bg-hero-foreground text-foreground md:-translate-y-5' : 'border-primary-foreground/12 bg-primary-foreground/7'}`}>
              <span className="mb-5 inline-flex rounded-full bg-gold-gradient px-3 py-1 text-xs font-black uppercase tracking-wider text-gold-foreground">{plan.badge}</span>
              <h3 className={`text-3xl font-black ${plan.featured ? 'text-primary' : 'text-primary-foreground'}`}>{plan.title}</h3>
              <p className={`mb-6 text-sm ${plan.featured ? 'text-muted-foreground' : 'text-primary-foreground/58'}`}>{plan.subtitle}</p>
              <div className="mb-2 font-display text-6xl text-gold">{plan.price}</div>
              <p className={`mb-7 text-sm ${plan.featured ? 'text-muted-foreground' : 'text-primary-foreground/58'}`}>por frasco</p>
              <CtaButton>Garantir agora ➜</CtaButton>
              <p className={`mt-5 text-sm ${plan.featured ? 'text-muted-foreground' : 'text-primary-foreground/55'}`}>🔒 Frete grátis · Pagamento seguro</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3 text-sm text-primary-foreground/65">
          {['💳 Cartão de Crédito', '📱 Pix', '📄 Boleto Bancário', '📦 Entrega via Correios', '🔒 Ambiente Seguro'].map((item) => <span key={item} className="rounded-full border border-primary-foreground/12 px-4 py-2">{item}</span>)}
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <SectionTitle tag="Tire suas dúvidas" title="Perguntas antes" accent="de Comprar" />
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-xl border bg-card p-5 shadow-premium">
              <summary className="cursor-pointer list-none text-lg font-extrabold text-primary transition group-open:text-gold">{q}</summary>
              <p className="mt-3 text-base text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-hero-gradient px-5 py-20 text-center text-hero-foreground md:px-10">
        <h2 className="mx-auto max-w-3xl font-display text-5xl leading-none md:text-7xl">Recupere Seu Silêncio <span className="text-gold">Antes Que Piore</span></h2>
        <p className="mx-auto mt-5 max-w-2xl text-hero-foreground/62">Quanto mais você espera, mais o problema avança. Garanta hoje seu Audimax Pro com risco zero.</p>
        <div className="mt-8"><CtaButton>Recupere seu silêncio agora</CtaButton></div>
      </section>

      <footer className="bg-primary px-5 py-10 text-center text-xs leading-7 text-primary-foreground/35">
        <p>© Audimax Pro · Produto dispensado de registro conforme RDC 240/2018</p>
        <p>CNPJ 41.453.008/0001-90 · SAC: sac.atendimentond@gmail.com · Atendimento Seg-Sex 9h–18h</p>
        <p>Este produto não é medicamento e não substitui tratamento médico. Resultados podem variar de pessoa para pessoa.</p>
      </footer>

      <a href="#oferta" className="fixed inset-x-0 bottom-0 z-50 bg-cta-gradient px-4 py-4 text-center text-sm font-black uppercase tracking-wide text-success-foreground shadow-premium md:hidden">
        Quero meu silêncio de volta →
      </a>
    </main>
  );
}
