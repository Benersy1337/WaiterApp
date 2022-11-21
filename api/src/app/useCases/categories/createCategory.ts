import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function createCategory (req: Request, res: Response) {

    try {

        const {icon, name} = req.body;

        // exemplo de condicional caso o usuário não informou o name.
        if(!name) {
            return res.status(400).json({
                error: 'Name is Required',
            });
        }

        const category = await Category.create({ icon,name });

        // Resposta da API seja os dados da category em formato JSON
        res.status(201).json(category);

    } catch (error){
        console.log(error);
        res.sendStatus(500);
    }
}

