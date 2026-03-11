"use client";

import React from "react";

import { Title, ProductCard } from ".";

import { useIntersection } from "react-use";
import { useCategories } from "@/context/categories-context";

interface Props {
    title: string;
    products: any[];
    categoryId: number;
    className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    products,
    categoryId,
    className,
}) => {
    const intersectionRef = React.useRef<HTMLDivElement | null>(null);
    const { setActiveId } = useCategories();

    const intersection = useIntersection(
        intersectionRef as React.RefObject<HTMLElement>,
        {
            threshold: 0.2,
            rootMargin: "-80px 0px -30% 0px",
        },
    );

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title
                text={title}
                size="lg"
                className="text-[36px] font-extrabold mb-5"
            />

            <div className="grid grid-cols-4 pb-10 gap-[50px] max-[1250px]:gap-[40px] max-[765px]:gap-[30px] max-[1250px]:grid-cols-3 max-[1000px]:grid-cols-2 max-[1000px]:pb-3 max-[600px]:grid-cols-1 max-[600px]:pb-6">
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};
