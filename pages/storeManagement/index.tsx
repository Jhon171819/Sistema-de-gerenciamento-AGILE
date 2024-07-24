import StoreManager from './storeManager'
import {StoreLayout} from "./storelayout"
import styles from "./storeManager.module.css"
export default function Index() {
    return (
      <div className={styles.layout}>
        <StoreLayout>
          <StoreManager />
        </StoreLayout>
      </div>
      
    )
}