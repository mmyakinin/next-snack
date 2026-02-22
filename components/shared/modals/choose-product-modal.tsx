"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Product } from "@prisma/client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/";
import { ChooseProductForm } from "../";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Props {
    product: Product;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter();

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
                />
            </DialogContent>
        </Dialog>
    );
};
