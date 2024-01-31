// pages/api.js
import { NextApiRequest, NextApiResponse } from "next";
import { Items } from "./data/items";

interface IItems {
  id: number;
  nome: string;
}

// const Items: IItems[] = [
//   {
//     id: 1,
//     nome: "batata",
//   },
//   {
//     id: 2,
//     nome: "cenoura",
//   },
// ];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {id} = req.query
  if (req.method === "GET") {
    res.json(Items);
  } 
  if (req.method === "POST") {
    const { id, nome } = req.body;

    if (!id || typeof nome !== "string") {
      res.status(400).json({ error: "ID e nome são obrigatórios para adicionar um item." });
      return;
    }

    const item: IItems = {
      id,
      nome,
    };

    Items.push(item);
    res.status(201).json(item); // Responder com o item adicionado
        }
  if (req.method === 'DELETE' && typeof id === 'string') {
    const itemId = parseInt(id, 10);
    const index = Items.findIndex((item) => item.id === itemId);

    if (index !== -1) {
      Items.splice(index, 1);
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
    }
}
