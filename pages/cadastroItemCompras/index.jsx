import { Fragment } from "react";
import Layout from "../components/Layout";
import FormularioItemCompra from "./formulario/index.jsx";

export default function Index() {
    return( 
      <Fragment>
        <Layout>
          <FormularioItemCompra/>
        </Layout>
      </Fragment>
    )
}