import { ChooseProductModal } from "@/components/shared/modals/choose-product-modal";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductModal({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const product = await prisma.product.findFirst({
        where: {
            id: Number(id),
        },
    });

    if (!product) {
        notFound();
    }

    return <ChooseProductModal product={product} />;
}
