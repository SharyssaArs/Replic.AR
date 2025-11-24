<div align="center">
   <img src="img/LogoMarca.png" alt="Logomarca Replic.AR" width="300">
   <h1>Replic.AR - Action Figures 3D</h1>
   
   <p>
      <strong>Link do Projeto (GitHub Pages):</strong><br>
      <a href="#">[LINK_DO_SEU_GITHUB_PAGES_AQUI]</a>
   </p>
</div>

---

## Integrantes e Papéis

* **Sharyssa Araujo** - UC25104132:
    * UX Designer (Prototipagem e Identidade Visual)
    * Desenvolvedora Front-End (HTML, CSS, JavaScript)

---

## Sobre o Projeto

Este é o repositório do site institucional e e-commerce da **Replic.AR**, uma startup fictícia focada na criação e venda de action figures personalizadas e colecionáveis, produzidas com tecnologia de impressão 3D.

### Descrição do Negócio
O mercado de colecionáveis está em constante crescimento. A Replic.AR se diferencia ao unir essa paixão com o poder da manufatura aditiva (impressão 3D), oferecendo um nível de personalização que a produção em massa não permite. O modelo de impressão sob demanda também reduz custos de estoque e permite um catálogo de produtos virtualmente infinito.

* **Objetivo:** Desenvolver uma plataforma web atraente e funcional onde os clientes possam comprar itens de coleções pré-definidas (Linhas CORE, PRO e APEX) e solicitar orçamentos para peças 100% personalizadas.
* **Público-Alvo:** Colecionadores, jogadores de RPG e entusiastas da cultura pop (geek/gamer).

---

### Decisões de Design (Identidade Visual)

| Elemento | Escolha | Justificativa |
| :--- | :--- | :--- |
| **Fonte** | `Rajdhani` | Sans-serif geométrica que remete à tecnologia e futurismo. |
| **Cor Fundo** | `#120E1A` (Roxo Abissal) | Tom escuro "Dark Mode", ideal para o público gamer e para destacar produtos. |
| **Cor Destaque** | `#00FFA3` (Verde Cyber) | Cor vibrante de energia, usada em botões e chamadas para ação. |
| **Layout** | Mobile First | Foco na experiência em dispositivos móveis, com menu hambúrguer e grids adaptáveis. |

---

## Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Estilização, Flexbox, Grid Layout, Variáveis (`:root`) e Media Queries.
* **JavaScript (ES6+):** Manipulação do DOM, `fetch` API para componentes e validação de formulários.
* **Git/GitHub:** Versionamento de código.

---

## Estrutura de Pastas

O projeto segue uma organização clara para facilitar a manutenção e escalabilidade:

```text
/ProjetoIntegrador-Replic.AR
│
├── index.html          # Página Inicial / Home
├── produtos.html       # Página de coleções e produtos
├── orcamento.html      # Formulário para encomendas personalizadas
├── sobre.html          # Página institucional e contato
│
├── css/
│   └── style.css       # Folha de estilos principal (variáveis, layout, reset)
│
├── js/
│   ├── script.js       # Lógica principal (menu, validações)
│   ├── componentes.js  # Script para carregar header/footer dinamicamente
│   └── componentes/    # Pasta com fragmentos de HTML reutilizáveis
│       ├── header.html
│       └── footer.html
│
├── img/                # Imagens do projeto (otimizadas)
│   ├── LogoMarca.png
│   ├── hero-background.jpg
│   └── ...
│
└── README.md           # Documentação do projeto