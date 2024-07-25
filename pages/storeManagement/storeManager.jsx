import styles from "./storeManager.module.css";
import TableCustom  from "../components/table";
import GenericTable from "../components/tableLayout"
import { useEffect, useState } from "react";
import fetchData from "@/request";
import { getObj } from "@/utils/utils";
import { FormSelect } from "react-bootstrap";
import { customFilter, FILTER_TYPES } from "react-bootstrap-table2-filter";




const entities = [{label: "cliente", value: "cliente"}, {label: "compra", value: "compra"}, {label: "fornecedores", value: "fornecedores"}, {label: "itemCompra", value: "itemCompra"}, {label: "itemVenda", value: "itemVenda"}, {label: "produtos", value: "produtos"}, {label: "venda", value: "venda"}]
export default function StoreManager() {
  const [data, setData] = useState([])
  const [entity, setEntity] = useState()

  const generateColumns = (data) => {
    if (data.length === 0) return [];
  
    const keys = ["nome_produto", "descricao", "qtd_estoque", "preco", "id_fornecedor"];
    const columns = keys.map(key => ({
      dataField: key,
      text: key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase()), // Capitalize and replace underscores
      sort: true,
      filter: key !== 'id_fornecedor' && {
        type: key === 'qtd_estoque' || key === 'preco' ? FILTER_TYPES.NUMBER : FILTER_TYPES.TEXT
      }
    }));
  
    // Add a custom "Actions" column
    columns.push({
      dataField: "actions",
      text: "Ações",
      isDummyField: true,
      formatter: (cell, row) => (
        <button className="btn btn-primary" onClick={() => alert(`Action on row with id ${row.id_fornecedor}`)}>
          Action
        </button>
      )
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
  console.log(generateColumns(data))
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
