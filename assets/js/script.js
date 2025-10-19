import menuItems from './menu-data.js';

// Espera o conteúdo da página carregar completamente para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. SELEÇÃO DE ELEMENTOS
    // Seleciona o botão pelo seu ID. Boa prática usar 'const' pois este elemento não mudará.
    const backToTopButton = document.getElementById('back-to-top');

    // 2. FUNÇÕES
    // Função com responsabilidade única: verificar a posição do scroll e mostrar/ocultar o botão.
    const toggleBackToTopButton = () => {
        // Se o scroll vertical for maior que 300 pixels...
        if (window.scrollY > 300) {
            // Adiciona a classe 'show' para torná-lo visível (usando nosso CSS)
            backToTopButton.classList.add('show');
        } else {
            // Senão, remove a classe 'show' para escondê-lo
            backToTopButton.classList.remove('show');
        }
    };

    // Função com responsabilidade única: rolar a página suavemente para o topo.
    const scrollToTop = (event) => {
        // Previne o comportamento padrão do link (#) de pular para o topo bruscamente.
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // A mágica do scroll suave!
        });
    };

    // 3. EVENT LISTENERS (Ouvintes de Eventos)
    // Adiciona um ouvinte para o evento de 'scroll' na janela.
    // Toda vez que o usuário rolar a página, a função 'toggleBackToTopButton' será chamada.
    window.addEventListener('scroll', toggleBackToTopButton);

    // Adiciona um ouvinte para o evento de 'click' no nosso botão.
    // Quando o botão for clicado, a função 'scrollToTop' será chamada.
    backToTopButton.addEventListener('click', scrollToTop);

    // --- NOVO CÓDIGO DO CARDÁPIO ---

    /**
     * Função de Responsabilidade Única: 
     * Cria a string HTML para UM card do cardápio.
     * @param {object} item - O objeto contendo os dados do item (img, alt, title, price).
     * @returns {string} - A string HTML do <div class="col">...</div>
     */
    const createMenuItemCard = (item) => {
        // Usamos Template Literals (ES6) para construir o HTML de forma legível.
        return `
            <div class="col">
                <div class="card card-menu">
                    <img src="${item.img}" class="card-img-top" alt="${item.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.price}</p>
                    </div>
                </div>
            </div>
        `;
    };

    /**
     * Função de Responsabilidade Única:
     * Renderiza todos os itens de uma categoria específica no painel da aba correspondente.
     * @param {string} categoryName - O nome da categoria (ex: 'expressos').
     * @param {string} tabPaneId - O ID do elemento HTML onde os cards serão injetados (ex: 'espresso-pane').
     */
    const renderMenuItems = (categoryName, tabPaneId) => {
        // 1. Encontra o elemento 'row' dentro do painel da aba correta.
        const tabPane = document.querySelector(`#${tabPaneId} .row`);

        // 2. Busca os dados da categoria no nosso "database".
        const items = menuItems[categoryName];

        // 3. Verifica se o painel e os itens existem.
        if (tabPane && items) {
            // 4. Mapeia (transforma) cada item do array de dados em uma string HTML de card.
            const cardsHtml = items.map(item => createMenuItemCard(item)).join('');

            // 5. Injeta todo o HTML gerado de uma só vez dentro do 'row'.
            // (Isso é muito mais performático do que adicionar um por um)
            tabPane.innerHTML = cardsHtml;
        }
    };

    // --- INICIALIZAÇÃO ---
    // Chama a função de renderização para cada aba do nosso cardápio.
    renderMenuItems('expressos', 'espresso-pane');
    renderMenuItems('cappuccinos', 'cappuccinos-pane');
    renderMenuItems('gelados', 'iced-coffee-pane');
    renderMenuItems('especiais', 'special-pane');
    renderMenuItems('nossosProdutos', 'nossos-produtos-pane');

});