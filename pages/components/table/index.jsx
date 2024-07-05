import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import './styles.css';

class TableCustom extends Component {
    render() {
        const { data, excluirItem, editarItem } = this.props;

        if (!data?.length) {
            return <div>Tabela vazia</div>;
        }

        const cabecalhos = data[0] ? [...Object.keys(data[0]), "Ações"] : [];

        return (
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        {cabecalhos.map((chave) => (
                            <th key={chave}>{chave}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((objeto) => (
                        <tr key={objeto.id}> {/* Substitua 'id' pelo identificador único do seu objeto */}
                            {cabecalhos.map((chave) => (
                                <td key={`${objeto.id}-${chave}`}>
                                    {objeto[chave]}
                                </td>
                            ))}
                            <td>
                                <a onClick={() => editarItem(objeto)}>
                                    <i className="bi bi-pencil-square"></i>
                                </a>
                                {' '}
                                <a onClick={() => excluirItem(objeto)}>
                                    Excluir
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default TableCustom;
