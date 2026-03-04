"use client";

import React from "react";
import { CartStateItem, useCartStore } from "@/store/cart";

type ReturnedProps = {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];
    fetchCartItems: () => Promise<void>;
    updateCartItemQuantity: (id: number, quantity: number) => Promise<void>;
    addCartItem: (values: { productId: number }) => Promise<void>;
    removeCartItem: (id: number) => Promise<void>;
};

export const useCart = (): ReturnedProps => {
    const cartStote = useCartStore((state) => state);

    React.useEffect(() => {
        cartStote.fetchCartItems();
    }, [cartStote.fetchCartItems]);

    return cartStote;
};
