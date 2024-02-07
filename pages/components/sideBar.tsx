import React, { ReactNode } from 'react';
import styles from './sideBar.module.css'

const divStyle = {
  marginBottom: '20px',
  marginTop: '20px',
};

interface SideBarProps {
  children: ReactNode;
}

export default function SideBar(): JSX.Element {
  return (
    <div>
        <div style={divStyle}>
          <a
            href="https://github.com/Jhon171819"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
             <span>Github &rarr;</span>
          </a>
        </div>
        <div style={divStyle}>
          <a href="/thirdPage/" className={styles.card}>
          <span>Cadastro &rarr;</span>
          </a>
        </div>
        <div>
          <a href="/storeManagement/" className={styles.card}>
             <span>Adm loja &rarr;</span>
          </a>
        </div>
    </div>
  );
}

