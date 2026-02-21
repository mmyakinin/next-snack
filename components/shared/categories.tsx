"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useCtaegories } from "@/context/categories-context";

interface Props {
    items: Category[];
    className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
    const { activeIndex } = useCtaegories();

    return (
        <div
            className={cn(
                "inline-flex gap-1 bg-gray-100 p-1 rounded-2xl",
                className,
            )}
        >
            {items.map((item, index) => (
                <Link
                    key={item.id}
                    href={`/#${item.name}`}
                    className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        activeIndex === item.id &&
                            "bg-white shadow-md shadow-gray-200 text-primary",
                    )}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
};
