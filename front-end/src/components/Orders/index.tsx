import { Order } from '../../types/Order';

import { Container } from './styles';

import { OrdersBoard } from '../OrdersBoard';

const orders: Order[] = [
    
    {
        "_id": "6373fc338ae0818d84fd9d71",
        "table": "3",
        "status": "WAITING",
        "products": [
            {
                "product": {
                    "name": "Coca Cola",
                    "imagePath": "1668541491605-coca-cola.png",
                    "price": 7,
                },
                "quantity": 1,
                "_id": "6373fc338ae0818d84fd9d72"
            },
            {
                "product": {
                    "name": "Pizza quatro queijos",
                    "imagePath": "1668539893843-quatro-queijos.png",
                    "price": 40,
                },
                "quantity": 3,
                "_id": "637a9ded385211f663b8c78b"
            },
        ],
    }
    
]

export function Orders() {

    return (
        <Container>
            
            <OrdersBoard
                icon="⏰"
                title="Fila de Espera"
                orders={orders}
            />

            <OrdersBoard
                icon="👨🏼‍🍳"
                title="Em Preparação"
                orders={[]}
            />

            <OrdersBoard
                icon="✅"
                title="Pronto!"
                orders={[]}
            />
        
        </Container>
    );
   
}