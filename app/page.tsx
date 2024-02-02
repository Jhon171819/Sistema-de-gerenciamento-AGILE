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
          src="/pngwing.com.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

       
      </div>

      <div className={styles.grid}>
        <a
          href="/thirdPage/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Cadastro <span>-&gt;</span>
          </h2>
          <p>Realize o cadastro de seu estoque</p>
        </a> 



      </div>
    </main>
  );
}
