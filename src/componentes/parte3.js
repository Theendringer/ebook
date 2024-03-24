import React from 'react';

function Parte3() {
    const containerPart3Style = {
        backgroundColor: '#000000',
        color: '#00FF00',
        textAlign: 'center',
        padding: '20px',
        margin: '0 auto',
        maxWidth: '100%',
        fontFamily: 'Arial, sans-serif',
    };

    const innerDivStyle = {
        maxWidth: '100%',
        margin: '0 auto',
    };

    const titleStyle = {
        wordWrap: 'break-word',
        marginBottom: '20px',
        fontSize: '2em',
        fontWeight: 'bold',
        fontFamily: 'Georgia, serif',
    };

    const subtitleStyle = {
        color: '#FFFFFF',
        fontSize: '1.4em',
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
        margin: '0 auto',
    };

    const promoStyle = {
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '20px',
    };

    const promoTextStyle = {
        color: '#000000',
        fontSize: '1.5em',
        fontWeight: 'bold',
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '1.5em',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '5px',
    };

    return (
        <div style={containerPart3Style}>
            <div style={innerDivStyle}>
                <h1 style={titleStyle}>Através desse curso 100% prático, você será capaz de vender ebooks de qualidade.</h1>
                <p style={subtitleStyle}>Explore o potencial ilimitado de ganhos ao vender ebooks e conquiste sua independência financeira.</p>
            </div>
            <div style={cardStyle}>
                <h2 style={titleStyle}>Promoção</h2>
                <p style={subtitlePromoStyle}>Valor: <span style={promoTextStyle}>R$89,99</span> <span style={{ textDecoration: 'line-through' }}>R$159,99</span></p>
                <div style={promoStyle}>
                    <a href="https://pay.kirvano.com/7ea9aa4b-f8e2-4498-bec4-1de34b802f3d" style={buttonStyle}>Comprar Agora!</a>
                </div>
            </div>
        </div>
    );
}

export default Parte3;
