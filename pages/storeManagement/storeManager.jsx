import styles from "./storeManager.module.css";
import TableCustom  from "../components/table";
import GenericTable from "../components/tableLayout"
import { useEffect, useState } from "react";
import fetchData from "@/request";
import { getObj } from "@/utils/utils";
import { FormSelect } from "react-bootstrap";



const entities = [{label: "cliente", value: "cliente"}, {label: "compra", value: "compra"}, {label: "fornecedores", value: "fornecedores"}, {label: "itemCompra", value: "itemCompra"}, {label: "itemVenda", value: "itemVenda"}, {label: "produtos", value: "produtos"}, {label: "venda", value: "venda"}]
export default function StoreManager() {
  const [data, setData] = useState([])
  const [entity, setEntity] = useState()

  const generateColumns = (data) => {
    if (data.length === 0) return [];
  
    const keys = Object.keys(data[0]);
    const columns = keys.map(key => ({
      sort: true,
      dataField: key,
      text: key.charAt(0).toUpperCase() + key.slice(1),
      filter: {
        type: FILTER_TYPES.TEXT
      }
    }));
  
    // Add a custom "Actions" column
    columns.push({
      dataField: "actions",
      text: "Ações",
      formatter: (cell, row) => (
        <button className="btn btn-primary" onClick={() => alert(`Action on row with id ${row.id}`)}>
          Action
        </button>
      ),
      isDummyField: true
    });
  
    return columns;
  };

  useEffect(() => {
    getObj("produtos")
  },[])
  useEffect(() => {
    if(entity){
      getObj(entity).then(response => setData(response))
    }
  },[entity])  
  const columns = generateColumns(data);
  console.log(columns)
  return (
    <div>
      <div>
        <div>
          <FormSelect onChange={(e) => setEntity(e.target.value)}>{entities.map(entity => (<option value={entity.value}>{entity.label}</option>))}</FormSelect>
        {!data ? null : <GenericTable data={data} columns={columns} />}
        </div>
      </div>
    </div>
  );
}
