# Projeto Integrador: Website "BiDUME" 🐾

Projeto de desenvolvimento front-end para a disciplina `DESENVOLVIMENTO FRONT END - GPE02M20110_4`. O objetivo foi planejar, prototipar e desenvolver um site estático vendável para um pequeno negócio real, utilizando HTML5 e CSS3, e publicá-lo com GitHub Pages.

**Link do Site Publicado:** [https://sharyssaars.github.io/projeto-bidume/]

---

## 1. Integrantes e Papéis

* **[Sharyssa Silva - UC25104132]** - (Desenvolvedor Front-end, UI/UX Designer)

---

## 2. O Negócio Escolhido

* **Nome do Negócio:** BiDUME - Impressão 3D para Pets
* **Tema:** E-commerce / Site Institucional para um ateliê de produtos pet personalizados.

### Objetivo do Site
Criar uma presença online profissional e amigável para a "BiDUME", funcionando como uma vitrine digital (portfólio) e um principal canal de captação de clientes, direcionando-os para o contato (WhatsApp) para encomendas personalizadas.

### Público-Alvo
"Pet lovers" (donos de cães e gatos), principalmente jovens adultos (20-40 anos), que buscam itens únicos, personalizados e afetuosos para seus animais de estimação e para si mesmos (como chaveiros).

### Potencial de Negócio
O mercado pet é um dos que mais cresce, e a busca por produtos personalizados é uma tendência forte. Um site profissional aumenta a credibilidade da marca, que hoje pode depender apenas do Instagram, permitindo um alcance maior e centralizando informações (produtos, quem somos, contato) de forma clara.

---

## 3. Planejamento Visual e Justificativas de Design

O design foi planejado para refletir a identidade visual "arredondada, divertida e amigável" da marca.

* **Link para o Protótipo no Figma:** [https://www.figma.com/]

### Paleta de Cores

Foram utilizadas duas paletas de forma harmônica: a paleta original da marca (para o logo) e uma paleta de "uso no site" (para a interface).

| Elemento | Cor | Justificativa |
| :--- | :--- | :--- |
| **Logo (Original)** | `#F6872D` (Laranja) | Mantém a identidade original da marca, trazendo energia e diversão. |
| **Logo (Original)** | `#3FC3C9` (Azul Piscina) | Cor amigável que complementa o laranja, também parte da ID original. |
| **Fundo Geral** | `#F9F5EC` (Creme) | Cor de fundo original da marca. É um tom quente e suave, que serve como uma "tela" confortável para os outros elementos. |
| **Botões / Ações** | `#C5E4C1` (Verde Pastel) | Cor primária do site. O verde remete à natureza e segurança, e o tom pastel é suave e moderno. Usado para botões de ação (CTAs). |
| **Hover dos Botões** | `#A6CCA1` (Verde Médio) | Garante feedback visual claro ao usuário. |
| **Detalhes / Links** | `#8B9E84` (Verde Musgo) | Cor secundária, usada em links e ícones. Tem ótimo contraste com o fundo creme e complementa o verde principal. |
| **Textos / Títulos** | `#2E2E2E` (Preto Suave) | Usado para títulos e textos importantes. É mais suave que o preto puro (`#000`), melhorando o conforto de leitura. |
| **Texto Principal** | `#5A5A5A` (Cinza Escuro) | Usado para parágrafos. Oferece excelente legibilidade sem ser tão "duro" quanto o preto. |
| **Destaques** | `#F4CBAA` (Laranja Pastel) | Cor opcional usada em seções de destaque/promoção, criando um ponto de calor visual que atrai o olhar. |

### Tipografia

* **Fonte dos Títulos (`'Nunito'`):**
    * **Justificativa:** Escolhemos a Nunito por suas terminações arredondadas. Ela se alinha perfeitamente à identidade "divertida e amigável" do logo, dando um ar moderno e acessível aos títulos.
* **Fonte dos Textos (`'Lato'`):**
    * **Justificativa:** Para o corpo do texto, a Lato oferece excelente legibilidade em diversos tamanhos. É uma fonte limpa, moderna e humanista, que equilibra a personalidade da Nunito sem cansar a leitura.

### Layout e Componentes

* **Cabeçalho Fixo (Sticky):** O menu permanece visível durante a rolagem, melhorando a navegação e o acesso às páginas principais (Home, Sobre, Contato) sem esforço.
* **Hero Section (Banner):** A primeira seção da Home usa uma imagem de pets em tela cheia com um *overlay* escuro. Isso cria uma conexão emocional imediata com o público-alvo e permite que o texto de chamada se destaque com clareza.
* **Cards de Produto:** Os produtos são apresentados em um grid limpo. Ao passar o mouse, um efeito sutil de `transform: translateY` e uma sombra mais pronunciada dão feedback interativo, incentivando o clique.
* **Ícones (Font Awesome):** O uso de ícones no rodapé e na página de contato (WhatsApp, Instagram, Email) facilita o reconhecimento rápido das ações e torna a interface mais profissional.

---

## 4. Estrutura de Pastas

O projeto segue uma estrutura semântica e organizada:

/projeto-site-bidume/ | |-- index.html (Página Home) |-- sobre.html (Página Sobre) |-- contato.html (Página Contato) | |-- /css/ | |-- style.css (Arquivo de estilos principal) | |-- /img/ | |-- logo-bidume.png | |-- hero-background.jpg | |-- plaquinha-identificacao.jpg | |-- chaveiro-pet.jpg | |-- (outras imagens...) | |-- README.md (Este arquivo)

---

## 5. Etapas Realizadas

| Data | Responsável(is) | Etapa Concluída |
| :--- | :--- | :--- |
| [Data] | [Nomes] | 1. Definição do tema, escopo, público-alvo e páginas. |
| [Data] | [Nomes] | 2. Planejamento visual, escolha de cores e tipografia. |
| [Data] | [Nomes] | 3. Desenvolvimento do esqueleto HTML semântico. |
| [Data] | [Nomes] | 3. Estilização principal em CSS (Header, Footer, Hero, Cards). |
| [Data] | [Nomes] | 3. Refinamento de design (efeitos de hover, ícones, responsividade básica). |
| [Data] | [Nomes] | 4. Versionamento com Git e publicação no GitHub Pages. |
| [Data] | [Nomes] | 5. Documentação do projeto (README.md). |

---

## 6. Próximos Passos

Embora o MVP (Produto Mínimo Viável) esteja completo, o projeto tem potencial para futuras melhorias:

* [ ] Implementar responsividade avançada para *mobile*.
* [ ] Criar uma página de "Galeria" com mais fotos de produtos.
* [ ] Adicionar um formulário de contato funcional (usando uma solução back-end como Formspree ou Netlify Forms).
* [ ] Otimizar imagens para melhor performance (WebP).