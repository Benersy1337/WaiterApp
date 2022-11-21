import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function changeOrderStatus (req: Request, res: Response) {

    try {

        const { orderId } = req.params;

        const { status } = req.body;

        // Caso venha alguma response com algum status difente, já nem entra no Banco de Dados
        if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
            return res.status(400).json({
                error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
            });
        }

        // Buscando o documento, ver se ele existe e faz o update no status
        await Order.findByIdAndUpdate(orderId, { status });

        res.sendStatus(204);

    } catch (error){
        console.log(error);
        res.sendStatus(500);
    }
}

