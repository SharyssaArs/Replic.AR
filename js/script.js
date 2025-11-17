/* Arquivo: js/script.js
   Projeto: Replic.AR
*/

// Espera o conteúdo da página carregar antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {

    console.log("Replic.AR Script Carregado!");

    // --- Desafio 1: Reação ao Clique (Aplicado no index.html) ---
    // Objetivo: Mudar um título ao clicar no botão "Saiba Mais".
    
    // 1. Seleciona os elementos
    const btnSaibaMais = document.querySelector("#btnSaibaMais");
    const tituloSobre = document.querySelector("#tituloSobre");

    // 2. Verifica se os elementos existem nesta página
    if (btnSaibaMais && tituloSobre) {
        
        btnSaibaMais.onclick = function(event) {
            // event.preventDefault() impede o link de navegar para outra página
            event.preventDefault(); 
            
            tituloSobre.innerHTML = "Você Clicou no Botão!";
            tituloSobre.style.color = "var(--verde-cyber)"; // Usa a cor da sua paleta
        }
    }


    // --- Desafio 3: Reação ao Mouse (Aplicado no index.html) ---
    // Objetivo: Fazer os cards de produto reagirem ao mouse.
    
    // 1. Seleciona TODOS os cards
    const productCards = document.querySelectorAll(".product-card");

    // 2. Verifica se existem cards nesta página
    if (productCards.length > 0) {
        
        productCards.forEach(function(card) {
            
            // Guarda a cor original da borda (que definimos no CSS)
            const corOriginal = "1px solid var(--roxo-eletrico)";
            const corDestaque = "1px solid var(--verde-cyber)";

            card.onmouseover = function() {
                // Ao passar o mouse, muda a borda para verde
                card.style.border = corDestaque;
            }
            
            card.onmouseout = function() {
                // Ao tirar o mouse, volta para a borda roxa original
                card.style.border = corOriginal;
            }
        });
    }


    // --- Desafio 2: Saudação Personalizada (Aplicado no orcamento.html) ---
    // Objetivo: Mostrar uma saudação enquanto o usuário digita o nome.

    // 1. Seleciona os elementos do formulário de orçamento
    const campoNome = document.querySelector("#nomeUsuario");
    const msgBoasVindas = document.querySelector("#mensagemBoasVindas");

    // 2. Verifica se os elementos existem nesta página
    if (campoNome && msgBoasVindas) {

        // Estiliza o parágrafo da mensagem
        msgBoasVindas.style.color = "var(--verde-cyber)";
        msgBoasVindas.style.fontSize = "1.2rem";
        msgBoasVindas.style.marginTop = "10px";

        campoNome.oninput = function() {
            // Pega o valor que o usuário está digitando
            let nome = campoNome.value;

            if (nome === "") {
                msgBoasVindas.innerHTML = ""; // Limpa a mensagem se o campo estiver vazio
            } else {
                msgBoasVindas.innerHTML = "Olá, " + nome + "! Continue preenchendo seu orçamento.";
            }
        }
    }

});

// Espera o conteúdo da página carregar...
document.addEventListener("DOMContentLoaded", function() {

    /* ... (o seu código dos Desafios 1, 2 e 3 fica aqui) ... */


    // --- CÓDIGO DO MENU HAMBÚRGUER (Desafio Opcional) ---
    
    // 1. Seleciona os elementos
    const menuHamburguer = document.querySelector("#menu-hamburguer");
    const navMenu = document.querySelector("#nav-menu");

    // 2. Verifica se eles existem
    if (menuHamburguer && navMenu) {
        
        // 3. Adiciona o evento de clique ao ícone
        menuHamburguer.onclick = function() {
            // Adiciona ou remove a classe "active" da navegação
            navMenu.classList.toggle("active");
            
            // Opcional: muda o ícone para "X" quando aberto
            if (navMenu.classList.contains("active")) {
                menuHamburguer.innerHTML = "&times;"; // &times; é o "X"
            } else {
                menuHamburguer.innerHTML = "☰"; // Menu hambúrguer
            }
        }
    }
    
});