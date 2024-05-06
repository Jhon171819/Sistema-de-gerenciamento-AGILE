import { ReactNode } from "react";
import styles from './layout.module.css'
import SideBar from "./sideBar";

interface layoutProps {
    children: ReactNode;
  }

export default function Layout ({children}: layoutProps) {
    return(
        <div className={styles.app}>
        {/* <div className={styles.sideBar}>
            <SideBar />
        </div> */}
        {children}

        </div>
    )
}