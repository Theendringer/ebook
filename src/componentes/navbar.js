import React from 'react';

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#00FF00',
    color: '#000000',
    padding: '10px', // Adicionando algum espaçamento interno para melhorar a aparência
    textAlign: 'center', // Alinhando o texto no centro
  };

  const titleStyle = {
    margin: '0', // Removendo a margem padrão do título
    fontSize: '1.5rem', // Definindo um tamanho de fonte maior
  };

  return (
    <nav style={navbarStyle}>
      <h5 style={titleStyle}>VENDA SEU PRIMEIRO EBOOK - VITÁLICIO</h5>
    </nav>
  );
}

export default Navbar;
