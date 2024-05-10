import styles from "./storeManager.module.css";
import TableCustom  from "../components/table";
import { useEffect, useState } from "react";
import fetchData from "@/request";
import { getObj } from "@/utils/utils";
import { FormSelect } from "react-bootstrap";



const entities = [{label: "cliente", value: "cliente"}, {label: "compra", value: "compra"}, {label: "fornecedores", value: "fornecedores"}, {label: "itemCompra", value: "itemCompra"}, {label: "itemVenda", value: "itemVenda"}, {label: "produtos", value: "produtos"}, {label: "venda", value: "venda"}]
export default function StoreManager() {
  const [data, setData] = useState([])
  const [entity, setEntity] = useState()

  useEffect(() => {
    getObj("produtos")
  },[])
  useEffect(() => {
    if(entity){
      getObj(entity).then(response => setData(response))
    }
  },[entity])  

  return (
    <div>
      <div>
        <div>
          <FormSelect onChange={(e) => setEntity(e.target.value)}>{entities.map(entity => (<option value={entity.value}>{entity.label}</option>))}</FormSelect>
        {!data ? null : <TableCustom data={data} />}
        </div>
      </div>
    </div>
  );
}
