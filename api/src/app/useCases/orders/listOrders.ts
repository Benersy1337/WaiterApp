import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders (req: Request, res: Response) {

    try {
        const orders = await Order.find()
        // Força a ordenação dos pedidos do mais velho mais o mais novo.
        // Ordem Crescente = 1, descrecente = -1
        .sort({ createdAt: 1 })
        // Para puxar todos os dados dos produtos
        .populate('products.product');

        res.json(orders);
    } catch (error){
        console.log(error);
        res.sendStatus(500);
    }

}
