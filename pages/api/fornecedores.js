import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const fornecedores = await prisma.fornecedor.findMany();
      
      res.status(200).json(fornecedores);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar fornecedores', error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { id_fornecedor, nome_fornecedor, rua, bairro, cidade, estado, cep, email, telefone_celular } = req.body;

      const novoFornecedor = await prisma.fornecedor.create({
        data: { id_fornecedor, nome_fornecedor, rua, bairro, cidade, estado, cep, email, telefone_celular }
      });
      res.status(201).json(novoFornecedor);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar novo fornecedor', error: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { id_fornecedor } = req.body;

    if (!id_fornecedor) {
      return res.status(400).json({ message: 'ID do fornecedor é necessário para excluir' });
    }

    try {
      const deletedFornecedor = await prisma.fornecedor.delete({
        where: { id_fornecedor: Number(id_fornecedor) }
      });

      res.status(200).json({ message: 'Fornecedor excluído com sucesso', fornecedor: deletedFornecedor });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir fornecedor', error: error.message });
    }
  } else if (req.method === 'PUT') {
    const { id_fornecedor, ...fornecedorData } = req.body;

    if (!id_fornecedor) {
      return res.status(400).json({ message: 'ID do fornecedor é necessário para atualizar' });
    }

    try {
      const updatedFornecedor = await prisma.fornecedor.update({
        where: { id_fornecedor: Number(id_fornecedor) },
        data: fornecedorData
      });

      res.status(200).json({ message: 'Fornecedor atualizado com sucesso', fornecedor: updatedFornecedor });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar fornecedor', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
