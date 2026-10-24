import { FormEvent, useEffect, useMemo, useState } from "react"

const navItems = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Mapa", href: "#mapa" },
  { label: "Método", href: "#metodo" },
  { label: "Acesso", href: "#acesso" },
]

const routes = [
  {
    number: "01",
    title: "Ler o terreno",
    text: "A Hamelin organiza entradas, gastos e hábitos para mostrar o que os números sozinhos escondem.",
    tag: "Clareza",
  },
  {
    number: "02",
    title: "Traçar a rota",
    text: "Sua meta vira um caminho realista, dividido em marcos que cabem na rotina e no orçamento.",
    tag: "Direção",
  },
  {
    number: "03",
    title: "Avançar jogando",
    text: "Pequenas missões semanais mantêm o plano vivo. Você vê progresso, ajusta e segue.",
    tag: "Movimento",
  },
]

const missions = [
  ["Revisar um gasto invisível", "+ 80 pts"],
  ["Criar reserva automática", "+ 120 pts"],
  ["Completar semana consciente", "+ 200 pts"],
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [monthly, setMonthly] = useState(450)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = "Hamelin — Dinheiro em modo aventura"
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (description) {
      description.content =
        "Hamelin transforma metas financeiras em rotas visuais e pequenas missões para a vida real."
    }

    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [])

  const projection = useMemo(
    () => monthly * 12 + Math.round(monthly * 0.07 * 6),
    [monthly],
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email) return
    window.localStorage.setItem("hamelin-early-access", email)
    setSubmitted(true)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Hamelin, início">
          <img src="/hamelin-mascot.png" alt="" />
          <span>HAMELIN</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#acesso">
          Começar <Arrow />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <p>Explore a Hamelin</p>
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <small>0{index + 1}</small>
              {item.label}
              <Arrow />
            </a>
          ))}
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Inteligência financeira que se move com você
            </div>
            <h1>
              Seu dinheiro.
              <br />
              Uma nova <em>aventura.</em>
            </h1>
            <p className="hero-lead">
              Hamelin transforma planos distantes em rotas visuais e pequenas
              missões que você realmente consegue cumprir.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#mapa">
                Criar minha rota <Arrow />
              </a>
              <a className="text-link" href="#como-funciona">
                Descobrir o método <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="trust-row">
              <div className="avatar-stack" aria-hidden="true">
                <span>P</span>
                <span>K</span>
                <span>+</span>
              </div>
              <p>
                <strong>Feito para a vida real</strong>
                <br />
                Sem planilhas impossíveis. Sem culpa.
              </p>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Prévia do mapa financeiro Hamelin"
          >
            <div className="pixel-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <span className="spark spark-one">✦</span>
            <span className="spark spark-two">✦</span>
            <img
              className="hero-mascot"
              src="/hamelin-mascot.png"
              alt="Porquinho mago, mascote da Hamelin"
            />
            <div className="floating-card goal-card">
              <span className="card-kicker">Meta ativa</span>
              <strong>Reserva tranquila</strong>
              <div className="progress-line">
                <span />
              </div>
              <small>68% do caminho</small>
            </div>
            <div className="floating-card streak-card">
              <span className="streak-icon">7</span>
              <p>
                <strong>dias</strong>
                <br />
                na rota
              </p>
            </div>
          </div>
        </div>
        <div className="hero-footer">
          <span>PLANEJE</span>
          <i />
          <span>JOGUE</span>
          <i />
          <span>PROSPERE</span>
        </div>
      </section>

      <section className="statement section-pad" id="como-funciona">
        <div className="section-label">
          <span>01</span>Uma ideia diferente
        </div>
        <div className="statement-content">
          <p className="statement-kicker">
            Dinheiro não deveria parecer castigo.
          </p>
          <h2>
            Não é mais um app que aponta erros. É um <em>mapa vivo</em> para o
            futuro que você quer.
          </h2>
          <div className="statement-note">
            <span className="note-line" />
            <p>
              Hamelin combina comportamento, visualização e ritmo. Em vez de
              vigiar cada centavo, ajuda você a tomar a próxima boa decisão.
            </p>
          </div>
        </div>
      </section>

      <section className="routes section-pad">
        <div className="route-list">
          {routes.map((route) => (
            <article className="route-item" key={route.number}>
              <span className="route-number">{route.number}</span>
              <div>
                <span className="route-tag">{route.tag}</span>
                <h3>{route.title}</h3>
                <p>{route.text}</p>
              </div>
              <span className="route-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="map-section section-pad" id="mapa">
        <div className="map-intro">
          <div className="section-label light">
            <span>02</span>Seu mapa
          </div>
          <h2>
            Um plano que você
            <br />
            consegue <em>enxergar.</em>
          </h2>
          <p>
            Ajuste o valor mensal e veja sua rota ganhar forma. Esta prévia
            mostra como uma intenção se transforma em progresso mensurável.
          </p>
        </div>
        <div className="dashboard">
          <div className="dash-top">
            <div className="mini-brand">
              <img src="/hamelin-mascot.png" alt="" />
              HAMELIN / MAPA
            </div>
            <span>PRÉVIA INTERATIVA</span>
          </div>
          <div className="dash-grid">
            <div className="projection-card">
              <span>Projeção em 12 meses</span>
              <strong>
                {projection.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
              <div className="chart" aria-hidden="true">
                {[18, 28, 25, 39, 48, 45, 62, 69, 78, 74, 88, 100].map(
                  (height, index) => (
                    <i key={index} style={{ height: `${height}%` }} />
                  ),
                )}
              </div>
              <label htmlFor="monthly">
                Quanto quer guardar por mês?
                <b>
                  {monthly.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </b>
              </label>
              <input
                id="monthly"
                type="range"
                min="100"
                max="2000"
                step="50"
                value={monthly}
                onChange={(event) => setMonthly(Number(event.target.value))}
              />
            </div>
            <div className="mission-card">
              <div className="mission-head">
                <span>Missões da semana</span>
                <b>2/3</b>
              </div>
              {missions.map(([name, points], index) => (
                <div
                  className={`mission ${index < 2 ? "done" : ""}`}
                  key={name}
                >
                  <span className="check">{index < 2 ? "✓" : ""}</span>
                  <p>{name}</p>
                  <small>{points}</small>
                </div>
              ))}
              <div className="level">
                <span>NÍVEL 04</span>
                <div>
                  <i />
                </div>
                <b>720 XP</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="method section-pad" id="metodo">
        <div className="method-copy">
          <div className="section-label">
            <span>03</span>Método Hamelin
          </div>
          <h2>
            Tecnologia no fundo.
            <br />
            <em>Leveza na frente.</em>
          </h2>
          <p>
            O sistema aprende com o seu ritmo e sugere ajustes possíveis —
            sempre com você no controle das decisões.
          </p>
          <a className="text-link dark" href="#acesso">
            Quero experimentar <Arrow />
          </a>
        </div>
        <div className="method-cards">
          <article className="method-card featured">
            <span className="method-index">A</span>
            <div className="mini-orbit">
              <i />
              <b>HAMELIN</b>
            </div>
            <h3>Ritmo adaptativo</h3>
            <p>
              Se a vida muda, a rota muda junto. Sem transformar um imprevisto
              em fracasso.
            </p>
          </article>
          <article className="method-card">
            <span className="method-index">B</span>
            <div className="bars" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <h3>Progresso legível</h3>
            <p>
              Você entende onde está, o que melhorou e qual é a próxima ação
              mais inteligente.
            </p>
          </article>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-mark">P</div>
        <p>Uma pequena decisão hoje.</p>
        <h2>
          Um futuro inteiro
          <br />
          muda de direção.
        </h2>
        <img src="/hamelin-mascot.png" alt="" />
      </section>

      <section className="access section-pad" id="acesso">
        <div className="access-copy">
          <div className="section-label light">
            <span>04</span>Primeiros exploradores
          </div>
          <h2>
            Sua próxima fase
            <br />
            pode começar <em>agora.</em>
          </h2>
        </div>
        <div className="access-form-wrap">
          {submitted ? (
            <div className="success-message" role="status">
              <span>✓</span>
              <div>
                <strong>Você entrou para a primeira jornada.</strong>
                <p>
                  Salvamos seu interesse neste dispositivo. A aventura está só
                  começando.
                </p>
              </div>
            </div>
          ) : (
            <>
              <p>
                Entre na lista de acesso antecipado e acompanhe os próximos
                capítulos da Hamelin.
              </p>
              <form onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="email">
                  Seu melhor e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Seu melhor e-mail"
                  required
                />
                <button type="submit">
                  Reservar acesso <Arrow />
                </button>
              </form>
              <small>
                Sem spam. Só novidades importantes sobre o lançamento.
              </small>
            </>
          )}
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/hamelin-mascot.png" alt="" />
          <span>HAMELIN</span>
        </div>
        <p>Dinheiro em modo aventura.</p>
        <div className="footer-links">
          <a href="#inicio">Voltar ao topo ↑</a>
          <a href="mailto:oi@hamelin.app">Contato</a>
        </div>
        <small>
          © {new Date().getFullYear()} Hamelin. Conceito em desenvolvimento.
        </small>
      </footer>
    </main>
  )
}
