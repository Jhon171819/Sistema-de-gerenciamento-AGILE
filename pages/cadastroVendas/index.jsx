import { Fragment } from "react";
import Layout from "../components/layout";
import FormularioVenda from "./formulario";
import FormularioItemVenda from "./formulario/indexItemVenda";

export default function Index() {
    return( 
      <Fragment>
        <Layout>
          <FormularioVenda />
          <FormularioItemVenda/>
        </Layout>
      </Fragment>
    )
}