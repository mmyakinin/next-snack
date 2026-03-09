import React from "react";

import { WhiteBlock, CheckoutItem } from "..";
import { CartStateItem } from "@/store/cart";

interface Props {
    items: CartStateItem[];
    loading: boolean;
    removeCartItem: (id: number) => Promise<void>;
    onClickCountButton: (
        id: number,
        quantity: number,
        type: "plus" | "minus",
    ) => Promise<void>;
    className?: string;
}

export const CheckoutCart: React.FC<Props> = ({
    items,
    loading,
    removeCartItem,
    onClickCountButton,
    className,
}) => {
    return (
        <WhiteBlock title="1. Корзина" className={className}>
            {items.map((item) => {
                return (
                    <CheckoutItem
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        imageUrl={item.imageUrl}
                        price={item.price}
                        quantity={item.quantity}
                        onClickUpdateQuantity={(type) =>
                            onClickCountButton(item.id, item.quantity, type)
                        }
                        onClickRemove={() => removeCartItem(item.id)}
                        className={
                            loading ? "opacity-60 pointer-events-none" : ""
                        }
                    />
                );
            })}
        </WhiteBlock>
    );
};
