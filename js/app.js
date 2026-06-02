// =================================
// TABELA PERIÓDICA - JAVASCRIPT
// =================================

// Mapeamento de nomes de categorias
const nomsCategorias = {
    'metais-alcalinos': 'Metais Alcalinos',
    'metais-alcalino-terrosos': 'Metais Alcalino-terrosos',
    'metais-transicao': 'Metais de Transição',
    'metais-pos-transicao': 'Metais de Pós-transição',
    'metaloides': 'Metaloides',
    'nao-metais-reativos': 'Não Metais Reativos',
    'gases-nobres': 'Gases Nobres',
    'lantanideos': 'Lantanídeos',
    'actinideos': 'Actinídeos'
};

// Mapeamento de cores por categoria
const coresCategorias = {
    'metais-alcalinos': '#FF6B6B',
    'metais-alcalino-terrosos': '#FFA500',
    'metais-transicao': '#FFB84D',
    'metais-pos-transicao': '#FFD700',
    'metaloides': '#90EE90',
    'nao-metais-reativos': '#87CEEB',
    'gases-nobres': '#DDA0DD',
    'lantanideos': '#98FB98',
    'actinideos': '#FFB6C1',
    'propriedades-desconhecidas': '#D3D3D3'
};

// Dados de cada elemento (nome completo, estado, reatividade)
const dadosElementos = {
    '1': { nome: 'Hidrogénio', simbolo: 'H', numero: 1, massa: '1.008', estado: 'Gás', reatividade: 'Muito Reativo' },
    '2': { nome: 'Hélio', simbolo: 'He', numero: 2, massa: '4.003', estado: 'Gás', reatividade: 'Inerte' },
    '3': { nome: 'Lítio', simbolo: 'Li', numero: 3, massa: '6.941', estado: 'Sólido', reatividade: 'Muito Reativo' },
    '4': { nome: 'Berílio', simbolo: 'Be', numero: 4, massa: '9.012', estado: 'Sólido', reatividade: 'Reativo' },
    '5': { nome: 'Boro', simbolo: 'B', numero: 5, massa: '10.81', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '6': { nome: 'Carbono', simbolo: 'C', numero: 6, massa: '12.01', estado: 'Sólido', reatividade: 'Muito Reativo' },
    '7': { nome: 'Azoto', simbolo: 'N', numero: 7, massa: '14.01', estado: 'Gás', reatividade: 'Muito Reativo' },
    '8': { nome: 'Oxigénio', simbolo: 'O', numero: 8, massa: '16.00', estado: 'Gás', reatividade: 'Muito Reativo' },
    '9': { nome: 'Flúor', simbolo: 'F', numero: 9, massa: '19.00', estado: 'Gás', reatividade: 'Extremamente Reativo' },
    '10': { nome: 'Neon', simbolo: 'Ne', numero: 10, massa: '20.18', estado: 'Gás', reatividade: 'Inerte' },
    '11': { nome: 'Sódio', simbolo: 'Na', numero: 11, massa: '22.99', estado: 'Sólido', reatividade: 'Muito Reativo' },
    '12': { nome: 'Magnésio', simbolo: 'Mg', numero: 12, massa: '24.31', estado: 'Sólido', reatividade: 'Reativo' },
    '13': { nome: 'Alumínio', simbolo: 'Al', numero: 13, massa: '26.98', estado: 'Sólido', reatividade: 'Reativo' },
    '14': { nome: 'Silício', simbolo: 'Si', numero: 14, massa: '28.09', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '15': { nome: 'Fósforo', simbolo: 'P', numero: 15, massa: '30.97', estado: 'Sólido', reatividade: 'Muito Reativo' },
    '16': { nome: 'Enxofre', simbolo: 'S', numero: 16, massa: '32.07', estado: 'Sólido', reatividade: 'Reativo' },
    '17': { nome: 'Cloro', simbolo: 'Cl', numero: 17, massa: '35.45', estado: 'Gás', reatividade: 'Extremamente Reativo' },
    '18': { nome: 'Árgon', simbolo: 'Ar', numero: 18, massa: '39.95', estado: 'Gás', reatividade: 'Inerte' },
    '19': { nome: 'Potássio', simbolo: 'K', numero: 19, massa: '39.10', estado: 'Sólido', reatividade: 'Muito Reativo' },
    '20': { nome: 'Cálcio', simbolo: 'Ca', numero: 20, massa: '40.08', estado: 'Sólido', reatividade: 'Reativo' },
    '21': { nome: 'Escândio', simbolo: 'Sc', numero: 21, massa: '44.96', estado: 'Sólido', reatividade: 'Reativo' },
    '22': { nome: 'Titânio', simbolo: 'Ti', numero: 22, massa: '47.87', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '23': { nome: 'Vanádio', simbolo: 'V', numero: 23, massa: '50.94', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '24': { nome: 'Crómio', simbolo: 'Cr', numero: 24, massa: '52.00', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '25': { nome: 'Manganês', simbolo: 'Mn', numero: 25, massa: '54.94', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '26': { nome: 'Ferro', simbolo: 'Fe', numero: 26, massa: '55.85', estado: 'Sólido', reatividade: 'Reativo' },
    '27': { nome: 'Cobalto', simbolo: 'Co', numero: 27, massa: '58.93', estado: 'Sólido', reatividade: 'Reativo' },
    '28': { nome: 'Níquel', simbolo: 'Ni', numero: 28, massa: '58.69', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '29': { nome: 'Cobre', simbolo: 'Cu', numero: 29, massa: '63.55', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '30': { nome: 'Zinco', simbolo: 'Zn', numero: 30, massa: '65.39', estado: 'Sólido', reatividade: 'Reativo' },
    '31': { nome: 'Gálio', simbolo: 'Ga', numero: 31, massa: '69.72', estado: 'Sólido', reatividade: 'Reativo' },
    '32': { nome: 'Germânio', simbolo: 'Ge', numero: 32, massa: '72.64', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '33': { nome: 'Arsénio', simbolo: 'As', numero: 33, massa: '74.92', estado: 'Sólido', reatividade: 'Reativo' },
    '34': { nome: 'Selénio', simbolo: 'Se', numero: 34, massa: '78.96', estado: 'Sólido', reatividade: 'Reativo' },
    '35': { nome: 'Bromo', simbolo: 'Br', numero: 35, massa: '79.90', estado: 'Líquido', reatividade: 'Muito Reativo' },
    '36': { nome: 'Crípton', simbolo: 'Kr', numero: 36, massa: '83.80', estado: 'Gás', reatividade: 'Inerte' },
    '37': { nome: 'Rubídio', simbolo: 'Rb', numero: 37, massa: '85.47', estado: 'Sólido', reatividade: 'Muito Reativo' },
    '38': { nome: 'Estrôncio', simbolo: 'Sr', numero: 38, massa: '87.62', estado: 'Sólido', reatividade: 'Reativo' },
    '39': { nome: 'Ítrio', simbolo: 'Y', numero: 39, massa: '88.91', estado: 'Sólido', reatividade: 'Reativo' },
    '40': { nome: 'Zircónio', simbolo: 'Zr', numero: 40, massa: '91.22', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '41': { nome: 'Nióbio', simbolo: 'Nb', numero: 41, massa: '92.91', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '42': { nome: 'Molibdénio', simbolo: 'Mo', numero: 42, massa: '95.94', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '43': { nome: 'Tecnécio', simbolo: 'Tc', numero: 43, massa: '98', estado: 'Sólido', reatividade: 'Radioativo' },
    '44': { nome: 'Ruténio', simbolo: 'Ru', numero: 44, massa: '101.07', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '45': { nome: 'Ródio', simbolo: 'Rh', numero: 45, massa: '102.91', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '46': { nome: 'Paládio', simbolo: 'Pd', numero: 46, massa: '106.42', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '47': { nome: 'Prata', simbolo: 'Ag', numero: 47, massa: '107.87', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '48': { nome: 'Cádmio', simbolo: 'Cd', numero: 48, massa: '112.41', estado: 'Sólido', reatividade: 'Reativo' },
    '49': { nome: 'Índio', simbolo: 'In', numero: 49, massa: '114.82', estado: 'Sólido', reatividade: 'Reativo' },
    '50': { nome: 'Estanho', simbolo: 'Sn', numero: 50, massa: '118.71', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '51': { nome: 'Antimónio', simbolo: 'Sb', numero: 51, massa: '121.76', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '52': { nome: 'Telúrio', simbolo: 'Te', numero: 52, massa: '127.60', estado: 'Sólido', reatividade: 'Reativo' },
    '53': { nome: 'Iodo', simbolo: 'I', numero: 53, massa: '126.90', estado: 'Sólido', reatividade: 'Muito Reativo' },
    '54': { nome: 'Xénon', simbolo: 'Xe', numero: 54, massa: '131.29', estado: 'Gás', reatividade: 'Inerte' },
    '55': { nome: 'Césio', simbolo: 'Cs', numero: 55, massa: '132.91', estado: 'Sólido', reatividade: 'Muito Reativo' },
    '56': { nome: 'Bário', simbolo: 'Ba', numero: 56, massa: '137.33', estado: 'Sólido', reatividade: 'Reativo' },
    '57': { nome: 'Lantânio', simbolo: 'La', numero: 57, massa: '138.91', estado: 'Sólido', reatividade: 'Reativo' },
    '58': { nome: 'Cério', simbolo: 'Ce', numero: 58, massa: '140.12', estado: 'Sólido', reatividade: 'Reativo' },
    '59': { nome: 'Praseodímio', simbolo: 'Pr', numero: 59, massa: '140.91', estado: 'Sólido', reatividade: 'Reativo' },
    '60': { nome: 'Neodímio', simbolo: 'Nd', numero: 60, massa: '144.24', estado: 'Sólido', reatividade: 'Reativo' },
    '61': { nome: 'Promécio', simbolo: 'Pm', numero: 61, massa: '145', estado: 'Sólido', reatividade: 'Radioativo' },
    '62': { nome: 'Samário', simbolo: 'Sm', numero: 62, massa: '150.36', estado: 'Sólido', reatividade: 'Reativo' },
    '63': { nome: 'Európio', simbolo: 'Eu', numero: 63, massa: '151.96', estado: 'Sólido', reatividade: 'Reativo' },
    '64': { nome: 'Gadolínio', simbolo: 'Gd', numero: 64, massa: '157.25', estado: 'Sólido', reatividade: 'Reativo' },
    '65': { nome: 'Terbio', simbolo: 'Tb', numero: 65, massa: '158.93', estado: 'Sólido', reatividade: 'Reativo' },
    '66': { nome: 'Disprósio', simbolo: 'Dy', numero: 66, massa: '162.50', estado: 'Sólido', reatividade: 'Reativo' },
    '67': { nome: 'Holmio', simbolo: 'Ho', numero: 67, massa: '164.93', estado: 'Sólido', reatividade: 'Reativo' },
    '68': { nome: 'Érbio', simbolo: 'Er', numero: 68, massa: '167.26', estado: 'Sólido', reatividade: 'Reativo' },
    '69': { nome: 'Túlio', simbolo: 'Tm', numero: 69, massa: '168.93', estado: 'Sólido', reatividade: 'Reativo' },
    '70': { nome: 'Itérbio', simbolo: 'Yb', numero: 70, massa: '173.04', estado: 'Sólido', reatividade: 'Reativo' },
    '71': { nome: 'Lutécio', simbolo: 'Lu', numero: 71, massa: '174.97', estado: 'Sólido', reatividade: 'Reativo' },
    '72': { nome: 'Háfnio', simbolo: 'Hf', numero: 72, massa: '178.49', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '73': { nome: 'Tântalo', simbolo: 'Ta', numero: 73, massa: '180.95', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '74': { nome: 'Tungsténio', simbolo: 'W', numero: 74, massa: '183.84', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '75': { nome: 'Rénio', simbolo: 'Re', numero: 75, massa: '186.21', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '76': { nome: 'Ósmio', simbolo: 'Os', numero: 76, massa: '190.23', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '77': { nome: 'Irídio', simbolo: 'Ir', numero: 77, massa: '192.22', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '78': { nome: 'Platina', simbolo: 'Pt', numero: 78, massa: '195.08', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '79': { nome: 'Ouro', simbolo: 'Au', numero: 79, massa: '196.97', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '80': { nome: 'Mercúrio', simbolo: 'Hg', numero: 80, massa: '200.59', estado: 'Líquido', reatividade: 'Pouco Reativo' },
    '81': { nome: 'Tálio', simbolo: 'Tl', numero: 81, massa: '204.38', estado: 'Sólido', reatividade: 'Reativo' },
    '82': { nome: 'Chumbo', simbolo: 'Pb', numero: 82, massa: '207.2', estado: 'Sólido', reatividade: 'Reativo' },
    '83': { nome: 'Bismuto', simbolo: 'Bi', numero: 83, massa: '208.98', estado: 'Sólido', reatividade: 'Pouco Reativo' },
    '84': { nome: 'Polónio', simbolo: 'Po', numero: 84, massa: '209', estado: 'Sólido', reatividade: 'Radioativo' },
    '85': { nome: 'Astato', simbolo: 'At', numero: 85, massa: '210', estado: 'Sólido', reatividade: 'Radioativo' },
    '86': { nome: 'Radão', simbolo: 'Rn', numero: 86, massa: '222', estado: 'Gás', reatividade: 'Radioativo' },
    '87': { nome: 'Frâncio', simbolo: 'Fr', numero: 87, massa: '223', estado: 'Sólido', reatividade: 'Radioativo' },
    '88': { nome: 'Rádio', simbolo: 'Ra', numero: 88, massa: '226', estado: 'Sólido', reatividade: 'Radioativo' },
    '89': { nome: 'Actínio', simbolo: 'Ac', numero: 89, massa: '227', estado: 'Sólido', reatividade: 'Radioativo' },
    '90': { nome: 'Tório', simbolo: 'Th', numero: 90, massa: '232.04', estado: 'Sólido', reatividade: 'Radioativo' },
    '91': { nome: 'Protactínio', simbolo: 'Pa', numero: 91, massa: '231.04', estado: 'Sólido', reatividade: 'Radioativo' },
    '92': { nome: 'Urânio', simbolo: 'U', numero: 92, massa: '238.03', estado: 'Sólido', reatividade: 'Radioativo' },
    '93': { nome: 'Neptúnio', simbolo: 'Np', numero: 93, massa: '237', estado: 'Sólido', reatividade: 'Radioativo' },
    '94': { nome: 'Plutónio', simbolo: 'Pu', numero: 94, massa: '244', estado: 'Sólido', reatividade: 'Radioativo' },
    '95': { nome: 'Amerício', simbolo: 'Am', numero: 95, massa: '243', estado: 'Sólido', reatividade: 'Radioativo' },
    '96': { nome: 'Cúrio', simbolo: 'Cm', numero: 96, massa: '247', estado: 'Sólido', reatividade: 'Radioativo' },
    '97': { nome: 'Berquélio', simbolo: 'Bk', numero: 97, massa: '247', estado: 'Sólido', reatividade: 'Radioativo' },
    '98': { nome: 'Califórnio', simbolo: 'Cf', numero: 98, massa: '251', estado: 'Sólido', reatividade: 'Radioativo' },
    '99': { nome: 'Einstênio', simbolo: 'Es', numero: 99, massa: '252', estado: 'Sólido', reatividade: 'Radioativo' },
    '100': { nome: 'Férmio', simbolo: 'Fm', numero: 100, massa: '257', estado: 'Sólido', reatividade: 'Radioativo' },
    '101': { nome: 'Mendelévio', simbolo: 'Md', numero: 101, massa: '258', estado: 'Sólido', reatividade: 'Radioativo' },
    '102': { nome: 'Nobélio', simbolo: 'No', numero: 102, massa: '259', estado: 'Sólido', reatividade: 'Radioativo' },
    '103': { nome: 'Lourenço', simbolo: 'Lr', numero: 103, massa: '262', estado: 'Sólido', reatividade: 'Radioativo' },
    '104': { nome: 'Rutherfórdio', simbolo: 'Rf', numero: 104, massa: '267', estado: 'Sólido', reatividade: 'Radioativo' },
    '105': { nome: 'Dúbnio', simbolo: 'Db', numero: 105, massa: '268', estado: 'Sólido', reatividade: 'Radioativo' },
    '106': { nome: 'Seabórgio', simbolo: 'Sg', numero: 106, massa: '269', estado: 'Sólido', reatividade: 'Radioativo' },
    '107': { nome: 'Bóhrio', simbolo: 'Bh', numero: 107, massa: '270', estado: 'Sólido', reatividade: 'Radioativo' },
    '108': { nome: 'Hássio', simbolo: 'Hs', numero: 108, massa: '277', estado: 'Sólido', reatividade: 'Radioativo' },
    '109': { nome: 'Meitnério', simbolo: 'Mt', numero: 109, massa: '278', estado: 'Sólido', reatividade: 'Radioativo' },
    '110': { nome: 'Darmstádio', simbolo: 'Ds', numero: 110, massa: '281', estado: 'Sólido', reatividade: 'Radioativo' },
    '111': { nome: 'Roentgenio', simbolo: 'Rg', numero: 111, massa: '280', estado: 'Sólido', reatividade: 'Radioativo' },
    '112': { nome: 'Copernício', simbolo: 'Cn', numero: 112, massa: '285', estado: 'Sólido', reatividade: 'Radioativo' },
    '113': { nome: 'Nihónio', simbolo: 'Nh', numero: 113, massa: '284', estado: 'Sólido', reatividade: 'Radioativo' },
    '114': { nome: 'Fleróvio', simbolo: 'Fl', numero: 114, massa: '289', estado: 'Sólido', reatividade: 'Radioativo' },
    '115': { nome: 'Moscóvio', simbolo: 'Mc', numero: 115, massa: '288', estado: 'Sólido', reatividade: 'Radioativo' },
    '116': { nome: 'Livermório', simbolo: 'Lv', numero: 116, massa: '293', estado: 'Sólido', reatividade: 'Radioativo' },
    '117': { nome: 'Tenesso', simbolo: 'Ts', numero: 117, massa: '292', estado: 'Sólido', reatividade: 'Radioativo' },
    '118': { nome: 'Oganéssio', simbolo: 'Og', numero: 118, massa: '294', estado: 'Gás', reatividade: 'Radioativo' }
};

// Elemento do modal
const modal = document.getElementById('modalElemento');
const modalFechar = document.querySelector('.modal-fechar');

// Fechar o modal ao clicar no botão X
modalFechar.addEventListener('click', () => {
    modal.classList.remove('ativo');
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('ativo');
    }
});

// Adicionar evento de clique a todos os elementos
document.querySelectorAll('.elemento').forEach(elemento => {
    elemento.addEventListener('click', () => {
        // Verificar se é um elemento de intervalo
        if (elemento.hasAttribute('data-intervalo')) {
            return; // Não abre modal para intervalos
        }
        
        // Obter dados do elemento
        const numero = elemento.getAttribute('data-numero');
        
        // Verifica se é um intervalo (ex: "57-71")
        if (numero && numero.includes('-')) {
            return; // Não abre modal para intervalos
        }
        
        // Obter dados do objeto
        const dados = dadosElementos[numero];
        const categoria = elemento.getAttribute('data-categoria');
        
        if (!dados) return;
        
        // Obter cor da categoria
        const cor = coresCategorias[categoria] || '#2C3E50';
        const nomeCategoria = nomsCategorias[categoria] || 'Desconhecida';
        
        // Preencher o modal
        document.getElementById('modalNome').textContent = dados.nome;
        document.getElementById('modalCategoria').textContent = nomeCategoria;
        document.getElementById('modalSimbolo').textContent = dados.simbolo;
        document.getElementById('modalSimbolo').style.color = cor;
        document.getElementById('modalNumero').textContent = dados.numero;
        document.getElementById('modalMassa').textContent = dados.massa;
        document.getElementById('modalEstado').textContent = dados.estado;
        document.getElementById('modalReatividade').textContent = dados.reatividade;
        
        // Mostrar o modal
        modal.classList.add('ativo');
    });
});

// Fechar modal com tecla Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.classList.remove('ativo');
    }
});

// =================================
// FILTRO DE CATEGORIAS
// =================================

// Obter todos os botões de filtro
const botoesFiltro = document.querySelectorAll('.botao-filtro');
const elementos = document.querySelectorAll('.elemento');

// Adicionar evento de clique a cada botão
botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        const categoriaSelecionada = botao.getAttribute('data-categoria');
        
        // Atualizar o botão ativo
        botoesFiltro.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
        
        // Filtrar elementos
        elementos.forEach(elemento => {
            // Elementos de intervalo ("*" e "**")
            if (elemento.hasAttribute('data-intervalo')) {
                // Mostrar apenas se filtro for "todos" ou categoria correspondente
                if (categoriaSelecionada === 'todos' || 
                    (categoriaSelecionada === 'lantanideos' && elemento.getAttribute('data-numero') === '57-71') ||
                    (categoriaSelecionada === 'actinideos' && elemento.getAttribute('data-numero') === '89-103')) {
                    elemento.style.display = 'flex';
                } else {
                    elemento.style.display = 'none';
                }
                return;
            }
            
            if (categoriaSelecionada === 'todos') {
                // Mostrar todos os elementos
                elemento.style.display = 'flex';
            } else {
                // Mostrar apenas elementos da categoria selecionada
                const categoriaElemento = elemento.getAttribute('data-categoria');
                if (categoriaElemento === categoriaSelecionada) {
                    elemento.style.display = 'flex';
                } else {
                    elemento.style.display = 'none';
                }
            }
        });
    });
});
