import React from 'react';

function TermosDeUso() {
    const termosDeUsoStyle = {
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: '40px 20px', // Adicionando espaçamento interno
        textAlign: 'center',
        maxWidth: '100vw', // Largura total da viewport
    };

    return (
        <div style={termosDeUsoStyle}>
            <h2>Termos de Uso</h2>
            <p>
                Eu acredito em um trabalho honesto e mostro aqui os tipos de resultados que são possíveis de serem alcançados ao se ter as informações certas e verdadeiras. Mas que fique claro: os meus resultados não são típicos e não estou de maneira alguma implicando que você irá imediatamente, sem esforço e como um “passe de mágica” ter os mesmos tipos de resultados. Isso porque esse é um trabalho sério e legal. O quão rápido e o quão longe você poderá chegar só e somente você poderá dizer. Meu objetivo aqui ao compartilhar a minha história é dar a melhor e mais justa chance para todos aqueles que não tem medo de trabalhar um pouco em luta dos seus sonhos e objetivos. Para realmente poder dar uma melhor qualidade de vida para si mesmo e para todos outros que nos importam e que fazem essa vida valer a pena. Este site não é afiliado ao Facebook ou a qualquer entidade do mesmo. Ao sair do Facebook, a responsabilidade passa a ser nossa, os criadores e gestores do site. Todos os resultados apresentados são condicionados à execução do comprador, tornando isentos os gestores deste site de quaisquer responsabilidades com as expectativas de resultados do comprador. Todos os dados do comprador são utilizados em conformidade com a LGPD e demais legislações vigentes aplicáveis.
            </p>
        </div>
    );
}

export default TermosDeUso;
