import { Fragment } from "react";
import Layout from "../components/layout";
import FormularioItemCompra from "./formulario";

export default function Index() {
    return( 
      <Fragment>
        <Layout>
          <FormularioItemCompra/>
        </Layout>
      </Fragment>
    )
}