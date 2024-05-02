import React from 'react';
import styles from "./Formular.module.css"
import { Form, Input, Button, InputNumber, Select } from 'antd';
import fetchData from '@/request';

export const ProductForm = () => {
  const onFinish = (values) => {
    console.log('Valores do Formulário:', values);
  };

  return (
    <Form
      name="productForm"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      className={styles.form}
    >
      <Form.Item
        label="Nome do Produto"
        name="productName"
        rules={[{ required: true, message: 'Por favor, insira o nome do produto!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Descrição"
        name="description"
        rules={[{ required: true, message: 'Por favor, insira a descrição do produto!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Preço"
        name="price"
        rules={[{ required: true, message: 'Por favor, insira o preço do produto!' }]}
      >
        <InputNumber
          formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/R\$ \s?|(,*)/g, '')}
        />
      </Form.Item>
      <Form.Item
        label="Fornecedor:"
        name="fornecedor"
        rules={[{required: true, message: 'Por favor, selecione o fornecedor do produto!'}]}
      >
        <Select options={getPartners()}/>
      </Form.Item>

      <Form.Item
        label="Quantidade em Estoque"
        name="quantity"
        rules={[{ required: true, message: 'Por favor, insira a quantidade em estoque!' }]}
      >
        <InputNumber min={1} max={1000} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Cadastrar Produto
        </Button>
      </Form.Item>
    </Form>
  );
};


async function getPartners(){
    try {
        const response = await fetchData({method: 'GET', query: 'partners'});
        console.log(response)
        return response
    } catch (erro) {
        console.error("Erro ao obter dados:", erro);
    }
}

export async function postObj(item) {
    const dados = item

    try {
      const resposta = await fetchData({method: 'POST', data: dados});
  
    } catch (erro) {
      console.error('Erro ao realizar o POST:', erro);
    }
  }

export async function getObj(item) {
    try {
      const result = await fetchData({ method: "GET", query: "items"});
      if (item == "*") {
        setObjeto(result);
      } else {
        setObjeto(result[item]);
      }
    } catch (error) {
      console.error("Erro ao obter dados:", error);
      setObjeto("Erro ao obter dados.");
    }
  }
