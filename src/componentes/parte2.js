import React from 'react';

function Parte2() {
    const containerPart2Style = {
        backgroundColor: '#fff',
        color: '#000000',
        textAlign: 'left',
        padding: '20px',
        margin: '0 auto',
        maxWidth: '100%',
        fontFamily: 'Arial, sans-serif',
    };

    const imagesContainerStyle = {
        display: 'flex',
        justifyContent: 'center', // Centralizando as imagens horizontalmente
        flexWrap: 'wrap', // Permitindo que as imagens quebrem para uma nova linha se não couberem na largura do contêiner
    };

    const imageStyle = {
        margin: '10px',
        maxWidth: 'calc(50% - 20px)', // Definindo a largura máxima de cada imagem para 50% do contêiner com margens
        height: 'auto', // Permitindo que a altura seja ajustada automaticamente
    };

    const textStyle = {
        fontWeight: 300,
        textAlign: 'center', // Alinhando o texto ao centro em telas pequenas
    };

    const highlightTextStyle = {
        backgroundColor: 'yellow',
    };

    return (
        <div style={containerPart2Style}>
            <h1>Só nos 2 primeiros meses de 2024 foram mais de 500 vendas de um produto que iniciou como um simples ebook,
                totalizando um ganho líquido de <span style={highlightTextStyle}>R$37.127,60</span>.</h1>

            <div style={imagesContainerStyle}>
                <img src="mes1pag.png" alt="Imagem 1" style={imageStyle} />
                <img src="mes2pag.png" alt="Imagem 2" style={imageStyle} />
            </div>

            <h1 style={{ ...textStyle, fontWeight: 'bold' }}>Aproximadamente <span style={highlightTextStyle}>10 vendas por dia</span>.</h1>
            <br />

            <h1 style={textStyle}>Vender um produto digital, como seu primeiro ebook, oferece uma maneira ágil de materializar um projeto, gerando lucro quase instantaneamente. </h1>
            <h1 style={textStyle}>Com o método que compartilho, você cria um produto simples e premium ao mesmo tempo, garantindo que seus clientes percebam o valor em cada centavo investido.</h1>
            <h1 style={textStyle}>E essa é a sua chance de ter acesso ao meu método organizado e passo a passo para sair na frente.</h1>
            <h1 style={textStyle}>Eu vou te ensinar tudo, entregar o <span style={highlightTextStyle}>OURO</span> e por um preço ridículo...</h1>

            <div style={imagesContainerStyle}>
                <img src="prova1.png" alt="Imagem 1" style={imageStyle} />
                <img src="prova2.png" alt="Imagem 2" style={imageStyle} />
            </div>
        </div>
    );
}

export default Parte2;
