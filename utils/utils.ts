import fetchData from '@/request';
import { Decimal } from '@prisma/client/runtime/library';

export function gerarUuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
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

export async function postObj(productData: Product, endPoint: "cliente" | "compra" | "fornecedores" | "itemCompra" | "itemVenda" | "produtos" | "venda"): Promise<void> {
  try {
    const entity: Record<string, unknown> = {...productData}
    const resposta = await fetchData({ method: 'POST', data: productData, entity: endPoint });
    console.log(resposta);
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