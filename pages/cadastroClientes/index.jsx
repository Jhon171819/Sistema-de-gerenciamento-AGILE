import { Fragment } from "react";
import Layout from "../components/layout";
import FormularioClientes from "./formulario";

export default function Index() {
    return( 
      <Fragment>
        <Layout>
          <FormularioClientes />
        </Layout>
      </Fragment>
    )
}