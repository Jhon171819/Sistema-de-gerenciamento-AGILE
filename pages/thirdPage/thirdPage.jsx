import { useState } from "react";
import fetchData from "../../request";
import { useEffect } from "react";
import LayoutShow from "./inventoryShow";
import styles from "./thirdPage.module.css";

export default function ThirdPage() {
  const [objeto, setObjeto] = useState([]);
  const [ID, setIDs] = useState();
  const [show, setShow] = useState(undefined);
  const [newItem, setNewItem] = useState(undefined);
  const [event, setEvent] = useState();

  useEffect(() => {
    setShow(objeto);
  }, [objeto]);


  async function postObj(item) {
    const dados = item

    try {
      const resposta = await fetchData({method: 'POST', data: dados});
  
    } catch (erro) {
      console.error('Erro ao realizar o POST:', erro);
    }
  }

  async function getObj(item) {
    try {
      const result = await fetchData({ method: "GET" });
      if (item == "*") {
        setObjeto(result);
      } else {
        setObjeto(result[item]);
      }
    } catch (error) {
      console.error("Erro ao obter dados:", error);
      setObjeto("Erro ao obter dados.");
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.orgName}></div>
        <div className={styles.display}>
          <pre className={styles.displayView}>
            <LayoutShow item={show} />
          </pre>
        </div>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <button
              className={`${styles.custom_btn} ${styles.btn_7}`}
              onClick={() => {
                getObj("*");
              }}
            >
              <span> Consultar </span>
            </button>
          </div>
        </div>
        <div className={styles.inputs}>
          <div className={styles.selfInput}>
            <input
              className={styles.input}
              type="text"
              //   placeholder="Insira um item"
              onChange={(e) => {
                objeto.length > 0?
                setNewItem({
                id: objeto.length +1 ,
                nome: e.target.value,
              })
              :
              setNewItem({
                id: 1,
                nome: e.target.value,
              });
            }}
            />
            <button
              className={`${styles.custom_btn} ${styles.btn_7}`}
              onClick={() => {
                postObj(newItem)
                getObj('*')
              }}
            >
              <span>ENVIAR</span>
            </button>
          </div>
          <div className={styles.selfInput}>
            <input
              className={styles.input}
              type="number"
              onChange={(e) => setIDs(e.target.value)}
            ></input>
            <button
              className={`${styles.custom_btn} ${styles.btn_7}`}
              onClick={() => {
                fetchData({ method: "DELETE", id: ID });
                getObj("*");
              }}
            >
              <span>DELETE</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
