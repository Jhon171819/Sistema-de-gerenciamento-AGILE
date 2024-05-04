import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const produtos = await prisma.produto.findMany();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { id_produto, id_fornecedor, nome_produto, descricao, qtd_estoque, preco } = req.body;
      const novoProduto = await prisma.produto.create({
        data: { id_produto, id_fornecedor, nome_produto, descricao, qtd_estoque, preco }
      });
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar novo produto', error: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { id_produto } = req.body;

    if (!id_produto) {
      return res.status(400).json({ message: 'ID do produto é necessário para excluir' });
    }

    try {
      const deletedProduto = await prisma.produto.delete({
        where: { id_produto: Number(id_produto) }
      });

      res.status(200).json({ message: 'Produto excluído com sucesso', produto: deletedProduto });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir produto', error: error.message });
    }
  } else if (req.method === 'PUT') {
    const { id_produto, ...produtoData } = req.body;

    if (!id_produto) {
      return res.status(400).json({ message: 'ID do produto é necessário para atualizar' });
    }

    try {
      const updatedProduto = await prisma.produto.update({
        where: { id_produto: Number(id_produto) },
        data: produtoData
      });

      res.status(200).json({ message: 'Produto atualizado com sucesso', produto: updatedProduto });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar produto', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
