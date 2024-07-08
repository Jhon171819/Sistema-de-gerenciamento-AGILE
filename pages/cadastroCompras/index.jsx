import { Fragment } from "react";
import Layout from "../components/Layout";
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