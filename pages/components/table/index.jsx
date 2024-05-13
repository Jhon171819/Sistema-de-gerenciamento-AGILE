import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import './styles.css';

// Definindo a interface para as props do componente
// (Você precisará definir essa interface se estiver usando TypeScript)

class TableCustom extends Component {
  renderAcoes(objeto, index) {
    // Aqui você pode adicionar as ações que desejar, como editar ou excluir
    return (
      <td key={`acao-${index}`}>
        acoes
        <a onClick={() => this.editarItem(objeto, index)}>Editar</a>
        <a onClick={() => this.excluirItem(objeto, index)}>Excluir</a>
      </td>
    );
  }

  render() {
    const { data } = this.props;

    if (!data.length) {
      return <div>Tabela vazia</div>;
    }

    const cabecalhos = data[0] ? [...Object.keys(data[0]), 'Ações'] : [];


    return (
      <Table striped bordered hover className='table'>
        <thead>
          <tr>
            {cabecalhos.map((chave) => (
              <th key={chave}>{chave}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((objeto, index) => (
            <tr key={index}>
              {cabecalhos.map((chave) => (
                <td key={`${index}-${chave}`}>{objeto[chave]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default TableCustom;