import { useEffect, useState } from "react"

const navItems = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Agentes", href: "#agentes" },
  { label: "Squads e integrações", href: "#squads" },
]

const benefits = [
  {
    number: "01",
    title: "Uma direção, três especialidades",
    text: "Estratégia, execução e revisão assumem responsabilidades diferentes dentro de uma única missão.",
    tag: "Coordenação",
  },
  {
    number: "02",
    title: "Menos contexto perdido",
    text: "Transferências estruturadas preservam objetivos, critérios e decisões entre as etapas do fluxo.",
    tag: "Contexto",
  },
  {
    number: "03",
    title: "Fluxos coordenados",
    text: "Planejamento, produção e validação permanecem organizados em uma sequência compreensível.",
    tag: "Orquestração",
  },
  {
    number: "04",
    title: "Mais visibilidade",
    text: "Acompanhe qual agente atua em cada tarefa e quais resultados ainda precisam de revisão humana.",
    tag: "Controle",
  },
]

const agents = [
  {
    id: "estrategia",
    number: "01",
    name: "Estratégia",
    role: "Planeja a missão",
    description:
      "Interpreta o objetivo, identifica dependências e organiza o trabalho antes da produção.",
    responsibilities: [
      "Estruturar o plano de ação",
      "Definir critérios de sucesso",
      "Mapear dependências e riscos",
    ],
    example:
      "Exemplo: definir a arquitetura, o conteúdo e os critérios de conversão de uma landing page.",
  },
  {
    id: "execucao",
    number: "02",
    name: "Execução",
    role: "Constrói a entrega",
    description:
      "Recebe o plano e transforma tarefas estruturadas em uma entrega concreta e verificável.",
    responsibilities: [
      "Produzir os artefatos definidos",
      "Registrar decisões de implementação",
      "Sinalizar bloqueios durante a missão",
    ],
    example:
      "Exemplo: desenvolver a interface responsiva seguindo a arquitetura e os critérios aprovados.",
  },
  {
    id: "revisao",
    number: "03",
    name: "Revisão",
    role: "Verifica o resultado",
    description:
      "Analisa a entrega, identifica problemas e devolve ajustes para manter o objetivo original.",
    responsibilities: [
      "Conferir critérios e requisitos",
      "Testar código, navegação e experiência",
      "Solicitar correções quando necessário",
    ],
    example:
      "Exemplo: validar responsividade, acessibilidade e consistência antes da entrega final.",
  },
]

const squads = [
  {
    name: "Web Development",
    mission: "Coordenar agentes para desenvolvimento de software.",
    roles: "Arquitetura · Interface · QA",
    result: "Interface responsiva revisada",
  },
  {
    name: "Research & Intelligence",
    mission: "Mapear um novo mercado.",
    roles: "Pesquisa · Síntese · Validação",
    result: "Relatório com fontes e riscos",
  },
  {
    name: "Automation",
    mission: "Estruturar uma automação com IA.",
    roles: "Processo · Implementação · Teste",
    result: "Automação documentada",
  },
  {
    name: "Content Studio",
    mission: "Produzir uma campanha editorial.",
    roles: "Direção · Produção · Edição",
    result: "Pacote de conteúdo revisado",
  },
  {
    name: "Data Analysis",
    mission: "Investigar um conjunto de dados.",
    roles: "Hipótese · Análise · Auditoria",
    result: "Leitura crítica dos resultados",
  },
  {
    name: "Code Review",
    mission: "Avaliar uma implementação.",
    roles: "Escopo · Inspeção · Verificação",
    result: "Parecer técnico priorizado",
  },
]

const integrations = [
  { name: "Claude", status: "Planejada" },
  { name: "OpenAI", status: "Planejada" },
  { name: "Gemini", status: "Planejada" },
  { name: "Ollama", status: "Em estudo" },
  { name: "OpenCode", status: "Em estudo" },
]

const demoSteps = [
  {
    name: "Estratégia",
    status: "Concluída",
    summary: "Define a arquitetura, organiza o conteúdo e registra os critérios de sucesso.",
    output: "Plano da missão + critérios",
  },
  {
    name: "Execução",
    status: "Em simulação",
    summary: "Produz a interface a partir do plano e compartilha decisões com a próxima etapa.",
    output: "Interface responsiva",
  },
  {
    name: "Revisão",
    status: "Aguardando",
    summary: "Verifica navegação, código, responsividade e experiência antes da entrega.",
    output: "Relatório de validação",
  },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function ensureMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement("meta")
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) =>
    element?.setAttribute(key, value),
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeAgent, setActiveAgent] = useState(0)
  const [activeDemoStep, setActiveDemoStep] = useState(1)

  useEffect(() => {
    document.title = "HAMELIN | Orquestração de Agentes de IA"
    const description =
      "Conheça HAMELIN, uma plataforma em desenvolvimento para coordenar agentes de IA em fluxos de estratégia, execução e revisão."
    ensureMeta('meta[name="description"]', {
      name: "description",
      content: description,
    })
    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: "HAMELIN | Orquestração de Agentes de IA",
    })
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    })
    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    })
    ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: "/hamelin-mascot.png",
    })

    const initialHash = window.location.hash
    const scrollFrame = window.requestAnimationFrame(() => {
      if (initialHash) {
        const target = document.querySelector<HTMLElement>(initialHash)
        if (target) {
          window.scrollTo(0, target.offsetTop - 82)
        }
      }
    })
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", close)
    return () => {
      window.cancelAnimationFrame(scrollFrame)
      window.removeEventListener("keydown", close)
    }
  }, [])

  const selectedAgent = agents[activeAgent]
  const selectedDemoStep = demoSteps[activeDemoStep]

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="HAMELIN, início">
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
        <a className="header-cta" href="#demonstracao">
          Explorar HAMELIN <Arrow />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <div
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          id="mobile-navigation"
        >
          <p>Explore a HAMELIN</p>
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
          <a href="#demonstracao" onClick={() => setMenuOpen(false)}>
            <small>05</small>
            Demonstração
            <Arrow />
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Orquestração de agentes de IA
            </div>
            <h1>
              Você define o objetivo.
              <br />
              <em>HAMELIN</em> conduz os agentes.
            </h1>
            <p className="hero-lead">
              Transforme uma ideia em um fluxo coordenado de estratégia,
              execução e revisão. Três agentes especializados, um maestro e uma
              única direção.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#demonstracao">
                Explorar a HAMELIN <Arrow />
              </a>
              <a className="text-link" href="#agentes">
                Conhecer os agentes <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="trust-row">
              <div className="avatar-stack" aria-hidden="true">
                <span>E</span>
                <span>X</span>
                <span>R</span>
              </div>
              <p>
                <strong>Uma direção compartilhada</strong>
                <br />
                Estratégia · Execução · Revisão
              </p>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Representação visual do maestro HAMELIN coordenando três agentes"
          >
            <div className="pixel-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <span className="spark spark-one">✦</span>
            <span className="spark spark-two">✦</span>
            <img
              className="hero-mascot"
              src="/hamelin-mascot.png"
              alt="Mascote pixel art da HAMELIN representando o maestro central"
            />
            <div className="floating-card goal-card">
              <span className="card-kicker">Missão em andamento</span>
              <strong>Revisão de entrega</strong>
              <div className="progress-line">
                <span />
              </div>
              <small>Simulação · etapa 03 de 03</small>
            </div>
            <div className="floating-card streak-card">
              <span className="streak-icon">03</span>
              <p>
                <strong>agentes</strong>
                <br />
                conectados
              </p>
            </div>
          </div>
        </div>
        <div className="hero-footer">
          <span>ESTRATÉGIA</span>
          <i />
          <span>EXECUÇÃO</span>
          <i />
          <span>REVISÃO</span>
        </div>
      </section>

      <section className="statement section-pad" id="como-funciona">
        <div className="section-label">
          <span>01</span>Como funciona
        </div>
        <div className="statement-content">
          <p className="statement-kicker">
            Uma única direção para múltiplos agentes inteligentes.
          </p>
          <h2>
            Não basta ativar agentes. É preciso fazê-los trabalhar como uma{" "}
            <em>orquestra.</em>
          </h2>
          <div className="statement-note">
            <span className="note-line" />
            <p>
              O maestro HAMELIN recebe o objetivo, distribui responsabilidades
              e mantém o contexto compartilhado entre planejamento, produção e
              validação.
            </p>
          </div>
        </div>
      </section>

      <section className="routes section-pad" id="beneficios">
        <div className="route-list">
          {benefits.map((benefit) => (
            <article className="route-item" key={benefit.number}>
              <span className="route-number">{benefit.number}</span>
              <div>
                <span className="route-tag">{benefit.tag}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
              <span className="route-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="map-section section-pad" id="agentes">
        <div className="map-intro">
          <div className="section-label light">
            <span>02</span>Os três agentes
          </div>
          <h2>
            Especialidades distintas.
            <br />
            <em>Contexto compartilhado.</em>
          </h2>
          <p>
            Selecione um agente para conhecer seu papel dentro da missão. A
            coordenação proposta mantém cada responsabilidade clara.
          </p>
        </div>

        <div className="dashboard agent-dashboard">
          <div className="dash-top">
            <div className="mini-brand">
              <img src="/hamelin-mascot.png" alt="" />
              HAMELIN / AGENTES
            </div>
            <span>VISÃO CONCEITUAL</span>
          </div>
          <div
            className="agent-tabs"
            role="tablist"
            aria-label="Agentes HAMELIN"
          >
            {agents.map((agent, index) => (
              <button
                key={agent.id}
                id={`agent-tab-${agent.id}`}
                type="button"
                role="tab"
                aria-selected={activeAgent === index}
                aria-controls="agent-panel"
                className={activeAgent === index ? "is-active" : ""}
                onClick={() => setActiveAgent(index)}
              >
                <small>{agent.number}</small>
                <strong>{agent.name}</strong>
                <span>{agent.role}</span>
              </button>
            ))}
          </div>
          <div
            className="dash-grid"
            id="agent-panel"
            role="tabpanel"
            aria-labelledby={`agent-tab-${selectedAgent.id}`}
          >
            <div className="projection-card agent-detail">
              <span>Responsabilidade na orquestra</span>
              <strong>{selectedAgent.name}</strong>
              <p>{selectedAgent.description}</p>
              <div className="agent-flow" aria-hidden="true">
                {agents.map((agent, index) => (
                  <i
                    key={agent.id}
                    className={index === activeAgent ? "is-active" : ""}
                  >
                    {agent.number}
                  </i>
                ))}
              </div>
              <div className="agent-example">
                <span>Aplicação de exemplo</span>
                <p>{selectedAgent.example}</p>
              </div>
            </div>
            <div className="mission-card">
              <div className="mission-head">
                <span>Responsabilidades</span>
                <b>{selectedAgent.number}/03</b>
              </div>
              {selectedAgent.responsibilities.map((item, index) => (
                <div className="mission done" key={item}>
                  <span className="check">{index + 1}</span>
                  <p>{item}</p>
                  <small>ESCOPO</small>
                </div>
              ))}
              <div className="level">
                <span>CONTEXTO COMPARTILHADO</span>
                <div>
                  <i />
                </div>
                <b>MAESTRO ATIVO</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="squads section-pad" id="squads">
        <div className="squads-head">
          <div>
            <div className="section-label">
              <span>03</span>Squads
            </div>
            <h2>
              Uma orquestra para
              <br />
              cada tipo de <em>missão.</em>
            </h2>
          </div>
          <div className="squads-note">
            <span>APLICAÇÕES CONCEITUAIS</span>
            <p>
              Estes squads de inteligência artificial demonstram configurações
              possíveis da proposta HAMELIN. Não representam módulos comerciais
              disponíveis hoje.
            </p>
          </div>
        </div>
        <div className="squad-grid">
          {squads.map((squad, index) => (
            <article className={`squad-card ${index === 0 ? "featured" : ""}`} key={squad.name}>
              <span className="method-index">0{index + 1}</span>
              <div className="squad-status">CONCEITO</div>
              <h3>{squad.name}</h3>
              <p className="squad-mission">{squad.mission}</p>
              <dl>
                <div>
                  <dt>Três papéis</dt>
                  <dd>{squad.roles}</dd>
                </div>
                <div>
                  <dt>Resultado esperado</dt>
                  <dd>{squad.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="method section-pad" id="integracoes">
        <div className="method-copy">
          <div className="section-label">
            <span>04</span>Integrações
          </div>
          <h2>
            Conecte sua assinatura.
            <br />
            <em>Conecte seu agente.</em>
          </h2>
          <p>
            A proposta é permitir que diferentes modelos e ferramentas
            participem de uma missão sob a mesma direção, sem esconder qual
            agente executa cada etapa.
          </p>
          <a className="text-link dark" href="#demonstracao">
            Ver missão simulada <Arrow />
          </a>
        </div>
        <div className="integration-panel">
          <div className="integration-head">
            <span>MAPA DE INTEGRAÇÕES</span>
            <b>NENHUMA INTEGRAÇÃO PÚBLICA NO PROTÓTIPO</b>
          </div>
          <div className="integration-list">
            {integrations.map((integration, index) => (
              <div className="integration-item" key={integration.name}>
                <span>0{index + 1}</span>
                <strong>{integration.name}</strong>
                <small
                  className={
                    integration.status === "Planejada"
                      ? "status-planned"
                      : "status-study"
                  }
                >
                  {integration.status}
                </small>
              </div>
            ))}
          </div>
          <p>
            A conexão, autenticação e disponibilidade de cada provedor dependem
            da evolução técnica e dos termos de cada serviço.
          </p>
        </div>
      </section>

      <section className="map-section demo-section section-pad" id="demonstracao">
        <div className="map-intro">
          <div className="section-label light">
            <span>05</span>Demonstração
          </div>
          <h2>
            Uma missão.
            <br />
            <em>Três movimentos.</em>
          </h2>
          <p>
            Simulação visual de um fluxo para criar uma landing page. Não há
            processamento real de IA nesta demonstração.
          </p>
        </div>
        <div className="dashboard demo-dashboard">
          <div className="dash-top">
            <div className="mini-brand">
              <img src="/hamelin-mascot.png" alt="" />
              HAMELIN / MISSÃO 001
            </div>
            <span>SIMULAÇÃO INTERATIVA</span>
          </div>
          <div className="demo-objective">
            <span>OBJETIVO</span>
            <strong>Criar uma landing page</strong>
            <small>Estado demonstrativo · sem execução de IA</small>
          </div>
          <div className="demo-step-controls" role="tablist" aria-label="Etapas da missão simulada">
            {demoSteps.map((step, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeDemoStep === index}
                aria-controls="demo-step-panel"
                id={`demo-step-${index}`}
                className={activeDemoStep === index ? "is-active" : ""}
                onClick={() => setActiveDemoStep(index)}
                key={step.name}
              >
                <span>0{index + 1}</span>
                <strong>{step.name}</strong>
                <small>{step.status}</small>
              </button>
            ))}
          </div>
          <div
            className="demo-output"
            id="demo-step-panel"
            role="tabpanel"
            aria-labelledby={`demo-step-${activeDemoStep}`}
          >
            <div>
              <span>AGENTE SELECIONADO</span>
              <h3>{selectedDemoStep.name}</h3>
              <p>{selectedDemoStep.summary}</p>
            </div>
            <div className="output-card">
              <span>SAÍDA ESPERADA</span>
              <strong>{selectedDemoStep.output}</strong>
              <small>{selectedDemoStep.status}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-mark">H</div>
        <p>Uma direção. Múltiplas inteligências.</p>
        <h2>
          Pare de gerenciar agentes isolados.
          <br />
          Comece a conduzir uma orquestra.
        </h2>
        <img src="/hamelin-mascot.png" alt="" />
      </section>

      <section className="access section-pad" id="acesso">
        <div className="access-copy">
          <div className="section-label light">
            <span>06</span>Próximo movimento
          </div>
          <h2>
            Uma missão.
            <br />
            Uma direção. <em>HAMELIN.</em>
          </h2>
        </div>
        <div className="access-form-wrap closing-cta">
          <p>
            HAMELIN reúne estratégia, execução e revisão sob uma direção.
            Conheça a proposta e acompanhe sua evolução.
          </p>
          <a className="button button-primary" href="#demonstracao">
            Conhecer a HAMELIN <Arrow />
          </a>
          <a className="text-link" href="mailto:oi@hamelin.app?subject=Quero%20acompanhar%20a%20HAMELIN">
            Falar com a equipe <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/hamelin-mascot.png" alt="" />
          <span>HAMELIN</span>
        </div>
        <p>Uma única direção para múltiplos agentes inteligentes.</p>
        <div className="footer-links">
          <a href="#inicio">Voltar ao topo ↑</a>
          <a href="mailto:oi@hamelin.app">Contato</a>
        </div>
        <small>
          © {new Date().getFullYear()} HAMELIN. Plataforma em desenvolvimento.
        </small>
      </footer>
    </main>
  )
}
