import React from 'react';

function Parte1() {
    const containerPart1Style = {
        backgroundColor: '#000000',
        color: '#00FF00',
        textAlign: 'center',
        padding: '20px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden', // Adicionando overflow para eliminar bordas laterais
    };

    const innerDivStyle = {
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
    };

    const titleStyle = {
        wordWrap: 'break-word',
        marginBottom: '20px',
        fontSize: '2em',
        fontWeight: 'bold',
    };

    const subtitleStyle = {
        color: '#FFFFFF',
        fontSize: '1.4em',
        maxWidth: '800px',
        margin: '0 auto',
    };

    const subtitlePromoStyle = {
        color: '#000000',
        fontSize: '1.5em',
        fontWeight: 'bold',
    };

    const cardStyle = {
        backgroundColor: '#FFFFFF',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '80%', // Reduzindo a largura máxima do cartão para 80% da tela
        width: '90%',
        margin: '20px auto',
    };

    const promoStyle = {
        backgroundColor: '#FFD700',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '20px',
        cursor: 'pointer',
    };

    const promoTextStyle = {
        color: '#000000',
        fontSize: '1.2em',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        textDecoration: 'none',
        cursor: 'pointer',
    };

    return (
        <div style={containerPart1Style}>
            <div style={innerDivStyle}>
                <h1 style={{ ...titleStyle, fontFamily: 'Georgia, serif' }}>PASSO A PASSO PARA CRIAR UM EBOOK DO ZERO EM ATÉ 7 DIAS E FAZER SEUS PRIMEIROS R$10 MIL NA INTERNET</h1>
                <p style={subtitleStyle}>Adquira já o guia completo para criar seu próprio site de venda de ebooks, 
                sem cobranças mensais. Com ele, você poderá desenvolver um produto digital capaz de gerar seus primeiros dez mil 
                reais rapidamente, seja para construir sua autoridade online ou vender de forma discreta.</p>
            </div>
            <div style={{ ...cardStyle }}>
                <h2 style={{ ...titleStyle, fontFamily: 'Georgia, serif' }}>Promoção</h2>
                <p style={subtitlePromoStyle}>Valor: <span style={promoTextStyle}>R$89,99</span> <span style={{ textDecoration: 'line-through' }}>R$159,99</span></p>
                <div style={promoStyle}>
                    <a href="https://pay.kirvano.com/7ea9aa4b-f8e2-4498-bec4-1de34b802f3d" style={promoTextStyle}>Compre hoje e tenha acesso vitálicio</a>
                </div>
            </div>
        </div>
    );
}

export default Parte1;
