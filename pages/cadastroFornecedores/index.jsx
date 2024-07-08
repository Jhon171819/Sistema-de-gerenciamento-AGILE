import { Fragment } from "react";
import Layout from "../components/Layout";
import FormularioFornecedores from "./formulario";

export default function Index() {
    return( 
      <Fragment>
        <Layout>
          <FormularioFornecedores />
        </Layout>
      </Fragment>
    )
}