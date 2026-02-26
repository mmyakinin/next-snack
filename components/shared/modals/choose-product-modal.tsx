"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Product } from "@prisma/client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/";
import { ChooseProductForm } from "../";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useCartStore } from "@/store/cart";
import toast from "react-hot-toast";

interface Props {
    product: Product;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter();

    const addCartItem = useCartStore((state) => state.addCartItem);

    const onClickAddProduct = async () => {
        try {
            await addCartItem({
                productId: product.id,
            });
            toast.success("Успешно добавилось в корзину");
        } catch (err) {
            console.error(err);
            toast.error("Не удалсоь добавить в корзину");
        }
    };

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className="p-0 w-full max-w-[990px] min-h-[500px] bg-white overflow-hidden">
                <VisuallyHidden>
                    <DialogTitle>{product.name}</DialogTitle>
                </VisuallyHidden>

                <ChooseProductForm
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    description={product.description}
                    addProductInCart={onClickAddProduct}
                />
            </DialogContent>
        </Dialog>
    );
};
