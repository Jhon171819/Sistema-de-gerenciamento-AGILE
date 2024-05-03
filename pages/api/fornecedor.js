import { Fornecedor } from '../../models/fornecedor';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  switch (method) {
    case 'GET':
      try {
        const fornecedores = await Fornecedor?.findAll();
        res.status(200).json(fornecedores);
      } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar fornecedores', error: error.message });
      }
      break;
    case 'POST':
      try {
        const { id, nome, rua, bairro, cidade, estado, cep, email, telefone_celular } = req.body;
        const novoFornecedor = await Fornecedor?.create({ id, nome, rua, bairro, cidade, estado, cep, email, telefone_celular });
        res.status(201).json(novoFornecedor);
      } catch (error) {
        res.status(400).json({ message: 'Erro ao criar novo fornecedor', error: error.message });
      }
      break;
    case 'PUT':
      try {
        const { nome, rua, bairro, cidade, estado, cep, email, telefone_celular } = req.body;
        const fornecedor = await Fornecedor.findByPk(id);

        if (!fornecedor) {
          res.status(404).json({ message: 'Fornecedor não encontrado' });
          return;
        }

        await fornecedor.update({ nome, rua, bairro, cidade, estado, cep, email, telefone_celular });
        res.status(200).json(fornecedor);
      } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar fornecedor', error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const fornecedor = await Fornecedor.findByPk(id);

        if (!fornecedor) {
          res.status(404).json({ message: 'Fornecedor não encontrado' });
          return;
        }

        await fornecedor.destroy();
        res.status(200).json({ message: 'Fornecedor excluído com sucesso' });
      } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir fornecedor', error: error.message });
      }
      break;
    default:
      res.status(405).json({ message: 'Método não permitido' });
      break;
  }
}
