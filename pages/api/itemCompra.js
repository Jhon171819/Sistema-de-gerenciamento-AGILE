import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const itemCompras = await prisma.itemCompra.findMany();
      res.status(200).json(itemCompras);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar itens de compra', error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { id_item_compra, id_produto, id_compra, valor_unitario, quantidade } = req.body;

      const novoItemCompra = await prisma.itemCompra.create({
        data: { id_item_compra, id_produto, id_compra, valor_unitario, quantidade }
      });
      res.status(201).json(novoItemCompra);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar novo item de compra', error: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { id_item_compra } = req.body;

    if (!id_item_compra) {
      return res.status(400).json({ message: 'ID do item de compra é necessário para excluir' });
    }

    try {
      const deletedItemCompra = await prisma.itemCompra.delete({
        where: { id_item_compra: Number(id_item_compra) }
      });

      res.status(200).json({ message: 'Item de compra excluído com sucesso', itemCompra: deletedItemCompra });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir item de compra', error: error.message });
    }
  } else if (req.method === 'PUT') {
    const { id_item_compra, ...itemCompraData } = req.body;

    if (!id_item_compra) {
      return res.status(400).json({ message: 'ID do item de compra é necessário para atualizar' });
    }

    try {
      const updatedItemCompra = await prisma.itemCompra.update({
        where: { id_item_compra: Number(id_item_compra) },
        data: itemCompraData
      });

      res.status(200).json({ message: 'Item de compra atualizado com sucesso', itemCompra: updatedItemCompra });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar item de compra', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
