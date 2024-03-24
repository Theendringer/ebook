import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQSection() {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const faqContainerStyle = {
        backgroundColor: '#FFFFFF',
        padding: '40px 20px', // Adicionando espaçamento interno
        textAlign: 'center',
        margin: '0 auto', // Centralizando horizontalmente
        maxWidth: '600px', // Definindo uma largura máxima para o container
    };

    const faqTitleStyle = {
        fontSize: '2em',
        marginBottom: '20px',
    };

    const faqItemStyle = {
        textAlign: 'left',
        marginBottom: '20px',
        cursor: 'pointer',
    };

    const questionStyle = {
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const iconStyle = {
        marginLeft: '10px',
    };

    const questionsAndAnswers = [
        {
            question: 'Ainda vale a pena vender ebook?',
            answer: 'Sim, ebook nunca deixou de vender e é a forma mais simples e rápida de ter um produto em mãos para validar sua oferta.',
        },
        {
            question: 'Como eu faço para ter acesso a minha compra?',
            answer: 'Assim que você clicar no botão de compra, será direcionado à tela de cadastro e pagamento da plataforma Kirvano, que é segura e confiável. Após o pagamento ser compensado, será encaminhado um e-mail com seus dados para acesso ao ebook. Qualquer dúvida, entre em contato no e-mail de suporte gustavoendringerp@gmail.com.',
        },
        {
            question: 'Como faço para entrar em contato com o suporte?',
            answer: 'Você pode entrar em contato com nosso suporte por e-mail em gustavoendringerp@gmail.com ou pelo telefone (27) 98856-8207.',
        },
    ];

    const toggleAnswer = (index) => {
        if (selectedQuestion === index) {
            setSelectedQuestion(null);
        } else {
            setSelectedQuestion(index);
        }
    };

    return (
        <div style={faqContainerStyle}>
            <h2 style={faqTitleStyle}>Perguntas Frequentes</h2>
            {questionsAndAnswers.map((item, index) => (
                <div key={index} style={faqItemStyle} onClick={() => toggleAnswer(index)}>
                    <div style={questionStyle}>
                        <h3>{item.question}</h3>
                        {selectedQuestion === index ? <FaChevronUp style={iconStyle} /> : <FaChevronDown style={iconStyle} />}
                    </div>
                    {selectedQuestion === index && <p>{item.answer}</p>}
                </div>
            ))}
        </div>
    );
}

export default FAQSection;
