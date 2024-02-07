import Image from "next/image";
import styles from "./page.module.css";
import logo from "./../public/logotipoEYON.svg"
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://github.com/Jhon171819"   
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" Jhon "}
          
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logotipoEYON.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

       
      </div>

      <div className={styles.grid}>
        



      </div>
    </main>
  );
}
