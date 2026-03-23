"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useCategories } from "@/context/categories-context";

interface Props {
    items: Category[];
    className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
    const { activeId, setActiveId } = useCategories();

    return (
        <div
            className={cn(
                "inline-flex gap-1 bg-gray-100 p-1 rounded-xl",
                className,
            )}
        >
            {items.map((item, index) => {
                return (
                    <Link
                        key={item.id}
                        href={`/#${item.name}`}
                        onClick={() => setActiveId(item.id)}
                        className={cn(
                            "flex items-center font-bold h-11 rounded-xl px-5",
                            activeId === item.id &&
                                "bg-white shadow-md shadow-gray-200 text-primary",
                        )}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </div>
    );
};
