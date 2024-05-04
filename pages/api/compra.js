import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const compra = await prisma.compra.findMany();
      res.status(200).json(compra);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar clientes', error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { id_compra, id_fornecedor, data_compra } = req.body;

      const novaCompra = await prisma.compra.create({
        data: { id_compra, id_fornecedor, data_compra }
      });
      res.status(201).json(novaCompra);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar nova compra', error: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { id_compra } = req.body;

    if (!id_compra) {
      return res.status(400).json({ message: 'ID da compra é necessário para excluir' });
    }

    try {
      const deletedCompras = await prisma.compra.delete({
        where: { id_compra: Number(id_compra) }
      });

      res.status(200).json({ message: 'Compra excluída com sucesso', fornecedor: deletedCompras });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir compra', error: error.message });
    }
  } else if (req.method === 'PUT') {
    const { id_compra, ...compraData } = req.body;

    if (!id_compra) {
      return res.status(400).json({ message: 'ID da compra é necessário para atualizar' });
    }

    try {
      const updatedCompra = await prisma.compra.update({
        where: { id_compra: Number(id_compra) },
        data: compraData
      });

      res.status(200).json({ message: 'Compra atualizada com sucesso', compra: updatedCompra });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar compra', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
