import styles from "./storeManager.module.css"
export function StoreLayout({children}) {
    return(
        <>
            <div className={styles.father}>
                <div className={styles.body}>
                    {children}
                </div> 
            </div>
        </>
    )
}