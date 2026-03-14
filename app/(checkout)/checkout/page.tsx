"use client";

import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/hooks/use-cart";

import {
    Container,
    CheckoutSidebar,
    CheckoutAddressForm,
    CheckoutCart,
    CheckoutPersonalForm,
} from "@/components/shared";

import {
    checkoutFormSchema,
    CheckoutFormValues,
} from "@/constants/checkout-form-schema";
import { createOrder } from "@/app/actions";

import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

export default function CheckoutPage() {
    const [submiting, setSubmiting] = React.useState<boolean>(false);
    const { loading, items, totalAmount, removeCartItem, onClickCountButton } =
        useCart();

    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            comment: "",
        },
    });

    const onSubmit = async (data: CheckoutFormValues) => {
        try {
            setSubmiting(true);
            const url = await createOrder(data);
            toast.success(
                "Заказ успешно оформлен! Переход на старницу оплаты...",
            );

            if (url) {
                setTimeout(() => {
                    location.href = url;
                }, 1500);
            }
        } catch (err) {
            console.error(err);
            setSubmiting(false);
            toast.error("Не удалось создать заказ. Попробуйте заново");
        } finally {
            setSubmiting(false);
        }
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
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
                            <CheckoutPersonalForm
                                className={cn(
                                    loading && "opacity-50 pointer-events-none",
                                )}
                            />
                            <CheckoutAddressForm
                                className={cn(
                                    loading && "opacity-50 pointer-events-none",
                                )}
                            />
                        </div>

                        {/* Right Side */}
                        <CheckoutSidebar
                            totalAmount={totalAmount}
                            loading={loading || submiting}
                        />
                    </div>
                </Container>
            </form>
        </FormProvider>
    );
}
