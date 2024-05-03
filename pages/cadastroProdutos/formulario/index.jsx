import { useState } from "react";
import { useEffect } from "react";
import GenericForm from '../../components/form'
import styles from "./Formular.module.css"


export default function FormularioProdutos() {
  const [objeto, setObjeto] = useState([]);
  const [ID, setIDs] = useState();
  const [show, setShow] = useState(undefined);
  const [newItem, setNewItem] = useState(undefined);
  const [event, setEvent] = useState();

  useEffect(() => {
    setShow(objeto);
  }, [objeto]);

  const fields = [
    {label: "Nome do produto", type: "text", style: styles.text},
    {label: "Nome do Fornecedor", type: "select", style: styles.select},
    {label: "Quantidade em estoque", type: "number", style: styles.number},
    {label: "Valor do produto", type: "number", style: styles.number, prefix: 'R$'}
  ]

  return (
    <>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}> <h1>Cadastro de produto</h1> </div>
      <GenericForm fields={fields}/>
    </>
  );
}
