import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";


interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
}

// Props pega todas as propriedades da funcao, e passamos uma interface 
// para fazer a tipagem das propriedades devido ao typescript
// export function OrdersBoard(props: OrdersBoardProps) passando como props.icon e props.title
// ou
export function OrdersBoard({icon, title, orders}: OrdersBoardProps) {   

    const [isModalVisible, setIsModalVisible] = useState(false);

    // <null | Order> quer dizer que esse estado, ou vai ser nulo ou vai ter Order quando modal é clicado
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

    function handleOpenOrder(order: Order) {
       setIsModalVisible(true);

       setSelectedOrder(order);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedOrder(null);
    }

    return (
        <Board>

            <OrderModal 
            visible={isModalVisible}
            order={selectedOrder}
            onClose={handleCloseModal}
            />

            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>

            {orders.length > 0 && (
                <OrdersContainer>
                {orders.map((order) =>(
                    <button type="button" key={order._id} onClick={() => handleOpenOrder(order)}>
                        <strong>Mesa {order.table}</strong>
                        <span>{order.products.length} itens</span>
                    </button>
                ))}
                
            </OrdersContainer>
            )}
        </Board>
    );
}