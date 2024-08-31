const products = [
    // Produtos Até R$99
    {
        id: 1,
        name: 'Camiseta Lua da C&A',
        price: '49,99',
        description: 'Uma camiseta estilosa com a estampa da lua, perfeita para os amantes do espaço.',
        features: [
            'Estampa exclusiva',
            'Material confortável',
            'Tamanhos variados'
        ],
        image: './imagens/Camiseta Lua da C&A.webp',
        reviews: [
            { name: 'Carlos Silva', comment: 'Adorei a camiseta! Muito confortável.' },
            { name: 'Ana Santos', comment: 'Ótima qualidade pelo preço.' }
        ]
    },
    {
        id: 2,
        name: 'Havaianas Top Pride',
        price: '49,99',
        description: 'Chinelos Havaianas com estampa colorida, ideais para o verão.',
        features: [
            'Estampa colorida',
            'Material durável',
            'Confortáveis'
        ],
        image: './imagens/Havaianas Top Pride All Over.webp',
        reviews: [
            { name: 'Fernanda Lima', comment: 'Muito confortável e estiloso.' },
            { name: 'Lucas Pereira', comment: 'Perfeito para o verão.' }
        ]
    },
    {
        id: 3,
        name: 'Kit Bar Coqueteleira',
        price: '69,99',
        description: 'Kit completo para preparar coquetéis em casa.',
        features: [
            'Inclui coqueteleira, pinça para gelo e colher de bar',
            'Material de alta qualidade',
            'Fácil de usar'
        ],
        image: './imagens/Kit Bar Coqueteleira.webp',
        reviews: [
            { name: 'Mariana Rocha', comment: 'Excelente para fazer drinks em casa.' },
            { name: 'Rafael Costa', comment: 'Muito prático e útil.' }
        ]
    },
    {
        id: 4,
        name: 'Nécessaire de Viagem',
        price: '79,99',
        description: 'Nécessaire prática e compacta para organizar seus itens de viagem.',
        features: [
            'Design dobrável',
            'Vários compartimentos',
            'Leve e portátil'
        ],
        image: './imagens/Nécessaire de Viagem.webp',
        reviews: [
            { name: 'Juliana Andrade', comment: 'Perfeita para minhas viagens.' },
            { name: 'Gustavo Almeida', comment: 'Muito prática e espaçosa.' }
        ]
    },
    {
        id: 5,
        name: 'Luminária de Mesa',
        price: '80,00',
        description: 'Luminária de mesa moderna e ajustável, ideal para estudo e trabalho.',
        features: [
            'Design moderno',
            'Articulável',
            'Iluminação confortável'
        ],
        image: './imagens/Luminária de Mesa.webp',
        reviews: [
            { name: 'Patrícia Souza', comment: 'Ilumina muito bem minha mesa de trabalho.' },
            { name: 'Ricardo Martins', comment: 'Design elegante e funcional.' }
        ]
    },
    {
        id: 6,
        name: 'Moedor Espremedor',
        price: '90,00',
        description: 'Espremedor de frutas prático para sucos frescos e saudáveis.',
        features: [
            'Design compacto',
            'Fácil de usar',
            'Material durável'
        ],
        image: './imagens/Moedor Espremedor.webp',
        reviews: [
            { name: 'Vanessa Ferreira', comment: 'Perfeito para fazer suco de laranja.' },
            { name: 'Eduardo Mendes', comment: 'Muito fácil de usar e limpar.' }
        ]
    },
    {
        id: 7,
        name: 'Parafusadeira Elétrica',
        price: '95,00',
        description: 'Ferramenta essencial para reparos em casa com luz de LED.',
        features: [
            'Compacta e ergonômica',
            'Luz de LED',
            'Alta durabilidade'
        ],
        image: './imagens/Parafusadeira Elétrica.webp',
        reviews: [
            { name: 'Marcos Oliveira', comment: 'Muito útil para pequenos reparos.' },
            { name: 'Roberta Lima', comment: 'Boa qualidade e fácil de manusear.' }
        ]
    },
    {
        id: 8,
        name: 'Manta Decorativa',
        price: '95,00',
        description: 'Manta elegante para decorar e trazer conforto ao seu sofá.',
        features: [
            'Design elegante',
            'Material macio',
            'Tamanho ideal'
        ],
        image: './imagens/Manta Decorativa.webp',
        reviews: [
            { name: 'Aline Castro', comment: 'Deixa meu sofá muito mais bonito.' },
            { name: 'Fábio Ribeiro', comment: 'Confortável e de boa qualidade.' }
        ]
    },
    {
        id: 9,
        name: 'Carteira de Couro F',
        price: '99,00',
        description: 'Carteira de couro elegante e prática, ideal para o dia a dia.',
        features: [
            'Couro de alta qualidade',
            'Vários compartimentos',
            'Design compacto'
        ],
        image: './imagens/Carteira de Couro F.webp',
        reviews: [
            { name: 'Sônia Santos', comment: 'Muito prática e elegante.' },
            { name: 'Paulo Nogueira', comment: 'Excelente qualidade pelo preço.' }
        ]
    },
    {
        id: 10,
        name: 'Pipo. Micro-Ondas',
        price: '90,00',
        description: 'Faça pipoca de forma rápida e prática no micro-ondas.',
        features: [
            'Material de silicone',
            'Fácil de usar e limpar',
            'Compacta para armazenamento'
        ],
        image: './imagens/Pipo. Micro-Ondas.webp',
        reviews: [
            { name: 'Camila Moreira', comment: 'Perfeita para minhas noites de filme.' },
            { name: 'João Carvalho', comment: 'Muito prática e fácil de usar.' }
        ]
    },
    {
        id: 11,
        name: 'Kit de Banho',
        price: '85,00',
        description: 'Kit de banho com sabonete e loção para uma experiência relaxante.',
        features: [
            'Ingredientes vegetais',
            'Hidrata e perfuma',
            'pH neutro'
        ],
        image: './imagens/Kit de Banho.webp',
        reviews: [
            { name: 'Lúcia Barros', comment: 'Excelente para relaxar após um longo dia.' },
            { name: 'Bruno Almeida', comment: 'Cheiro muito agradável e suave.' }
        ]
    },
    {
        id: 12,
        name: 'Tapete para Yoga',
        price: '80,00',
        description: 'Tapete de yoga antiderrapante para suas práticas de exercícios.',
        features: [
            'Superfície antiderrapante',
            'Protege as articulações',
            'Material de alta qualidade'
        ],
        image: './imagens/Tapete para Yoga.webp',
        reviews: [
            { name: 'Júlia Vieira', comment: 'Ótimo para minhas sessões de yoga.' },
            { name: 'Pedro Farias', comment: 'Boa aderência e conforto.' }
        ]
    },
    {
        id: 13,
        name: 'Jogo de Tabuleiro',
        price: '99,00',
        description: 'Clássico jogo de tabuleiro para diversão em família.',
        features: [
            'Jogo estratégico',
            'Divertido para todas as idades',
            'Inclui todas as peças necessárias'
        ],
        image: './imagens/Jogo de Tabuleiro.webp',
        reviews: [
            { name: 'Tatiana Mendes', comment: 'Diversão garantida para toda a família.' },
            { name: 'Henrique Araújo', comment: 'Clássico que nunca perde a graça.' }
        ]
    },
    {
        id: 14,
        name: 'Vela Aromatizada',
        price: '70,00',
        description: 'Vela aromática para criar um ambiente calmo e agradável.',
        features: [
            'Combinação de âmbar e bergamota',
            'Design decorativo',
            'Duradoura'
        ],
        image: './imagens/Vela Aromatizada.webp',
        reviews: [
            { name: 'Mônica Souza', comment: 'Cheiro maravilhoso e duradouro.' },
            { name: 'Gustavo Carvalho', comment: 'Deixa o ambiente muito agradável.' }
        ]
    }, {
        id: 14,
        name: 'Tênis branco Adidas',
        price: '151,99',
        description: 'Tênis branco Adidas, estiloso e confortável para o dia a dia.',
        features: [
            'Design moderno',
            'Confortável',
            'Alta qualidade'
        ],
        image: './imagens/Tênis branco Adidas.webp',
        reviews: [
            { name: 'Carla Pereira', comment: 'Muito confortável e estiloso.' },
            { name: 'André Oliveira', comment: 'Perfeito para uso diário.' }
        ]
    },
    {
        id: 15,
        name: 'Sapato Casual D&R',
        price: '134,90',
        description: 'Sapato casual, ideal para uso diário e eventos casuais.',
        features: [
            'Design clássico',
            'Material resistente',
            'Confortável'
        ],
        image: './imagens/Sapato Casual D&R.webp',
        reviews: [
            { name: 'Fernanda Silva', comment: 'Sapato muito confortável e elegante.' },
            { name: 'Jorge Santos', comment: 'Ótima qualidade pelo preço.' }
        ]
    },
    {
        id: 16,
        name: 'Mochila Jansport ',
        price: '199,90',
        description: 'Mochila espaçosa e resistente com estampa de planetas.',
        features: [
            'Vários compartimentos',
            'Design moderno',
            'Durável'
        ],
        image: './imagens/Mochila Jansport.webp',
        reviews: [
            { name: 'Maria Souza', comment: 'Perfeita para viagens e uso diário.' },
            { name: 'Carlos Lima', comment: 'Muito resistente e bonita.' }
        ]
    },
    {
        id: 17,
        name: 'Vinho Gr-174 Tinto',
        price: '199,80',
        description: 'Vinho tinto Casa Gran Del Siurana 2016 de alta qualidade, perfeito para jantares especiais.',
        features: [
            'Aroma intenso',
            'Sabor encorpado',
            'Ideal para harmonização'
        ],
        image: './imagens/Vinho Gr-174 Tinto.webp',
        reviews: [
            { name: 'Paula Ferreira', comment: 'Vinho delicioso, perfeito para ocasiões especiais.' },
            { name: 'Roberto Mendes', comment: 'Excelente qualidade e sabor.' }
        ]
    },
    {
        id: 18,
        name: 'Whisky Jack Daniel’s ',
        price: '179,90',
        description: 'Whisky Double Black de sabor marcante e qualidade superior.',
        features: [
            'Aroma defumado',
            'Sabor intenso',
            'Ótimo para degustar puro'
        ],
        image: './imagens/Whisky Jack Daniel’s.webp',
        reviews: [
            { name: 'Mariana Lopes', comment: 'Whisky excelente, muito saboroso.' },
            { name: 'Luiz Costa', comment: 'Perfeito para momentos especiais.' }
        ]
    },
    {
        id: 19,
        name: 'Smart Plug Wi-Fi',
        price: '120,00',
        description: 'Tomada inteligente que permite controlar seus aparelhos eletrônicos via Wi-Fi.',
        features: [
            'Controle remoto pelo app',
            'Compatível com assistentes de voz',
            'Fácil instalação'
        ],
        image: './imagens/Smart Plug Wi-Fi.webp',
        reviews: [
            { name: 'Ana Carolina', comment: 'Muito prático e fácil de usar.' },
            { name: 'Eduardo Braga', comment: 'Ótimo produto, funciona perfeitamente.' }
        ]
    },
    {
        id: 20,
        name: 'Kit de Potes',
        price: '130,00',
        description: 'Kit Herméticos Electrolux com potes herméticos de alta qualidade, ideais para armazenar alimentos.',
        features: [
            'Vedação perfeita',
            'Material resistente',
            'Design moderno'
        ],
        image: './imagens/Kit de Potes.webp',
        reviews: [
            { name: 'Patrícia Vieira', comment: 'Excelente para manter os alimentos frescos.' },
            { name: 'Gustavo Moreira', comment: 'Muito prático e de boa qualidade.' }
        ]
    },
    {
        id: 21,
        name: 'Nike Revolution 5',
        price: '199,99',
        description: 'Tênis de corrida com amortecimento suave e suporte confortável.',
        features: [
            'Leve e respirável',
            'Sola de borracha durável',
            'Design moderno'
        ],
        image: './imagens/Nike Revolution 5.webp',
        reviews: [
            { name: 'Juliana Rocha', comment: 'Muito confortável e ótimo para correr.' },
            { name: 'Ricardo Lima', comment: 'Tênis excelente para atividades físicas.' }
        ]
    },
    {
        id: 22,
        name: 'Máquina de Café',
        price: '399,99',
        description: 'Máquina de café Nespresso Essenza Mini compacta e eficiente, perfeita para preparar espressos.',
        features: [
            'Design compacto',
            'Fácil de usar',
            'Várias opções de cápsulas'
        ],
        image: './imagens/Máquina de Café.webp',
        reviews: [
            { name: 'Marina Souza', comment: 'Café delicioso e máquina muito prática.' },
            { name: 'Pedro Silva', comment: 'Ótimo custo-benefício.' }
        ]
    },
    {
        id: 23,
        name: 'Fone de Ouvido',
        price: '299,99',
        description: 'Fone de ouvido Bluetooth JBL sem fio com som de alta qualidade e bateria duradoura.',
        features: [
            'Conexão Bluetooth',
            'Som estéreo',
            'Bateria de longa duração'
        ],
        image: './imagens/Fone de Ouvido.webp',
        reviews: [
            { name: 'Rafaela Santos', comment: 'Som incrível e muito confortável.' },
            { name: 'Lucas Almeida', comment: 'Perfeito para ouvir música durante exercícios.' }
        ]
    },
    {
        id: 24,
        name: 'Samsung Galaxy Watch',
        price: '799,99',
        description: 'Relógio Smartwatch com diversas funcionalidades e design sofisticado.',
        features: [
            'Monitoramento de saúde',
            'Notificações inteligentes',
            'Resistente à água'
        ],
        image: './imagens/Samsung Galaxy Watch.webp',
        reviews: [
            { name: 'Fernanda Oliveira', comment: 'Excelente para acompanhar minha rotina.' },
            { name: 'Carlos Nunes', comment: 'Muito funcional e bonito.' }
        ]
    },
    {
        id: 25,
        name: 'Cafeteira Expresso',
        price: '499,99',
        description: 'Cafeteira expresso Philco com design moderno e diversas funcionalidades.',
        features: [
            'Prepara vários tipos de café',
            'Fácil de limpar',
            'Design elegante'
        ],
        image: './imagens/Cafeteira Expresso.webp',
        reviews: [
            { name: 'Larissa Sousa', comment: 'Café delicioso e fácil de preparar.' },
            { name: 'José Martins', comment: 'Ótima qualidade e design.' }
        ]
    },
    {
        id: 26,
        name: 'Aspirador de Pó',
        price: '399,99',
        description: 'Aspirador de pó vertical Vertical Electrolux, leve e fácil de usar, ideal para limpeza diária.',
        features: [
            'Leve e compacto',
            'Alto poder de sucção',
            'Fácil de manusear'
        ],
        image: './imagens/Aspirador de Pó.webp',
        reviews: [
            { name: 'Marta Lima', comment: 'Muito prático e eficiente.' },
            { name: 'Henrique Silva', comment: 'Excelente para limpar a casa rapidamente.' }
        ]
    },
    {
        id: 27,
        name: 'Kindle Paperwhite',
        price: '499,99',
        description: 'Leitor de e-books com iluminação ajustável e alta resolução.',
        features: [
            'Leve e portátil',
            'Iluminação embutida',
            'Resistente à água'
        ],
        image: './imagens/Kindle Paperwhite.webp',
        reviews: [
            { name: 'Cláudia Santos', comment: 'Perfeito para ler em qualquer lugar.' },
            { name: 'João Fernandes', comment: 'Ótimo para levar em viagens.' }
        ]
    },{
        id: 29,
        name: 'Notebook Lenovo Ideapad S145',
        price: '1900,00',
        description: 'Notebook Lenovo com processador Intel Core i5, ideal para trabalho e entretenimento.',
        features: [
            'Processador Intel Core i5',
            '8GB de RAM',
            '256GB SSD'
        ],
        image: './imagens/Notebook Lenovo Ideapad S145.webp',
        reviews: [
            { name: 'Carlos Silva', comment: 'Excelente desempenho para o dia a dia.' },
            { name: 'Ana Santos', comment: 'Muito rápido e eficiente.' }
        ]
    },
    {
        id: 30,
        name: 'Máquina de Lavar Roupas Samsung',
        price: '2000,00',
        description: 'Máquina de lavar roupas Samsung com tecnologia de ponta e alta capacidade.',
        features: [
            'Capacidade de 11kg',
            'Vários modos de lavagem',
            'Econômica e eficiente'
        ],
        image: './imagens/Máquina de Lavar Roupas Samsung.webp',
        reviews: [
            { name: 'Fernanda Lima', comment: 'Lava muito bem e é silenciosa.' },
            { name: 'Lucas Pereira', comment: 'Ótima capacidade e funcionalidade.' }
        ]
    },
    {
        id: 31,
        name: 'Câmera Digital Canon EOS Rebel T7',
        price: '2000,00',
        description: 'Câmera DSLR com alta resolução e diversas funcionalidades para fotógrafos amadores e profissionais.',
        features: [
            'Resolução de 24.1MP',
            'Gravação de vídeo Full HD',
            'Compatível com lentes EF e EF-S'
        ],
        image: './imagens/Câmera Digital Canon EOS Rebel T7.webp',
        reviews: [
            { name: 'Mariana Rocha', comment: 'Fotos de altíssima qualidade.' },
            { name: 'Rafael Costa', comment: 'Perfeita para iniciantes e profissionais.' }
        ]
    },
    {
        id: 32,
        name: 'TV LED 50" 4K LG',
        price: '1800,00',
        description: 'TV LED de 50 polegadas com resolução 4K e smart features.',
        features: [
            'Resolução 4K',
            'Smart TV com WebOS',
            'Conectividade Wi-Fi'
        ],
        image: './imagens/TV LED 50 4K LG.webp',
        reviews: [
            { name: 'Juliana Andrade', comment: 'Imagem incrível e funcionalidades smart.' },
            { name: 'Gustavo Almeida', comment: 'Ótima qualidade e fácil de usar.' }
        ]
    },
    {
        id: 33,
        name: 'Relógio Smartwatch Apple Watch Series 6',
        price: '2000,00',
        description: 'Smartwatch com monitoramento de saúde, notificações inteligentes e design elegante.',
        features: [
            'Monitoramento de saúde',
            'Notificações inteligentes',
            'Design elegante'
        ],
        image: './imagens/Relógio Smartwatch Apple Watch Series 6.webp',
        reviews: [
            { name: 'Patrícia Souza', comment: 'Muito funcional e bonito.' },
            { name: 'Ricardo Martins', comment: 'Perfeito para acompanhar minha rotina.' }
        ]
    },
    {
        id: 34,
        name: 'iPhone 12',
        price: '5000,00',
        description: 'Smartphone Apple iPhone 12 com tecnologia de ponta e design sofisticado.',
        features: [
            'Tela Super Retina XDR',
            'Processador A14 Bionic',
            'Câmera dupla de 12MP'
        ],
        image: './imagens/iPhone 12.webp',
        reviews: [
            { name: 'Vanessa Ferreira', comment: 'Excelente desempenho e câmera incrível.' },
            { name: 'Eduardo Mendes', comment: 'Design elegante e muito rápido.' }
        ]
    },
    {
        id: 35,
        name: 'MacBook Air M1',
        price: '9000,00',
        description: 'Notebook Apple MacBook Air com chip M1, ideal para trabalho e entretenimento.',
        features: [
            'Chip M1',
            '8GB de RAM',
            '256GB SSD'
        ],
        image: './imagens/MacBook Air M1.webp',
        reviews: [
            { name: 'Marcos Oliveira', comment: 'Desempenho incrível e muito leve.' },
            { name: 'Roberta Lima', comment: 'Bateria duradoura e excelente performance.' }
        ]
    },
    {
        id: 36,
        name: 'Galaxy S21 Ultra',
        price: '5000,00',
        description: 'Smartphone Samsung Galaxy S21 Ultra com câmera de alta resolução e desempenho de ponta.',
        features: [
            'Tela Dynamic AMOLED 2X',
            'Câmera principal de 108MP',
            '8K Video Snap'
        ],
        image: './imagens/Galaxy S21 Ultra.webp',
        reviews: [
            { name: 'Aline Castro', comment: 'Câmera excepcional e ótimo desempenho.' },
            { name: 'Fábio Ribeiro', comment: 'A melhor escolha para quem gosta de tecnologia.' }
        ]
    },
    {
        id: 37,
        name: 'TV OLED 65" Sony',
        price: '10000,00',
        description: 'TV OLED de 65 polegadas com qualidade de imagem superior e funcionalidades smart.',
        features: [
            'Resolução 4K OLED',
            'Smart TV com Android TV',
            'Tecnologia Acoustic Surface'
        ],
        image: './imagens/TV OLED 65 Sony.webp',
        reviews: [
            { name: 'Sônia Santos', comment: 'Qualidade de imagem impressionante.' },
            { name: 'Paulo Nogueira', comment: 'Experiência de cinema em casa.' }
        ]
    },
    {
        id: 38,
        name: 'Geladeira Brastemp',
        price: '5000,00',
        description: 'Geladeira Brastemp Inverse 573L com freezer na parte inferior e tecnologia Evox.',
        features: [
            'Capacidade de 573 litros',
            'Freezer Inverse',
            'Tecnologia Evox'
        ],
        image: './imagens/Geladeira Brastemp.webp',
        reviews: [
            { name: 'Camila Moreira', comment: 'Muito espaçosa e funcional.' },
            { name: 'João Carvalho', comment: 'Design moderno e ótimo desempenho.' }
        ]
    },
    {
        id: 39,
        name: 'Fogão 5 Bocas',
        price: '2000,00',
        description: 'Fogão de 5 bocas Electrolux com forno de alta capacidade e timer digital.',
        features: [
            '5 bocas',
            'Forno com capacidade de 96 litros',
            'Timer digital'
        ],
        image: './imagens/Fogão 5 Bocas.webp',
        reviews: [
            { name: 'Lúcia Barros', comment: 'Excelente para cozinhar grandes refeições.' },
            { name: 'Bruno Almeida', comment: 'Muito eficiente e fácil de limpar.' }
        ]
    },
    {
        id: 40,
        name: 'Lavadora de Roupas ',
        price: '8000,00',
        description: 'Lavadora de roupas LG TwinWash com duas lavadoras em um único equipamento.',
        features: [
            'Duas lavadoras',
            'Tecnologia de lavagem a vapor',
            'Painel touch'
        ],
        image: './imagens/Lavadora de roupas LG TwinWash.webp',
        reviews: [
            { name: 'Júlia Vieira', comment: 'Muito prática e eficiente.' },
            { name: 'Pedro Farias', comment: 'Economiza tempo e energia.' }
        ]
    },
    {
        id: 41,
        name: 'Apple iMac 27"',
        price: '15000,00',
        description: 'Desktop da Apple com tela Retina 5K e alto desempenho.',
        features: [
            'Tela Retina 5K',
            'Processador Intel Core i9',
            '8GB de RAM'
        ],
        image: './imagens/Apple iMac 27.webp',
        reviews: [
            { name: 'Tatiana Mendes', comment: 'Qualidade de imagem incrível.' },
            { name: 'Henrique Araújo', comment: 'Desempenho excepcional.' }
        ]
    },
    {
        id: 42,
        name: 'Cafeteira Espresso',
        price: '6000,00',
        description: 'Cafeteira Jura automática de alta qualidade para espresso perfeito.',
        features: [
            'Moedor integrado',
            'Vários tipos de café',
            'Fácil de usar'
        ],
        image: './imagens/Cafeteira Espresso.webp',
        reviews: [
            { name: 'Mônica Souza', comment: 'Café delicioso e fácil de preparar.' },
            { name: 'Gustavo Carvalho', comment: 'Perfeita para amantes de café.' }
        ]
    },
    {
        id: 43,
        name: 'teste payent',
        price: '1,00',
        description: 'Cafeteira Jura automática de alta qualidade para espresso perfeito.',
        features: [
            'Moedor integrado',
            'Vários tipos de café',
            'Fácil de usar'
        ],
        image: './imagens/Cafeteira Espresso.webp',
        reviews: [
            { name: 'Mônica Souza', comment: 'Café delicioso e fácil de preparar.' },
            { name: 'Gustavo Carvalho', comment: 'Perfeita para amantes de café.' }
        ]
    }
];
