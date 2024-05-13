import { Fragment } from "react";
import Layout from "../components/layout";
import FormularioCompras from "./formulario";

export default function Index() {
    return( 
      <Fragment>
        <Layout>
          <FormularioCompras />
        </Layout>
      </Fragment>
    )
}