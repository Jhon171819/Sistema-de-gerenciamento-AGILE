import styles from "./storeManager.module.css";
import { TableCustom } from "./components/gridTable";
import { useEffect, useState } from "react";
import fetchData from "@/request";

interface DataItem {
  id: number;
  nome: string;
}
export default function StoreManager() {
  const [data, setData] = useState<DataItem[]>([])
//   const head = [{ id: "nome" }];
//   const body = [
//     { content: ['John', '30'] }, // Linha 1
//     { content: ['Doe', '25'] },  // Linha 2
//   ];
  useEffect(() => {
    getObj()
  }, [])

  async function getObj() {
    try {
      const result = await fetchData({ method: "GET" });
        setData(result);
        console.log(data)
    } catch (error) {
      console.error("Erro ao obter dados:", error);
    }
  }
 const head: {id: number[]}[] = [{id: data.map((objeto: DataItem) => objeto.id)}]
 const body:{ content: string[] }[] = [{content: data.map((objeto: DataItem) => objeto.nome)}]
 
 const props = {
  head: head,
  body: body
}
  

  return (
    <div>
      <div className={styles.father}>
        <div className={styles.content}>
        {!data ? null : <TableCustom {...props} />}
        </div>
      </div>
    </div>
  );
}
