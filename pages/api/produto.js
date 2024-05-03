import { Produto } from '../../models/produto';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  switch (method) {
    case 'GET':
      try {
        const produtos = await Produto.findAll();
        res.status(200).json(produtos);
      } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
      }
      break;
    case 'POST':
      try {
        const { nome, descricao, qtd_estoque, preco } = req.body;
        const novoProduto = await Produto.create({ nome, descricao, qtd_estoque, preco });
        res.status(201).json(novoProduto);
      } catch (error) {
        res.status(400).json({ message: 'Erro ao criar novo produto', error: error.message });
      }
      break;
    case 'PUT':
      try {
        const { nome, descricao, qtd_estoque, preco } = req.body;
        const produto = await Produto.findByPk(id);

        if (!produto) {
          res.status(404).json({ message: 'Produto não encontrado' });
          return;
        }

        await produto.update({ nome, descricao, qtd_estoque, preco });
        res.status(200).json(produto);
      } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar produto', error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const produto = await Produto.findByPk(id);

        if (!produto) {
          res.status(404).json({ message: 'Produto não encontrado' });
          return;
        }

        await produto.destroy();
        res.status(200).json({ message: 'Produto excluído com sucesso' });
      } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir produto', error: error.message });
      }
      break;
    default:
      res.status(405).json({ message: 'Método não permitido' });
      break;
  }
}
