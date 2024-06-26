import React, { ReactNode } from 'react';
import styles from './layout.module.css'

const divStyle = {
  marginBottom: '20px',
  marginTop: '20px',
};

interface SideBarProps {
  children: ReactNode;
}

export default function SideBar(): JSX.Element {
  return (
    <><div>
      <div style={divStyle}>
        <a
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <span>Tela inicial &rarr;</span>
        </a>
      </div>
      <div style={divStyle}>
        <a href="/cadastroProdutos/" className={styles.card}>
          <span>Cadastro de produto &rarr;</span>
        </a>
      </div>
      <div style={divStyle}>
        <a href="/cadastroFornecedores/" className={styles.card}>
          <span>Cadastro de fornecedor &rarr;</span>
        </a>
      </div>
      <div style={divStyle}>
        <a href='/storeManagement/' className={styles.card}>
          <span>Administração do banco &rarr;</span>
        </a>
      </div>
      <a href="/cadastroClientes/" className={styles.card}>
        <span>Cadastro de Clientes &rarr;</span>
      </a>
    </div><div style={divStyle}>
        <a href="/cadastroCompras/" className={styles.card}>
          <span>Cadastro de Compras &rarr;</span>
        </a>
      </div><div style={divStyle}>
        <a href="/cadastroItemCompras/" className={styles.card}>
          <span>Cadastro de Item de Compras &rarr;</span>
        </a>
      </div><div style={divStyle}>
        <a href="/cadastroVendas/" className={styles.card}>
          <span>Cadastro de Vendas &rarr;</span>
        </a>
      </div>
      <div style={divStyle}>
        <a href="/cadastroItemVendas/" className={styles.card}>
          <span>Cadastro de Item de Vendas &rarr;</span>
        </a>
      </div></>
  );
}

