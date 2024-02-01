import Image from "next/image";
import styles from "./page.module.css";
import logo from "./../public/logotipoEYON.svg"
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p> */}
        <div>
          <a
            href="https://dggp7r92vqndl.cloudfront.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/logotipoEYON.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
            {/* <Image
              src="/pngwing.com.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /> */}
           
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

        
        {/* <img src={logo} height={100} width={100}></img> */}
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
