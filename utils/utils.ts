import fetchData from '@/request';
import { Decimal } from '@prisma/client/runtime/library';
import axios from 'axios';

export function gerarUuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}



export function getCep(cep: number): Promise<any> {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            const data = response.data;
            if (!data || data.erro) {
                throw new Error('CEP não encontrado ou erro na resposta da API');
            }
            return data; // Retorna os dados recebidos da API
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
}

export async function getPartners(): Promise<any> {
  try {
    const response = await fetchData({ method: 'GET', entity: 'fornecedores' });
    return response;
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    throw error; // Re-throwing the error for handling elsewhere if needed
  }
}

interface Product{
  id_produto: number;
  id_fornecedor: number;
  nome_produto: string;
  descricao: string;
  qtd_estoque: number;
  preco: number;
  [key: string]: unknown;
}
const generatedIds = new Set();

export function gerarIdProdutoUnico() {
  const MIN_ID = 100000;
  const MAX_ID = 999999;

  let id: number;
  do {
    id = Math.floor(Math.random() * (MAX_ID - MIN_ID + 1)) + MIN_ID;
  } while (generatedIds.has(id));

  generatedIds.add(id);
  return id;
}
export async function postObj(productData: Record<string, unknown>, endPoint: "cliente" | "compra" | "fornecedores" | "itemCompra" | "itemVenda" | "produtos" | "venda"): Promise<void> {
  try {
    const resposta = await fetchData({ method: 'POST', data: productData, entity: endPoint });
    alert("Salvo com sucesso")
  } catch (error) {
    console.error('Erro ao realizar o POST:', error);
    throw error;
  }
}

export async function getObj(item: string): Promise<any> {
  try {
    const result = await fetchData({
      method: 'GET', query: item,
      entity: 'fornecedores'
    });
    return result;
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    throw error; // Re-throwing the error for handling elsewhere if needed
  }
}