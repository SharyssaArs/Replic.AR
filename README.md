<div align="center"><img src="img/LogoMarca.png" alt="Logomarca Replic.AR" width="300">   
    <h1>Replic.AR - Action Figures 3D</h1>
</div> 

Integrantes e Papéis
- Sharyssa Araujo - UC25104132: 
1. UX Designer
2. Desenvolvedor Front-End (HTML, CSS, JavaScript)

Sobre o Projeto
- Este é o repositório do site institucional e e-commerce da Replic.AR, uma startup focada na criação e venda de action figures personalizadas e colecionáveis, produzidas com tecnologia de impressão 3D.

Tema
- E-commerce de colecionáveis (Action Figures) com foco em personalização via impressão 3D.

Objetivo
- Desenvolver uma plataforma web atraente e funcional onde os clientes possam comprar itens de coleções pré-definidas (Linhas CORE, PRO e APEX) e solicitar orçamentos para peças 100% personalizadas.

Público-Alvo
- Colecionadores: Entusiastas de cultura pop (animes, games, filmes, quadrinhos) que buscam peças de alta qualidade e design exclusivo.
- Jogadores de RPG: Pessoas que desejam materializar seus personagens de campanhas (ex: Dungeons & Dragons).
- Público Geral: Pessoas em busca de um presente único, criativo e personalizado.

Justificativa do Negócio
- O mercado de colecionáveis está em constante crescimento. A Replic.AR se diferencia ao unir essa paixão com o poder da manufatura aditiva (impressão 3D), oferecendo um nível de personalização que a produção em massa não permite. O modelo de impressão sob demanda também reduz custos de estoque e permite um catálogo de produtos virtualmente infinito.

Estrutura de Pastas e Arquivos
-O projeto está organizado da seguinte maneira para garantir clareza e manutenabilidade:

    /ProjetoIntegrador - Replic.AR - 
    │
    ├── index.html          (Página Inicial / Home)
    ├── produtos.html       (Página de coleções/produtos prontos)
    ├── orcamento.html      (Formulário para encomendas)
    ├── sobre.html          (Página "Sobre Nós" e "Contato")
    │
    ├── css/
    │   └── style.css       (Folha de estilos principal)
    │
    ├── js/
    │   └── script.js       (Arquivo de interatividade JavaScript)
    │
    ├── img/
    │   ├── LogoMarca.png
    │   ├── hero-background.jpg
    │   ├── HornetHollowKnight.jpg
    │   └── ... (todas as outras imagens do site)
    │
    └── README.md           (Este arquivo)

Etapas Realizadas
    Data,Etapa,Responsável
- 14out.2025, Concepção da marca (Naming, Público-Alvo)", Sharyssa A. Rodrigues
- 14out.2025, Design da Identidade Visual (Logo e Paleta), Sharyssa A. Rodrigues
- 14out.2025, Prototipagem de Baixa e Alta Fidelidade (Figma), Sharyssa A. Rodrigues
- 17out.2025, Estruturação Semântica do HTML (Todas as páginas), Sharyssa A.Rodrigues
- 21out.2025, Estilização principal com CSS (index.html), Sharyssa A. Rodrigues
- 05nov.2025, Adição de interatividade (Desafios JavaScript), Sharyssa A. Rodrigues
- 17nov.2025, Implementação do Menu Hambúrguer (Responsivo), Sharyssa A. Rodrigues

Justificativas de Design
- As escolhas de design foram feitas para refletir uma marca moderna, tecnológica e premium, alinhada com o público "gamer" e "geek".

Fontes
- Fonte Principal: Rajdhani (importada do Google Fonts).
- Justificativa: 
    É uma fonte sans-serif com visual geométrico e "quadrado", que remete à tecnologia, ao digital e ao futurismo. Mantém excelente legibilidade para títulos e textos, reforçando a estética tech da marca.

Paleta de Cores
- A paleta é baseada em um dark mode (modo escuro), que é o preferido pelo público-alvo (gamers, entusiastas de tecnologia) e destaca melhor as imagens vibrantes dos produtos.
    Objetivo, Hex, CodeNome, Justificativa 
    2. Fundo #120E1A - Roxo Abissal Cor principal. Um tom de roxo/preto que é sério, profissional e premium.
    3. Cards #2A233D - Grafite Tech Fundo de seções e cards. Cria uma sutil profundidade visual sem competir com o fundo.
    4. Texto #D1CDEB - Névoa Púrpura Cor do texto principal. É um cinza levemente roxo que é suave para os olhos e contrasta bem.
    5. Destaque 1 #00FFA3 - Verde Cyber Cor de destaque (botões, links, títulos de cards). É uma cor "gamer", vibrante, que representa energia e tecnologia.
    6. Destaque 2 #9E46FF - Roxo Elétrico Destaque secundário (bordas, hovers). Complementa o Verde Cyber e reforça a identidade da marca.

Ícones
1. Ícones de Lista (→): A seta usada nas listas de produtos (.product-info li::before) é deliberadamente digital, simples e indica ação/avanço.
2. Menu Hambúrguer (☰): Ícone universal para navegação em dispositivos móveis, garantindo usabilidade intuitiva.

Layout
- O layout foi construído usando uma abordagem Mobile First e tecnologias modernas de CSS para garantir uma experiência de usuário fluida em qualquer dispositivo.
1. display: flex (Flexbox): Usado extensivamente para alinhamentos de uma dimensão, como o cabeçalho (logo + nav), os cards de produto (imagem + info) e a centralização de conteúdo (como na seção hero).
2. display: grid (Grid): Usado para a galeria de projetos, permitindo uma grade responsiva (auto-fit) que se adapta ao número de colunas disponível.
3. Responsividade: O uso de media queries (especialmente em 768px) garante que o layout se adapte, colapsando elementos, centralizando texto e ativando o Menu Hambúrguer para economizar espaço e manter a legibilidade no mobile.
    
Próximos Passos
- O projeto segue em desenvolvimento. As próximas etapas planejadas são:
1. [ ] Estilização completa das páginas produtos.html, orcamento.html e sobre.html.
2. [ ] Otimização de todas as imagens para formatos web (como .webp) para melhorar o tempo de carregamento.
3. [ ] Refatoração do JavaScript para modularização.
4. [ ] Validação "client-side" (com JavaScript) dos campos do formulário de orçamento.
5. [ ] Implementação de um back-end simples (ou serviço de e-mail) para receber os pedidos de orçamento.
6. [ ] Publicação final do site no GitHub Pages.



Projeto Integrador Parte II

1. Revisão e Diagnóstico do Projeto Atual

1.1 O que já está funcionando bem?

- Identidade Visual e Estrutura Principal:

    * A paleta de cores (roxo, verde e tons escuros) está muito bem definida e aplicada de forma consistente usando variáveis CSS (:root).

    * A estrutura semântica com <header>, <main> e <footer> está correta e é usada em todas as páginas.

- Estilização da Página Inicial (index.html):

    * A seção "Hero" está funcionando perfeitamente: o CSS aplica a imagem de fundo (hero-background.jpg) com um overlay escuro, e o conteúdo (.hero-content) é centralizado sobre ela.

    * Os cards de produto (.product-card) estão usando display: flex corretamente para criar o layout de duas colunas (imagem e texto).

    * A galeria de projetos (.gallery-grid) está funcional e responsiva, usando display: grid com auto-fit para se adaptar a diferentes tamanhos de tela.

1.2 Quais elementos HTML se repetem em várias páginas?

- <header>: O cabeçalho é o componente mais repetido. A estrutura contendo o .container, a logo (.logo) e a navegação (<nav>) é idêntica em todos os quatro arquivos HTML.

- <footer>: O rodapé é idêntico e está presente em todas as páginas.

- .product-card: A estrutura do card de produto é reutilizada na index.html e na produtos.html.

- .container: A classe de layout para centralizar o conteúdo é usada em todas as páginas.

1.3 Onde o layout "quebra" ou fica estranho?

- Páginas de Formulário (A Quebra Mais Grave):

    * As páginas orcamento.html e sobre.html estão funcionalmente quebradas.

    * O arquivo css/style.css não possui nenhuma regra para as classes principais dessas páginas (como .quote-page, .quote-form, .form-group, .about-section, .contact-section).

    * Como resultado, elas são renderizadas sem o fundo escuro (--fundo-abissal), com fontes padrão e sem qualquer estilização da sua identidade visual.

- Layout Mobile (Menu):

    * O cabeçalho está quebrado em telas pequenas. A regra CSS @media (max-width: 768px) força o header .container a usar flex-direction: column, o que empilha a logo e o menu, ocupando uma altura excessiva e criando uma péssima experiência (como visto na imagem image_a6321d.jpg).

- HTML Inválido (Atributos de Imagem):

    * Em todos os seus arquivos HTML, você está definindo dimensões fixas nas imagens com um erro de digitação: height=" 300" wight="330".

    * O correto é width. Eles forçam um tamanho fixo e "brigam" com o CSS, quebrando a responsividade.

- HTML Incompleto (Home):

    * Na index.html, a seção .about-teaser está faltando a div da imagem (.about-image).

    * O CSS espera duas colunas (.about-image e .about-text) para aplicar o display: flex, e a ausência de uma delas quebra o layout dessa seção.

1.4 Quais melhorias fariam diferença real para o usuário do pequeno negócio?

- Estilizar os Formulários (Prioridade Máxima):

    * A melhoria mais crítica é adicionar os estilos para os formulários no css/style.css. As ações mais importantes para o negócio (pedir um orçamento e entrar em contato) estão nas páginas orcamento.html e sobre.html. Sem estilo, elas parecem quebradas e não são confiáveis para o usuário.

- Implementar o Menu Hambúrguer (Prioridade Alta):

    * Corrigir o menu mobile é essencial. A maioria dos clientes em potencial (vindos de redes sociais, por exemplo) acessará pelo celular. Se eles não puderem navegar para a página de "Orçamento", o negócio perde clientes.

- Corrigir o HTML:

    * Remover todos os atributos height e wight das tags <img> em todos os arquivos HTML. Isso permitirá que o CSS (max-width: 100%) controle o tamanho das imagens e as torne responsivas.

    * Adicionar a div class="about-image" faltante na index.html para corrigir o layout da seção "Sobre" na página inicial.

- Melhorar a Página de Produtos:

    * Na produtos.html, o CSS define .product-grid para ter apenas uma coluna (grid-template-columns: 1fr;). Isso força o usuário a rolar muito para ver poucos produtos.

    * A melhoria seria mudar essa regra para um grid responsivo (como o da galeria): grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));. Isso exibiria vários produtos lado a lado, melhorando muito a experiência de compra.

2. Modularização do Código HTML

- Cabeçalho (header): Ele é idêntico em todas as quatro páginas.

    * Todos os arquivos (index.html, produtos.html, orcamento.html, sobre.html) usam exatamente o mesmo bloco <header>.

    * A estrutura interna, incluindo div class="container", h1 class="logo", nav id="nav-menu" e div class="menu-hamburguer", é a mesma.

- Menu de navegação (nav): Repete-se exatamente da mesma forma.

    * O bloco <nav id="nav-menu"> e sua lista de links <ul>...</ul> é um componente 100% idêntico em todas as páginas.

- Rodapé (footer): Aparece em todas as páginas e é idêntico.

    * O bloco <footer><p>&copy; 2025...</p></footer> é reutilizado em index.html, produtos.html, orcamento.html e sobre.html.

- Cards de produtos ou serviços: Vários cards com a mesma estrutura.

    * A estrutura <article class="product-card"> é um componente reutilizável.

    * A sua estrutura interna, contendo uma tag <img> e uma div class="product-info" (que por sua vez contém <h3>, <p>, <span class="price">, <ul> e <a class="button">), é a mesma tanto na index.html quanto na produtos.html.

- Seções de contato ou depoimentos: As estruturas dos formulários são muito parecidas.

    * O componente mais reutilizável aqui é o <div class="form-group">, que agrupa um <label> e um <input> (ou textarea, select).

    * A estrutura é usada repetidamente no .contact-form (em sobre.html) e no .quote-form (em orcamento.html).
