import { useState, useEffect } from "react";
import GenericForm from "../../components/form";
import styles from "./Formular.module.css";
import { getProducts } from "../../../utils/utils.ts";
import { getPurchases } from "../../../utils/utils.ts";

export default function FormularioCompras() {
    const [options, setOptions] = useState([]);
    const [optionsPurchase, setOptionsPurchase] = useState([]);

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
        getPurchases().then((response) =>
            setOptionsPurchase(
                response?.map((optionsPurchase) => ({
                    label: optionsPurchase.nome_compra,
                    value: optionsPurchase.id_compra,
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
            label: "Selecionar Compra",
            type: "select",
            options: optionsPurchase,
            style: styles.select,
            control: "id_compra",
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
        entity.id_compra = parseInt(entity.id_compra);
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
                <h1>Cadastro de Item Compra</h1>{" "}
            </div>
            <GenericForm
                fields={fields}
                entity={"itemCompra"}
                idControl="id_item_compra"
                formatSaveEntity={formatToSave}
            />
        </>
    );
}
