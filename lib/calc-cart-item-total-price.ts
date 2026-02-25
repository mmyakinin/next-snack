/* A function that calculates the total cost of a product
in a shopping cart based on its quantity. */

import { CartItemDTO } from "@/services/dto/cart.dto";

export const calcCartItemTotalPrice = (item: CartItemDTO) => {
    return item.product.price * item.quantity;
};
