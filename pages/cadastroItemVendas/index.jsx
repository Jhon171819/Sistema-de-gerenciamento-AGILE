import { Fragment } from "react";
import Layout from "../components/Layout";
import FormularioItemVenda from "./formulario/indexItemVenda";

export default function Index() {
    return( 
      <Fragment>
        <Layout>
          <FormularioItemVenda />
        </Layout>
      </Fragment>
    )
}