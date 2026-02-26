import { axiosInstance } from "./axios-instance";
import { CartDTO } from "./dto/cart.dto";

export const getCart = async (): Promise<CartDTO> => {
    const { data } = await axiosInstance.get<CartDTO>("/cart");

    return data;
};

export const addCartItem = async (values: {
    productId: number;
}): Promise<CartDTO> => {
    const { data } = await axiosInstance.post<CartDTO>("/cart", values);

    return data;
};

export const updateCartItemQuantity = async (
    cartItemId: number,
    quantity: number,
): Promise<CartDTO> => {
    const { data } = await axiosInstance.patch<CartDTO>("/cart/" + cartItemId, {
        quantity,
    });

    return data;
};

export const removeCartItem = async (cartItemId: number): Promise<CartDTO> => {
    const { data } = await axiosInstance.delete<CartDTO>("/cart/" + cartItemId);

    return data;
};
