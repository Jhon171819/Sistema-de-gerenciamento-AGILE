import { useState, useEffect } from "react";
import GenericForm from "../../components/form";
import { getPartners } from "../../../utils/utils.ts";

export default function FormularioCompras() {
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
            label: "Selecionar fornecedor",
            type: "select",
            options: options,
            control: "id_fornecedor",
        },
        {
            label: "Nome da compra",
            type: "text",
            control: "nome_compra",
        },
        {
            label: "Data da compra",
            type: "date",
            control: "data_compra",
        },

    ];
    
    function formatToSave(entity) {
        entity.id_fornecedor = parseInt(entity.id_fornecedor);
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
                <h1>Cadastro de Compra</h1>{" "}
            </div>
            <GenericForm
                fields={fields}
                entity={"compra"}
                idControl="id_compra"
                formatSaveEntity={formatToSave}
            />
        </>
    );
}
