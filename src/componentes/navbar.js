import React from 'react';

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#00FF00',
    color: '#000000',
    padding: '2vh', // Alterando o espaçamento interno para 2% da altura da viewport
    textAlign: 'center', // Alinhando o texto no centro
  };

  const titleStyle = {
    margin: '0', // Removendo a margem padrão do título
    fontSize: '3vh', // Definindo um tamanho de fonte como 3% da altura da viewport
  };

  return (
    <nav style={navbarStyle}>
      <h5 style={titleStyle}>VENDA SEU PRIMEIRO EBOOK - VITÁLICIO</h5>
    </nav>
  );
}

export default Navbar;
