import { Fragment } from "react";
import Layout from "../components/Layout";
import FormularioVenda from "./formulario";

export default function Index() {
    return( 
      <Fragment>
        <Layout>
          <FormularioVenda />
        </Layout>
      </Fragment>
    )
}