import React from 'react';

function Parte2(){

    const containerPart1Style = {
        backgroundColor: '#fff',
        color: '#000000',
        textAlign: 'left', // Alinhando o texto à esquerda
        minHeight: '200px', // Definindo uma altura mínima para o container
        padding: '20px', // Adicionando espaçamento interno
        margin: '0 auto', // Centralizando o container horizontalmente
        maxWidth: '1450px', // Definindo uma largura máxima para o container
        fontFamily: 'Arial, sans-serif', // Definindo uma fonte para todo o componente
    };

    const imagesContainerStyle = {
        display: 'flex',
        justifyContent: 'space-evenly', // Centralizando as imagens horizontalmente
    };

    const imageStyle = {
        margin: '10px', // Adicionando margem entre as imagens
    };

    const textStyle = {
        fontWeight: 300, // Definindo a fonte mais fina
    };

    const highlightTextStyle = {
        backgroundColor: 'yellow', // Definindo o fundo amarelo para simular o efeito de marcação de texto
    };

    return(
        <>
            <div style={containerPart1Style}>
                <h1>Só nos 2 primeiros meses de 2024 foram mais de 500 vendas de um produto que iniciou como um simples ebook, 
                totalizando um ganho líquido de <span style={highlightTextStyle}>R$37.127,60</span>.</h1>
                
                <div style={imagesContainerStyle}>
                    <img src="mes1pag.png" alt="Imagem 1" style={imageStyle} />
                    <img src="mes2pag.png" alt="Imagem 2" style={imageStyle} />
                </div>

                <h1 style={{ ...textStyle, fontWeight: 'bold' }}>Aproximadamente <span style={highlightTextStyle}>10 vendas por dia</span>.</h1>
                <br/>

                <h1 style={textStyle}>Vender um produto digital, como seu primeiro ebook, oferece uma maneira ágil de materializar um projeto, gerando lucro quase instantaneamente. </h1>
                <h1 style={textStyle}>Com o método que compartilho, você cria um produto simples e premium ao mesmo tempo, garantindo que seus clientes percebam o valor em cada centavo investido.</h1>
                <h1 style={textStyle}>E essa é a sua chance de ter acesso ao meu método organizado e passo a passo para sair na frente.</h1>
                <h1 style={textStyle}>Eu vou te ensinar tudo, entregar o <span style={highlightTextStyle}>OURO</span> e por um preço ridículo...</h1>

                <div style={imagesContainerStyle}>
                    <img src="prova1.png" alt="Imagem 1" style={imageStyle} />
                    <img src="prova2.png" alt="Imagem 2" style={imageStyle} />
                </div>
            </div>
        </>
    )
}

export default Parte2;
