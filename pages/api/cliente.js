import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const cliente = await prisma.cliente.findMany();
    
      res.status(200).json(JSON.parse(cliente));
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar clientes', error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { id_cliente, nome, cep, rua, bairro, cidade, estado, email, telefone_celular } = req.body;

      const novoCliente = await prisma.cliente.create({
        data: { id_cliente, nome, cep, rua, bairro, cidade, estado, email, telefone_celular }
      });
      res.status(201).json(novoCliente);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar novo cliente', error: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { id_cliente } = req.body;

    if (!id_cliente) {
      return res.status(400).json({ message: 'ID do cliente é necessário para excluir' });
    }

    try {
      const deletedCliente = await prisma.cliente.delete({
        where: { id_cliente: Number(id_cliente) }
      });

      res.status(200).json({ message: 'Cliente excluído com sucesso', fornecedor: deletedCliente });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir cliente', error: error.message });
    }
  } else if (req.method === 'PUT') {
    const { id_cliente, ...clienteData } = req.body;

    if (!id_cliente) {
      return res.status(400).json({ message: 'ID do cliente é necessário para atualizar' });
    }

    try {
      const updatedCliente = await prisma.cliente.update({
        where: { id_cliente: Number(id_cliente) },
        data: clienteData
      });

      res.status(200).json({ message: 'Cliente atualizado com sucesso', fornecedor: updatedCliente });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar Cliente', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
