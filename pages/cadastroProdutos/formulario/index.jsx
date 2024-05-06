import { useState } from "react";
import { useEffect } from "react";
import GenericForm from '../../components/form'
import styles from "./Formular.module.css"
import {getPartners} from '../../../utils/utils.ts'


export default function FormularioProdutos() {
  const [options, setOptions] = useState([{label: "nenhum", value: "nenhum"}])
  const [ID, setIDs] = useState();
  const [show, setShow] = useState(undefined);
  const [newItem, setNewItem] = useState(undefined);
  const [event, setEvent] = useState();

  useEffect(() => {
    getPartners().then(response => setOptions(response?.map(option => ({label: option. nome_fornecedor, value: option.id_fornecedor}))))
  }, []);

  const fields = [
    {label: "Nome do produto", type: "text", style: styles.text, control: "nome_produto" },
    {label: "Selecionar fornecedor", type: "select",options: options ,style: styles.select, control: "id_fornecedor"},
    {label: "Quantidade em estoque", type: "number", style: styles.number, control: "qtd_estoque"},
    {label: "Valor do produto", type: "number", style: styles.number, prefix: 'R$', control: "preco"},
    {label: "Descrição", type: "text", style: styles.text, control: "descricao"}
  ]

  return (
    <>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}> <h1>Cadastro de produto</h1> </div>
      <GenericForm fields={fields} entity={"produto"} idControl="id_produto"/>
    </>
  );
}
