import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./layout.module.css";
import SideBar from "./sideBar";

interface layoutProps {
    children: ReactNode;
}

export default function Layout({ children }: layoutProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.app}>
            <motion.nav
                onHoverStart={() => setIsOpen(true)}
                onHoverEnd={() => setIsOpen(false)}
                animate={{ width: isOpen ? "200px" : "50px" }}
                transition={{ duration: 0.5 }}
                className={styles.sideBar}
            >      
                <motion.div
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                   <SideBar />
                </motion.div>
            </motion.nav>
            {children}
        </div>
    );
}
