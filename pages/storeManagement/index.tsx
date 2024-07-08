import Layout from '../components/Layout'
import StoreManager from './storeManager'
import styles from "./storeManager.module.css"
export default function Index() {
    return (
      <div className={styles.layout}>
        <Layout>
          <StoreManager />
        </Layout>
      </div>
      
    )
}