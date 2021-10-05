import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() { 
    return (
      <div>
        {conteudos.map((element) =>(
          <div key={element.conteudo} className='Card'>
            <h2>O conteúdo é: { element.conteudo }</h2>
            <h3>Status: { element.status }</h3>
            <h4>Bloco: { element.bloco }</h4>
          </div>
        ))}
      </div>  
    )
  }
}

export default Content;