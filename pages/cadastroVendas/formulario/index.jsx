import { useState, useEffect } from "react";
import GenericForm from "../../components/form";
import styles from "./Formular.module.css";
import { getClients } from "../../../utils/utils.ts";

export default function FormularioVendas() {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        getClients().then((response) =>
            setOptions(
                response?.map((option) => ({
                    label: option.nome,
                    value: option.id_cliente,
                }))
            )
        );
    }, []);

    const fields = [
        {
            label: "Selecionar cliente",
            type: "select",
            options: options,
            style: styles.select,
            control: "id_cliente",
        },
        {
            label: "Nome da Venda",
            type: "text",
            style: styles.select,
            control: "nome_venda",
        },
        {
            label: "Data da venda",
            type: "date",
            style: styles.date,
            control: "data_venda",
        },

    ];
    
    function formatToSave(entity) {
        entity.id_cliente = parseInt(entity.id_cliente);
        if (!entity.id_cliente) {
            alert("selecione um cliente");
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
                <h1>Cadastro de Vendas</h1>{" "}
            </div>
            <GenericForm
                fields={fields}
                entity={"venda"}
                idControl="id_venda"
                formatSaveEntity={formatToSave}
            />
        </>
    );
}
