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

    function handleOpenOrder() {
       setIsModalVisible(true);

       console.log(setIsModalVisible);
    }

    return (
        <Board>

            <OrderModal visible={isModalVisible}/>

            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>

            {orders.length > 0 && (
                <OrdersContainer>
                {orders.map((order) =>(
                    <button type="button" key={order._id} onClick={handleOpenOrder}>
                        <strong>Mesa {order.table}</strong>
                        <span>{order.products.length} itens</span>
                    </button>
                ))}
                
            </OrdersContainer>
            )}
        </Board>
    );
}