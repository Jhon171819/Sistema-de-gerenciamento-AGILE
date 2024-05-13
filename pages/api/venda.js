import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const venda = await prisma.venda.findMany();
      res.status(200).json(venda);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar vendas', error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { id_venda, nome_venda, id_cliente, data_venda } = req.body;

      const novaVenda = await prisma.venda.create({
        data: { id_venda, nome_venda, id_cliente, data_venda }
      });
      res.status(201).json(novaVenda);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar nova venda', error: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { id_venda } = req.body;

    if (!id_venda) {
      return res.status(400).json({ message: 'ID da venda é necessário para excluir' });
    }

    try {
      const deletedVenda = await prisma.venda.delete({
        where: { id_venda: Number(id_venda) }
      });

      res.status(200).json({ message: 'Venda excluída com sucesso', venda: deletedVenda });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir venda', error: error.message });
    }
  } else if (req.method === 'PUT') {
    const { id_venda, ...vendaData } = req.body;

    if (!id_venda) {
      return res.status(400).json({ message: 'ID da venda é necessário para atualizar' });
    }

    try {
      const updatedVenda = await prisma.venda.update({
        where: { id_venda: Number(id_venda) },
        data: vendaData
      });

      res.status(200).json({ message: 'Venda atualizada com sucesso', venda: updatedVenda });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar venda', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
