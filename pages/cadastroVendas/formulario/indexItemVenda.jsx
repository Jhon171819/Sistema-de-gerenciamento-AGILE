import { useState, useEffect } from "react";
import GenericForm from "../../components/form";
import styles from "./Formular.module.css";
import { getProducts } from "../../../utils/utils.ts";
import { getSells } from "../../../utils/utils.ts";

export default function FormularioCompras() {
    const [options, setOptions] = useState([]);
    const [optionsSells, setOptionsSells] = useState([]);

    useEffect(() => {
        getProducts().then((response) =>
            setOptions(
                response?.map((option) => ({
                    label: option.nome_produto,
                    value: option.id_produto,
                }))
            )
        );
    }, []);

    useEffect(() => {
        getSells().then((response) =>
            setOptionsSells(
                response?.map((optionsSells) => ({
                    label: optionsSells.nome_venda,
                    value: optionsSells.id_venda,
                }))
            )
        );
    }, []);

    const fields = [
        {
            label: "Selecionar Produto",
            type: "select",
            options: options,
            style: styles.select,
            control: "id_produto",
        },
        {
            label: "Selecionar Venda",
            type: "select",
            options: optionsSells,
            style: styles.select,
            control: "id_venda",
        },
        {
            label: "Valor Unitario",
            type: "number",
            style: styles.select,
            control: "valor_unitario",
        },
        {
            label: "Quantidade",
            type: "number",
            style: styles.select,
            control: "quantidade",
        },


    ];
    
    function formatToSave(entity) {
        entity.id_produto = parseInt(entity.id_produto);
        entity.id_venda = parseInt(entity.id_venda);
        entity.valor_unitario = parseInt(entity.valor_unitario);
        entity.quantidade = parseInt(entity.quantidade);

     
        if(!entity.id_produto) {
            alert("selecione um produto")
            return null;
        }else
            return entity;
        
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
                <h1>Cadastro de Item Venda</h1>{" "}
            </div>
            <GenericForm
                fields={fields}
                entity={"itemVenda"}
                idControl="id_item_venda"
                formatSaveEntity={formatToSave}
            />
        </>
    );
}
