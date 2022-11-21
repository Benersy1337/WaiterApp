import { model, Schema } from 'mongoose';



export const Order = model('Order', new Schema({
    table: {
        // required serve para criação obrigatória, sem deixar passar.
        type: String,
        required: true,
    },


    status: {
        type: String,
        // enum serve para utilizar apenas os itens definidos dentro do enum, se for algo fora do enum, não passa.
        enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
        // Quando tiver algum pedido, sem precisar setar manualmente o status, vamos começar como padrão o status de waiting, assim utilizamos o default.
        default: 'WAITING',

    },
    // Criamos um createdAt para ordenar os pedidos de acordo com a data criada.
    createdAt: {
        type: Date,
        default: Date.now
    },

    products: {
        required: true,
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
            quantity: {
                type: Number,
                default: 1,
            },
        }]
    },

}));

