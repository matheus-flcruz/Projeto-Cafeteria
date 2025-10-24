// 1. FONTE DE DADOS (DATABASE)
// Centralizamos todos os itens do cardápio em um único objeto.
// Fácil de adicionar, remover ou editar itens sem tocar no HTML!
const menuItems = {
    expressos: [
        {
            img: 'assets/imgs/menu/expressos/backinblack.png',
            alt: 'Café expresso Back in Black.',
            title: 'Back in Black',
            title2: 'Expresso Simples',
            description: 'Café intenso e encorpado, preparado sob alta pressão.',
            description2: '<b>Notas:</b> fortes e diretas, como o riff da abertura.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/expressos/thunderroast.png',
            alt: 'Café expresso Thunder Roast.',
            title: 'Thunder Roast',
            title2: 'Expresso Duplo',
            description: 'Dois shots de expresso para quem precisam de mais energia.',
            description2: '<b>Torra:</b> escura, sabor marcante.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/expressos/onedroprock.png',
            alt: 'Café expresso com um pouco de leite (One Drop Rock).',
            title: 'One Drop Rock',
            title2: 'Pingado',
            description: 'Um toque de leite sobre o café coado.',
            description2: '<b>Estilo:</b> leve e suave..',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/expressos/rocklattebaby.png',
            alt: 'Café expresso com um leite Rock Latte Baby.',
            title: 'Rock Latte Baby',
            title: 'Café com Leite',
            description: 'Combinação perfeita entre expresso e leite vaporizado.',
            description2: '<b>Notas:</b> leite vaporizado e espresso cremoso. ',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/expressos/sundaymorningbrew.png',
            alt: 'Café Coado Sunday Morning Brew.',
            title: 'Café Coado',
            title2: 'Sunday Morning Brew',
            description: 'Sabor suave e aroma marcante, no bom estilo caseiro.',
            description2: '<b>Torra:</b> Média.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/expressos/freebirdblend.png',
            alt: 'Café Expresso Freebird Blend.',
            title: 'Freebird Blend',
            title2: 'Café Americano',
            description: 'Expresso diluído em água quente, mais leve e equilibrado.',
            description2: '<b>Estilo:</b> clássico e fluido.',
            price: 'R$ 0,00',
            type: 'café'
        }
    ],
    cappuccinos: [
        {
            img: 'assets/imgs/menu/capuccinos/sweetfoamomine.png',
            alt: "Capuccino Sweet Foam O' Mine.",
            title: "Sweet Foam O' Mine",
            title2: 'Capuccino Clássico',
            description: 'Expresso com leite vaporizado e espuma de leite, finalizado com canela.',
            description2: '<b>Notas:</b> canela e doçura equilibrada.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/capuccinos/cocoametal.png',
            alt: 'Capuccino com chocolate Cocoa Metal.',
            title: 'Cocoa Metal',
            title2: 'Capuccino com Chocolate',
            description: 'Capuccino cremoso com um toque de chocolate em pó.',
            description2: '<b>Torra:</b> média-escura.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/capuccinos/latteofages.png',
            alt: 'Capuccino com doce de leite Latte of Ages.',
            title: 'Latte of Ages',
            title2: 'Capuccino com Doce de Leite',
            description: 'Capuccino com leve toque de doce de leite no fundo, harmonizando com o café.',
            description2: '<b>Notas:</b> caramelo e doce de leite.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/capuccinos/dreamonvanilla.png',
            alt: 'Capuccino com baunilha Dream On Vanilla.',
            title: 'Dream On Vanilla',
            title2: 'Capuccino com Baunilha',
            description: 'Capuccino com leve aroma de baunilha, trazendo um sabor diferenciado.',
            description2: '<b>Notas:</b> baunilha e leite cremoso.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/capuccinos/vivalacaffeine.png',
            alt: 'Capuccino italiano Viva la Caffeine.',
            title: 'Viva la Caffeine',
            title2: 'Capuccino Italiano',
            description: 'Capuccino com equilíbrio perfeito entre café, leite e espuma.',
            description2: '<b>Notas:</b> torra média e textura aveluda.',
            price: 'R$ 0,00',
            type: 'café'
        }
    ],
    gelados: [
        {
            img: 'assets/imgs/menu/gelados/coldstage.png',
            alt: 'Café gelado Cold Stage.',
            title: 'Cold Stage',
            title2: 'Iced Coffee',
            description: 'Café coado ou expresso resfriado, servido com gelo.',
            description2: '<b>Notas:</b> espresso resfriado, gelo e energia.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/gelados/darksidemocha.png',
            alt: 'Mocha Gelado Dark Side Mocha.',
            title: 'Dark Side Mocha',
            title2: 'Mocha Gelado',
            description: 'Mistura de café, leite e calda de chocolate, com gelo.',
            description2: '<b>Notas:</b> cacau e leite frio.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/gelados/underpressure.png',
            alt: 'Latte Gelado Under Pressure.',
            title: 'Under Pressure',
            title2: 'Latte Gelado',
            description: 'Leite gelado com expresso, leve e refrescante.',
            description2: '<b>Torra:</b> média.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/gelados/icecreamtoheaven.png',
            alt: 'Affogato Iced Cream to Heaven.',
            title: 'Iced Cream to Heaven',
            title2: 'Affogato',
            description: 'Bola de sorvete de baunilha "afogada" em expresso quente.',
            description2: '<b>Notas:</b> contraste perfeito entre quente e frio.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/gelados/sweetriffscaramel.png',
            alt: 'Frappuccino de Caramelo Sweet Riffs Caramel.',
            title: 'Sweet Riffs Caramel',
            title2: 'Frappuccino de Caramelo',
            description: 'Café batido com gelo, leite e calda de caramelo.',
            description2: '<b>Estilo:</b> doce e vibrante.',
            price: 'R$ 0,00',
            type: 'café'
        }
    ],
    especiais: [
        {
            img: 'assets/imgs/menu/especiais/spicenroast.png',
            alt: "Café com Especiarias Spice N' Roast.",
            title: "Spice N' Roast",
            title2: 'Café com Especiarias',
            description: 'Expresso com toque de canela, noz-moscada e cardamomo.',
            description2: '<b>Torra:</b> média-escura.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/especiais/whiskeyinthemug.png',
            alt: 'Café Irlandês Whiskey in the Mug.',
            title: 'Whiskey in the Mug',
            title2: 'Café Irlandês',
            description: 'Expresso com uísque irlandês e creme por cima (sem álcool na versão kids).',
            description2: '<b>Notas:</b> creme suave e corpo marcante.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/especiais/citrusrevolution.png',
            alt: 'Café com Laranja Citrus Revolution.',
            title: 'Citrus Revolution',
            title2: 'Café com Laranja',
            description: 'Infusão de café com raspas ou suco de laranja, sabor cítrico e marcante.',
            description2: '<b>Notas:</b> raspas de laranja e café encorpado.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/especiais/acousticbrew.png',
            alt: 'Café com Leite de Amêndoas Acoustic Brew.',
            title: 'Acoustic Brew',
            title2: 'Café com Leite de Amêndoas',
            description: 'Opção sem lactose, leve e aromática.',
            description2: '<b>Notas:</b> amêndoas e torra clara.',
            price: 'R$ 0,00',
            type: 'café'
        },
        {
            img: 'assets/imgs/menu/especiais/rockyouhazelnut.png',
            alt: 'Café com Nutella Rock You Hazelnut.',
            title: 'Rock You Hazelnut',
            title2: 'Café com Nutella',
            description: 'Expresso com creme de avelã e espuma cremosa de leite.',
            description2: '<b>Notas:</b> chocolate, avelã e café intenso.',
            price: 'R$ 0,00',
            type: 'café'
        }
    ],
    nossosProdutos: [
        {
            img: 'assets/imgs/menu/nossos-produtos/blacksabbathblend.png',
            alt: 'Café Black Sabbath Blend.',
            title: 'Black Sabbath Blend',
            description: 'Um café intenso e encorpado, feito para quem curte um som pesado logo de manhã.',
            description2: '<b>Notas:</b> Chocolate amargo, nozes e um leve toque defumado.',
            description3: '<b>Torra:</b> Escura.',
            price: 'R$ 0,00',
            type: 'produto'
        },
        {
            img: 'assets/imgs/menu/nossos-produtos/sweetchildobean.png',
            alt: "Café Sweet Child O' Bean.",
            title: "Sweet Child O' Bean.",
            description: 'Doçura e equilíbrio em um blend que conquista logo no primeiro gole.',
            description2: '<b>Notas:</b> Caramelo, avelã e leve acidez frutada.',
            description3: '<b>Torra:</b> Média',
            price: 'R$ 0,00',
            type: 'produto'
        },
        {
            img: 'assets/imgs/menu/nossos-produtos/highwaytoroast.png',
            alt: 'Café Highway to Roast.',
            title: 'Highway to Roast',
            description: 'Perfeito para manter o ritmo do dia, com aroma marcante e sabor vibrante.',
            description2: '<b>Notas:</b> Frutas secas, cacau e toque cítrico.',
            description3: '<b>Torra:</b> Média',
            price: 'R$ 0,00',
            type: 'produto'
        },
        {
            img: 'assets/imgs/menu/nossos-produtos/smokeonthecoffee.png',
            alt: 'Café Smoke on the Coffee.',
            title: 'Smoke on the Coffee',
            description: 'Blend artesanal com notas defumadas e corpo marcante, para os amantes do som clássico.',
            description2: '<b>Notas:</b> Amêndoas tostadas e cacau.',
            description3: '<b>Torra:</b> Média-Escura',
            price: 'R$ 0,00',
            type: 'produto'
        },
        {
            img: 'assets/imgs/menu/nossos-produtos/espressofordestruction.png',
            alt: 'Café Espresso for Destruction.',
            title: 'Espresso for Destruction',
            description: 'Um café poderoso e explosivo, inspirado no rock dos anos 80.',
            description2: '<b>Notas:</b> Cacau intenso e leve amargor equilibrado.',
            description3: '<b>Torra:</b> Escura',
            price: 'R$ 0,00',
            type: 'produto'
        },
        {
            img: 'assets/imgs/menu/nossos-produtos/stairwaytobean.png',
            alt: 'Café Stairway to Bean.',
            title: 'Stairway to Bean',
            description: 'Blend premium com equilíbrio celestial entre aroma e sabor, uma verdadeira viagem sensorial.',
            description2: '<b>Notas:</b> Mel, frutas vermelhas e chocolate ao leite.',
            description3: '<b>Torra:</b> Média',
            price: 'R$ 0,00',
            type: 'produto'
        },
        {
            img: 'assets/imgs/menu/nossos-produtos/borntobrew.png',
            alt: 'Café Born to Brew.',
            title: 'Born to Brew',
            description: 'Café de torra média com sabor encorpado, perfeito para quem nasceu pra viver no ritmo do rock.',
            description2: '<b>Notas:</b> Nozes, caramelo e leve toque floral.',
            description3: '<b>Torra:</b> Média',
            price: 'R$ 0,00',
            type: 'produto'
        },
        {
            img: 'assets/imgs/menu/nossos-produtos/nirvana.png',
            alt: 'Café Nirvana.',
            title: 'Nirvana',
            description: 'Um café suave e meditativo, para momentos de paz após o som alto.',
            description2: '<b>Notas:</b> Baunilha, mel e frutas amarelas.',
            description3: '<b>Torra:</b> Clara',
            price: 'R$ 0,00',
            type: 'produto'
        }
    ],
    lanches: [
        {
        img: 'assets/imgs/menu/lanches/hotelcroissantia.png',
        alt: 'Croissant Hotel Croissantia.',
        title: 'Hotel Croissantia',
        description: 'Inspirado na música "Hotel California" do The Eagles, este croissant tem a massa folhada leve e amanteigada.',
        price: 'R$ 0,00',
        type: 'lanche'
        },
        {
        img: 'assets/imgs/menu/lanches/cheesenroll.png',
        alt: "Sanduíche Cheese N' Roll.",
        title: "Cheese N' Roll",
        description: 'Inspirado na música "Rock N\' Roll" do Led Zeppelin, este é um sanduíche quente com queijo derretido, presunto e um toque de manteiga de dourada.',
        price: 'R$ 0,00',
        type: 'lanche'
        },
        {
        img: 'assets/imgs/menu/lanches/borntotoast.png',
        alt: 'Sanduíche Born to Toast.',
        title: 'Born to Toast',
        description: 'Inspirado na música "Born to be Wild" do Steppenwolf, este sanduíche é feito com pão artesanal grelhado com peito de peru, queijo minas e molho de ervas.',
        price: 'R$ 0,00',
        type: 'lanche'
        },
        {
        img: 'assets/imgs/menu/lanches/smokeonthebacon.png',
        alt: 'Sanduíche Smoke on the Bacon.',
        title: 'Smoke on the Bacon',
        description: 'Inspirado na música "Smoke on the Water" do Deep Purple, este sanduíche é feito com bacon crocante, ovo e queijo cheddar.',
        price: 'R$ 0,00',
        type: 'lanche'
        },
        {
        img: 'assets/imgs/menu/lanches/sweetpieomine.png',
        alt: "Torta Sweet Pie O' Mine.",
        title: "Sweet Pie O' Mine.",
        description: 'Inspirada na música "Sweet Child O\' Mine" do Guns N\' Roses, esta torta de maçã com canela e cobertura açucarada.',
        price: 'R$ 0,00',
        type: 'lanche'
        },
        {
        img: 'assets/imgs/menu/lanches/anotherbrowniebitesthedust.png',
        alt: 'Brownie Another Brownie Bites the Dust.',
        title: 'Another Brownie Bites the Dust',
        description: 'Inspirado na música "Another One Bites the Dust" do Queen, este brownie de chocolate meio amargo com toque de café.',
        price: 'R$ 0,00',
        type: 'lanche'
        },
        {
        img: 'assets/imgs/menu/lanches/highwaytogrill.png',
        alt: 'Sanduíche Highway to Grill.',
        title: 'Highway to Grill',
        description: 'Inspirado na música "Highway to Hell" do AC/DC, este sanduíche artesanal com carne desfiada, queijo e molho barbecue.',
        price: 'R$ 0,00',
        type: 'lanche'
        },
        {
        img: 'assets/imgs/menu/lanches/wholelattelovetoast.png',
        alt: 'Sanduíche Whole Latte Love Toast.',
        title: 'Whole Latte Love Toast',
        description: 'Inspirado na música "Whole Lotta Love" do Led Zeppelin, este sanduíche é feito com pão integral, cream cheese e geleia de frutas vermelhas.',
        price: 'R$ 0,00',
        type: 'lanche'
        },
        {
        img: 'assets/imgs/menu/lanches/pancakeoverdrive.png',
        alt: 'Panqueca Overdrive.',
        title: 'Pancake Overdrive',
        description: 'Inspirada na música "Overdrive" do Foo Fighters, esta panqueca americana com mel, manteiga e frutas.',
        price: 'R$ 0,00',
        type: 'lanche'
        },
        {
        img: 'assets/imgs/menu/lanches/dontstopbelievindonuts.png',
        alt: 'Donuts Don\'t Stop Believin\' Donuts.',
        title: 'Don\'t Stop Believin\' Donuts',
        description: 'Inspirados na música "Don\'t Stop Believin\'" do Journey, estes donuts artesanal, coberto com açucar e canela.',
        price: 'R$ 0,00',
        type: 'lanche'
        }
    ]
};

export default menuItems;