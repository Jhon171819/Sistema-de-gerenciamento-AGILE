import { Fragment } from "react";
import Layout from "../components/layout";
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