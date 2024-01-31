import { useState } from "react";
import { get, post, deleteItem } from "../request";
import { useEffect } from "react";
import LayoutShow from './inventoryShow'
import styles from "./thirdPage.module.css";

export default function ThirdPage() {
  const [objeto, setObjeto] = useState([]);
  const [id, setIds] = useState();
  const [show, setShow] = useState();
  const [newItem, setNewItem] = useState(undefined);
  const [event, setEvent] = useState();

  useEffect(() => {
    setShow("Enviando...");
    post(newItem);
    getObj("*");
  }, [newItem]);

  async function getObj(item) {
    try {
      const result = await get();
      // setObjeto(JSON.stringify(result, null, 2));
      if (item == "*") {
        setObjeto(result);
      } else {
        setObjeto(result[item]);
        // setIds(result[item].id)
      }
    } catch (error) {
      console.error("Erro ao obter dados:", error);
      setObjeto("Erro ao obter dados.");
    }
  }
  useEffect(() => {
    setShow(JSON.stringify(objeto));
  }, [objeto]);

  function handleInputChange(e) {
    const inputValue = e;
    
    if (objeto.length > 0) {
      setNewItem({
      id: objeto[objeto.length - 1].id + 1,
      nome: inputValue,
    });
    } else {
      setNewItem({
        id: 1,
        nome: inputValue,
      })
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.orgName}>
          
        </div>
        <div className={styles.display}>
          <pre className={styles.displayView}>
          <LayoutShow item={objeto}/>  
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
              onChange={(e) => setEvent(e.target.value)}
            />
            <button
              className={`${styles.custom_btn} ${styles.btn_7}`}
              onClick={() => handleInputChange(event)}
            >
              <span>ENVIAR</span>
            </button>
          </div>
          <div className={styles.selfInput}>
            <input
              className={styles.input}
              type="number"
              onChange={(e) => setIds(e.target.value)}
            ></input>
            <button
              className={`${styles.custom_btn} ${styles.btn_7}`}
              onClick={() => {
                deleteItem(id);
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
