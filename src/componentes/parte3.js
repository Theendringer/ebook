import React from 'react';

function Parte3(){

    const containerPart1Style = {
        backgroundColor: '#000000',
        color: '#00FF00',
        textAlign: 'center',
        minHeight: '300px', // Definindo uma altura mínima para o container
        padding: '20px', // Adicionando espaçamento interno
        margin: '0 auto', // Centralizando o container horizontalmente
        fontFamily: 'Arial, sans-serif', // Definindo uma fonte para todo o componente
    };

    const innerDivStyle = {
        maxWidth: '1300px', // Definindo a largura máxima da nova div interna
        width: '100%', // Garantindo que a nova div interna ocupe toda a largura disponível
        margin: '0 auto', // Centralizando a nova div interna horizontalmente
    };

    const titleStyle = {
        wordWrap: 'break-word', // Permitir que o texto quebre automaticamente
        marginBottom: '20px', // Adicionando margem inferior para separar os textos
        fontSize: '2em', // Ajustando o tamanho da fonte do título
        fontWeight: 'bold', // Tornando a fonte do título em negrito
    };

    const subtitleStyle = {
        color: '#FFFFFF', // Definindo a cor do texto como branco
        fontSize: '1.4em', // Ajustando o tamanho da fonte do subtítulo
    };

    const subtitlePromoStyle = {
        color: '#000000', // Definindo a cor do texto como preto
        fontSize: '1.5em', // Ajustando o tamanho da fonte do subtítulo
        fontWeight: 'bold', // Tornando a fonte do subtítulo em negrito
    };

    const cardStyle = {
        backgroundColor: '#FFFFFF',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '400px', // Definindo a largura máxima do card
        width: '100%', // Garantindo que o card ocupe toda a largura disponível
        margin: '0 auto', // Centralizando o card horizontalmente
    };

    const promoStyle = {
        padding: '10px', // Adicionando espaçamento interno
        borderRadius: '5px', // Adicionando bordas arredondadas
        marginBottom: '20px', // Adicionando margem inferior para separar do próximo item
    };

    const promoTextStyle = {
        color: '#000000', // Definindo a cor do texto como preto
        fontSize: '1.5em', // Ajustando o tamanho da fonte
        fontWeight: 'bold', // Tornando o texto em negrito
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50', // Definindo a cor de fundo do botão
        border: 'none', // Removendo borda do botão
        color: 'white', // Cor do texto do botão
        padding: '15px 32px', // Adicionando espaçamento interno ao botão
        textAlign: 'center', // Alinhamento do texto ao centro
        textDecoration: 'none', // Removendo decoração do link
        display: 'inline-block', // Exibindo como bloco
        fontSize: '1.5em', // Tamanho da fonte do botão
        margin: '4px 2px', // Margem externa do botão
        cursor: 'pointer', // Cursor do mouse ao passar sobre o botão
        borderRadius: '5px', // Adicionando bordas arredondadas ao botão
    };

    return(
        <>
            <div style={containerPart1Style}>
                <div style={innerDivStyle}>
                    <h1 style={{ ...titleStyle, fontFamily: 'Georgia, serif' }}>Através desse curso 100% prático, você será capaz de vender ebooks de qualidade.</h1>
                    <p style={subtitleStyle}>Explore o potencial ilimitado de ganhos ao vender ebooks e conquiste sua independência financeira.</p>
                </div>
                <div style={cardStyle}>
                    <h2 style={{ ...titleStyle, fontFamily: 'Georgia, serif' }}>Promoção</h2>
                    <p style={subtitlePromoStyle}>Valor: <span style={promoTextStyle}>R$89,99</span> <span style={{ textDecoration: 'line-through' }}>R$159,99</span></p>
                    <div style={promoStyle}>
                        <a href="https://pay.kirvano.com/7ea9aa4b-f8e2-4498-bec4-1de34b802f3d" style={buttonStyle}>Comprar Agora!</a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Parte3;
