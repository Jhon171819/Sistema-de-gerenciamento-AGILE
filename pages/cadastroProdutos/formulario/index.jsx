import { useState, useEffect } from "react";
import GenericForm from "../../components/form";
import { getPartners } from "../../../utils/utils.ts";

export default function FormularioProdutos() {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        getPartners().then((response) =>
            setOptions(
                response?.map((option) => ({
                    label: option.nome_fornecedor,
                    value: option.id_fornecedor,
                }))
            )
        );
    }, []);

    const fields = [
        {
            label: "Nome do produto",
            type: "text",
            control: "nome_produto",
        },
        {
            label: "Selecionar fornecedor",
            type: "select",
            options: options,
            control: "id_fornecedor",
        },
        {
            label: "Quantidade em estoque",
            type: "number",
            control: "qtd_estoque",
        },
        {
            label: "Valor do produto",
            type: "number",
            prefix: "R$",
            control: "preco",
        },
        {
            label: "Descrição",
            type: "text",
            control: "descricao",
        },
    ];
    function formatToSave(entity) {
        entity.id_fornecedor = parseInt(entity.id_fornecedor);
        entity.qtd_estoque = parseInt(entity.qtd_estoque);
        entity.preco = parseInt(entity.preco);
        if (!entity.id_fornecedor) {
            alert("sem selecione um fornecedor");
            return null;
        } else return entity;
    }
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {" "}
                <h1>Cadastro de produto</h1>{" "}
            </div>
            <GenericForm
                fields={fields}
                entity={"produtos"}
                idControl="id_produto"
                formatSaveEntity={formatToSave}
            />
        </>
    );
}
