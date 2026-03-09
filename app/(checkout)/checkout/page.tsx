"use client";

import {
    Container,
    CheckoutSidebar,
    CheckoutAddressForm,
    CheckoutCart,
    CheckoutPersonalForm,
} from "@/components/shared";
import { useCart } from "@/hooks/use-cart";

export default function CheckoutPage() {
    const { loading, items, totalAmount, removeCartItem, onClickCountButton } =
        useCart();

    return (
        <Container>
            <h3 className="py-13 font-extrabold text-[36px] max-[786px]:py-8 max-[786px]:pt-6 max-[450px]:text-[30px]">
                Оформление заказа
            </h3>
            <div className="flex justify-between items-start gap-8 max-[1300px]:flex-col max-[1300px]:items-center">
                {/* Left Side */}
                <div className="flex flex-col gap-8 max-[752]:w-full">
                    <CheckoutCart
                        items={items}
                        loading={loading}
                        removeCartItem={removeCartItem}
                        onClickCountButton={onClickCountButton}
                    />
                    <CheckoutPersonalForm />
                    <CheckoutAddressForm />
                </div>

                {/* Right Side */}
                <CheckoutSidebar totalAmount={totalAmount} />
            </div>
        </Container>
    );
}
