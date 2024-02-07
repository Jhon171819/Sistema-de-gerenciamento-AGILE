import { Fragment } from "react";
import ThirdPage  from "./thirdPage";
import SideBar from "../components/sideBar";
import Layout from "../components/layout";

export default function Index() {
    return( 
      <Fragment>
        <Layout>
          <ThirdPage />
        </Layout>
      </Fragment>
    )
}