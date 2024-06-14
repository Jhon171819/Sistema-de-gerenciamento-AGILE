import Image from "next/image";
import styles from "./page.module.css";
import logo from "./../public/logotipoEYON.svg"
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <strong>Sistema de gerenciamento Agile</strong>
      </div>
        
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="https://static.vecteezy.com/ti/vetor-gratis/p2/10177741-abstract-initial-letter-a-and-g-logo-awesome-black-style-isolated-on-white-background-pro-vector-vetor.jpg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      
      </div>

      <div className={styles.grid}>
      
      <p>
            By {<a href="https://github.com/Jhon171819"   
            target="_blank"
            rel="noopener noreferrer"> Jonathan </a>
            }
            &  
            {<a href="http://github.com/renan-castro"
                        target="_blank"
                        rel="noopener noreferrer"
            > Renan </a>}
      </p>

      </div>
    </main>
  );
}
