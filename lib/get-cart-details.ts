import { CartDTO } from "@/services/dto/cart.dto";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

export interface CartStateItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
}

interface ReturnProps {
    totalAmount: number;
    items: CartStateItem[];
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
    const items = data.items.map((item) => ({
        id: item.id,
        name: item.product.name,
        imageUrl: item.product.imageUrl,
        price: calcCartItemTotalPrice(item),
        quantity: item.quantity,
    }));

    return {
        totalAmount: Number(data.totalAmount.toFixed(2)),
        items,
    };
};
