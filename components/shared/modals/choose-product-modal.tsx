"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Product } from "@prisma/client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/";
import { ChooseProductForm } from "../";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useCartStore } from "@/store/cart";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

interface Props {
    product: Product;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter();

    const addCartItem = useCartStore((state) => state.addCartItem);
    const loading = useCartStore((state) => state.loading);

    const onClickAddProduct = async () => {
        try {
            await addCartItem({
                productId: product.id,
            });
            toast.success(`Добавлено: ${product.name}`);
            router.back();
        } catch (err) {
            console.error(err);
            toast.error("Ошибка при добавлении");
        }
    };

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    "p-0 w-full max-w-[850px] min-h-[500px] max-[768px]:h-full bg-white overflow-hidden rounded-4xl",
                    className,
                )}
            >
                <VisuallyHidden>
                    <DialogTitle>{product.name}</DialogTitle>
                </VisuallyHidden>

                <ChooseProductForm
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    description={product.description}
                    addProductInCart={onClickAddProduct}
                    loading={loading}
                />
            </DialogContent>
        </Dialog>
    );
};
