// Importar a pasta uploads de imagens
import path from 'node:path';

import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategory';

// Para poder utilizar imagens
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

// diskstorage vai ser armazenado no disco da nossa máquina (dentro de uploads)
const upload = multer({
    storage: multer.diskStorage({
        // Diretório
        destination(req,file,callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        // Define o nome dos arquivos que vamo fazer upload para o nodejs
        filename(req,file,callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});


// List categories

router.get('/categories', listCategories);

// Create category

router.post('/categories', createCategory);

// List Products

router.get('/products', listProducts);

// Create Product
// .single upload de somente um arquivo
router.post('/products',upload.single('image'), createProduct);

// Get Products by category

router.get('/categories/:categoryId/products', listProductsByCategory);

// List Orders

router.get('/orders', listOrders);

// Create order

router.post('/orders', createOrder);

// Change order status
// Se tivesse que mudar todos os itens no mongoDB, utilizariamos o método put, mas como só vamos alterar o status, utilizamos o patch.

router.patch('/orders/:orderId', changeOrderStatus);

// Delete/Cancel order

router.delete('/orders/:orderId', cancelOrder);




