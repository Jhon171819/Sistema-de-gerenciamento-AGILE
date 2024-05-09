import { Fragment } from "react";
import Layout from "../components/layout";
import FormularioCompras from "./formulario";
import FormularioItemCompra from "./formulario/indexItemCompra";

export default function Index() {
    return( 
      <Fragment>
        <Layout>
          <FormularioCompras />
          <FormularioItemCompra/>
        </Layout>
      </Fragment>
    )
}