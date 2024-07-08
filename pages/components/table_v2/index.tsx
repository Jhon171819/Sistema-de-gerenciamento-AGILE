import React from "react";
import { Table } from "react-bootstrap";

// Defina a estrutura do objeto de dados esperado
interface IDataObject {
    id: string; // ou outro tipo que represente o identificador único
    [key: string]: any; // para as outras chaves dinâmicas
}

interface ITableProps {
    data: IDataObject[];
    delete: (id: string) => void;
    edit: (objeto: IDataObject) => void;
}

function TableV2({ data, delete: handleDelete, edit: handleEdit }: ITableProps): JSX.Element{

    const cabecalhos = data.length > 0 ? Object.keys(data[0]) : [];
    if (!data?.length) {
        return <div>Tabela vazia</div>;
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {cabecalhos.map((chave) => (
                        <th key={chave}>{chave}</th>
                    ))}
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {data.map((objeto) => (
                    <tr key={objeto.id}>
                        {cabecalhos.map((chave) => (
                            <td key={`${objeto.id}-${chave}`}>
                                {objeto[chave]}
                            </td>
                        ))}
                        <td>
                            <button onClick={() => handleEdit(objeto)}>
                                Editar
                            </button>
                            {' '}
                            <button onClick={() => handleDelete(objeto.id)}>
                                Excluir
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TableV2;
