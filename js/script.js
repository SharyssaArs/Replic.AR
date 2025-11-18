/* Arquivo: js/script.js
   Projeto: Replic.AR
*/

// UNIFICADO: Espera o conteúdo da página carregar APENAS UMA VEZ
document.addEventListener("DOMContentLoaded", function() {

    console.log("Replic.AR Script Carregado!");

    // --- Desafio 1: Reação ao Clique (Aplicado no index.html) ---
    const btnSaibaMais = document.querySelector("#btnSaibaMais");
    const tituloSobre = document.querySelector("#tituloSobre");

    if (btnSaibaMais && tituloSobre) {
        btnSaibaMais.onclick = function(event) {
            event.preventDefault(); 
            tituloSobre.innerHTML = "Você Clicou no Botão!";
            tituloSobre.style.color = "var(--verde-cyber)";
        }
    }

    /* --- Desafio 3: REMOVIDO ---
       Este efeito é melhor feito em CSS.
       O CSS em style.css (linha 224) já tem um .product-card:hover.
       Vamos adicionar a borda lá.
    */

    // --- Desafio 2: Saudação Personalizada (Aplicado no orcamento.html) ---
    const campoNome = document.querySelector("#nomeUsuario");
    const msgBoasVindas = document.querySelector("#mensagemBoasVindas");

    if (campoNome && msgBoasVindas) {
        msgBoasVindas.style.color = "var(--verde-cyber)";
        msgBoasVindas.style.fontSize = "1.2rem";
        msgBoasVindas.style.marginTop = "10px";

        campoNome.oninput = function() {
            let nome = campoNome.value;
            if (nome === "") {
                msgBoasVindas.innerHTML = "";
            } else {
                msgBoasVindas.innerHTML = "Olá, " + nome + "! Continue preenchendo seu orçamento.";
            }
        }
    }

    // --- CÓDIGO DO MENU HAMBÚRGUER (JÁ ESTÁ FUNCIONAL) ---
    const menuHamburguer = document.querySelector("#menu-hamburguer");
    const navMenu = document.querySelector("#nav-menu");

    if (menuHamburguer && navMenu) {
        menuHamburguer.onclick = function() {
            navMenu.classList.toggle("active");
            if (navMenu.classList.contains("active")) {
                menuHamburguer.innerHTML = "&times;"; // "X"
            } else {
                menuHamburguer.innerHTML = "☰"; // "Hambúrguer"
            }
        }
    }

    // --- NOVO: Validação do Formulário de Orçamento ---
    const formOrcamento = document.querySelector("#formOrcamento");

    if (formOrcamento) {
        formOrcamento.onsubmit = function(event) {
            
            // Pega os campos que você quer validar
            const nome = document.querySelector("#nomeUsuario");
            const email = document.querySelector("#email");
            const descricao = document.querySelector("#description");

            let erros = []; // Lista para guardar as mensagens de erro

            // 1. Verifica se o nome está vazio
            if (nome.value === "") {
                erros.push("O campo 'Nome' não pode estar vazio.");
                nome.style.borderColor = "red"; // Destaca o campo
            } else {
                nome.style.borderColor = "initial"; // Limpa o destaque
            }

            // 2. Verifica se o email está vazio
            if (email.value === "") {
                erros.push("O campo 'E-mail' não pode estar vazio.");
                email.style.borderColor = "red";
            } else {
                email.style.borderColor = "initial";
            }
            
            // 3. Verifica se a descrição está vazia
            if (descricao.value.length < 10) { // Ex: mínimo de 10 caracteres
                erros.push("A descrição precisa ter pelo menos 10 caracteres.");
                descricao.style.borderColor = "red";
            } else {
                descricao.style.borderColor = "initial";
            }


            // Se houver qualquer erro na lista...
            if (erros.length > 0) {
                // Impede o envio do formulário
                event.preventDefault();
                
                // Mostra os erros para o usuário
                alert("Por favor, corrija os seguintes erros:\n" + erros.join("\n"));
            }
        }
    }

}); // Fim do único DOMContentLoaded