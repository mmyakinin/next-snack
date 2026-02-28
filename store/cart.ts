import { create } from "zustand";
import { Api } from "@/services/api-client";
import { getCartDetails } from "@/lib/get-cart-details";

export interface CartStateItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
}

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];

    // Полчуение продукта из корзины
    fetchCartItems: () => Promise<void>;

    // Запрос на обновление количества продукта
    updateCartItemQuantity: (id: number, quantity: number) => Promise<void>;

    // Запрос на добовление продукта в корзину
    addCartItem: (values: { productId: number }) => Promise<void>;

    // Запрос на удаление продукта из корзины
    removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.getCart();
            set(getCartDetails(data));
        } catch (err) {
            console.error(err);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    updateCartItemQuantity: async (id, quantity) => {
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.updateCartItemQuantity(id, quantity);
            set(getCartDetails(data));
        } catch (err) {
            console.error(err);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    addCartItem: async (values: { productId: number }) => {
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.addCartItem(values);
            set(getCartDetails(data));
        } catch (err) {
            console.error(err);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    removeCartItem: async (id) => {
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.removeCartItem(id);
            set(getCartDetails(data));
        } catch (err) {
            console.error(err);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },
}));
