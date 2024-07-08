import { Fragment } from "react";
import Layout from "../components/Layout";
import FormularioProdutos from "./formulario";

export default function Index() {
    return( 
      <Fragment>
        <Layout>
          <FormularioProdutos />
        </Layout>
      </Fragment>
    )
}