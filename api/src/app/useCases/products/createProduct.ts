import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function createProduct  (req: Request, res: Response) {

    try {

        // Caso não exista o file? ele nao tenta acessar o filename para não quebrar a aplicação
        const imagePath = req.file?.filename;

        const {name, description, price, category, ingredients} = req.body;

        // PARA TESTAR E VER SE ESTÁ TUDO NO FORMATO CORRETO ANTES DE SALVAR NO BANCO DE DADOS
        // console.log({
        //     name,
        //     description,
        //     price: Number(price),
        //     category,
        //     ingredients: JSON.parse(ingredients),
        // });

        const product = await Product.create({
            name,
            description,
            imagePath,
            price: Number(price),
            category,
            // Só deve fazer o parse dos ingredients se tiver algum valor, porque a bebida
            // não vai ter ingredients no post e vai retornar undefined, nesse caso um array vazio, sem quebrar a aplicação
            ingredients: ingredients ? JSON.parse(ingredients) : [],
        });

        res.status(201).json(product);

    } catch (error){
        console.log(error);
        res.sendStatus(500);
    }

}
