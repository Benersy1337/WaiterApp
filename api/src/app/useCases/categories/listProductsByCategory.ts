import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function listProductsByCategory (req: Request, res: Response) {

    try {
        // passando where e equals para definir qual id correto da categoria está sendo listado
        // se não vai lista todas as categorias em qualquer id das categorias.
        const { categoryId } = req.params;

        const products = await Product.find().where('category').equals(categoryId);

        res.json(products);
    } catch (error){
        console.log(error);
        res.sendStatus(500);
    }

}
