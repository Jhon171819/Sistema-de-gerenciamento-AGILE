import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const itensVenda = await prisma.itemVenda.findMany();
      res.status(200).json(itensVenda);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar itens de venda', error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { id_item_venda, id_produto, id_venda, valor_unitario, quantidade } = req.body;

      const novoItemVenda = await prisma.itemVenda.create({
        data: { id_item_venda, id_produto, id_venda, valor_unitario, quantidade }
      });
      res.status(201).json(novoItemVenda);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar novo item de venda', error: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { id_item_venda } = req.body;

    if (!id_item_venda) {
      return res.status(400).json({ message: 'ID do item de venda é necessário para excluir' });
    }

    try {
      const deletedItemVenda = await prisma.itemVenda.delete({
        where: { id_item_venda: Number(id_item_venda) }
      });

      res.status(200).json({ message: 'Item de venda excluído com sucesso', itemVenda: deletedItemVenda });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir item de venda', error: error.message });
    }
  } else if (req.method === 'PUT') {
    const { id_item_venda, ...itemVendaData } = req.body;

    if (!id_item_venda) {
      return res.status(400).json({ message: 'ID do item de venda é necessário para atualizar' });
    }

    try {
      const updatedItemVenda = await prisma.itemVenda.update({
        where: { id_item_venda: Number(id_item_venda) },
        data: itemVendaData
      });

      res.status(200).json({ message: 'Item de venda atualizado com sucesso', itemVenda: updatedItemVenda });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar item de venda', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
