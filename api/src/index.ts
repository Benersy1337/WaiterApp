import path from 'node:path';

import express from 'express';

import mongoose from 'mongoose';

import { router } from './router';




mongoose.connect('mongodb://localhost:27017')

// Colocado o express dentro da conexão do MongoDB pq n faz sentido rodar o servidor se o banco de dados não deu sucesso ao rodar também, então aqui se o banco de dados rodar, roda o servidor também.
    .then(() => {
        // Criando o servidor
        const app = express();

        // Porta
        const port = 3001;

        // Para devolver ao usuário a imagem em si quando quiser acessa-la
        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

        // Para transformar o string (http hyper texto) que ele recebe para JSON no post categories (req.body);
        app.use(express.json());

        app.use(router);

        app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log('Error ao conectar ao MongoDB'));




