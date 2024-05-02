import { useState } from "react";
import fetchData from "../../../request";
import { useEffect } from "react";
import LayoutShow from "./inventoryShow";
import styles from "./Formular.module.css";
import { Form, Layout, Typography } from "antd";
const {Title} = Typography
const {Header, Content, Footer} = Layout
import {ProductForm} from "./utils"

export default function FormularioProdutos() {
  const [objeto, setObjeto] = useState([]);
  const [ID, setIDs] = useState();
  const [show, setShow] = useState(undefined);
  const [newItem, setNewItem] = useState(undefined);
  const [event, setEvent] = useState();

  useEffect(() => {
    setShow(objeto);
  }, [objeto]);

  return (
    <>
      <Layout className={styles.page}> 
        <div className={styles.header}>
          <Title>Criar novo produto</Title>
        </div>
        <Content style={{backgroundColor: "transparent"}}>
          <ProductForm />
        </Content>
      </Layout>
    </>
  );
}
