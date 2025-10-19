// 1. FONTE DE DADOS (DATABASE)
// Centralizamos todos os itens do cardápio em um único objeto.
// Fácil de adicionar, remover ou editar itens sem tocar no HTML!
const menuItems = {
    expressos: [
        {
            img: 'assets/imgs/menu/expresso.jpg',
            alt: 'Xícara de café expresso.',
            title: 'Expresso Simples',
            price: 'R$ 0,00'
        },
        {
            img: 'assets/imgs/menu/expresso.jpg',
            alt: 'Duas xícaras de café expresso.',
            title: 'Expresso Duplo',
            price: 'R$ 0,00'
        },
        {
            img: 'assets/imgs/menu/leite.JPG',
            alt: 'Café expresso com um pouco de leite.',
            title: 'Expresso com Leite Simples',
            price: 'R$ 0,00'
        }
        // ... Adicione os outros expressos aqui
    ],
    cappuccinos: [
        {
            img: 'assets/imgs/menu/capuccino.JPG',
            alt: 'Xícara de capuccino com espuma.',
            title: 'Capuccino Simples',
            price: 'R$ 0,00'
        },
        {
            img: 'assets/imgs/menu/canela.JPG',
            alt: 'Xícara de capuccino com canela.',
            title: 'Capuccino com Canela',
            price: 'R$ 0,00'
        }
        // ... Adicione os outros capuccinos aqui
    ],
    gelados: [
        {
            img: 'assets/imgs/menu/gelado.jpg',
            alt: 'Café com Baunilha.',
            title: 'Café com Baunilha',
            price: 'R$ 0,00'
        }
    ],
    especiais: [
        {
            img: 'assets/imgs/menu/especial.JPG',
            alt: 'Café Especial.',
            title: 'Café Especial',
            price: 'R$ 0,00'
        }
    ],
    nossosProdutos: [
        {
            img: 'assets/imgs/menu/capuccino.JPG',
            alt: 'Café Arábico.',
            title: 'Café Arábico',
            price: 'R$ 0,00'
        }
    ]
};

export default menuItems;