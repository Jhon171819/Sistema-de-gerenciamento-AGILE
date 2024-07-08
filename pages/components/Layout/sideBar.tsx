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
          <span>Tela inicial</span>
        </a>
      </div>
      <div style={divStyle}>
        <a href="/cadastroProdutos/" className={styles.card}>
          <span>Cadastro de produto</span>
        </a>
      </div>
      <div style={divStyle}>
        <a href="/cadastroFornecedores/" className={styles.card}>
          <span>Cadastro de fornecedor</span>
        </a>
      </div>
      <div style={divStyle}>
        <a href='/storeManagement/' className={styles.card}>
          <span>Administração do banco</span>
        </a>
      </div>
      <a href="/cadastroClientes/" className={styles.card}>
        <span>Cadastro de Clientes</span>
      </a>
    </div><div style={divStyle}>
        <a href="/cadastroCompras/" className={styles.card}>
          <span>Cadastro de Compras</span>
        </a>
      </div><div style={divStyle}>
        <a href="/cadastroItemCompras/" className={styles.card}>
          <span>Cadastro de Item de Compras</span>
        </a>
      </div><div style={divStyle}>
        <a href="/cadastroVendas/" className={styles.card}>
          <span>Cadastro de Vendas</span>
        </a>
      </div>
      <div style={divStyle}>
        <a href="/cadastroItemVendas/" className={styles.card}>
          <span>Cadastro de Item de Vendas</span>
        </a>
      </div></>
  );
}

