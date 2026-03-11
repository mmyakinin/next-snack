"use client";

import React from "react";

import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { useClickAway, useDebounce } from "react-use";
import Link from "next/link";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const [searchQuery, setSearchQuery] = React.useState<string>("");
    const [focused, setFocused] = React.useState<boolean>(false);
    const [products, setProducts] = React.useState<Product[]>([]);
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    });

    useDebounce(
        async () => {
            try {
                const response = await Api.products.search(searchQuery);
                setProducts(response);
            } catch (err) {
                console.error(err);
            }
        },
        500,
        [searchQuery],
    );

    const onClickItem = () => {
        setFocused(false);
        setSearchQuery("");
        setProducts([]);
    };

    return (
        <>
            {focused && (
                <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
            )}
            <div
                ref={ref}
                className={cn(
                    "flex relative z-31 items-center pl-5 py-4 rounded-xl bg-[#f9f9f9] w-[700px] max-[1280px]:w-[600px] max-[1140px]:w-[500px] max-[1025px]:w-[400px] max-[915px]:w-full",
                    className,
                )}
            >
                <div className="border-r-2 pr-3">
                    <Search size={24} className="text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Поиск..."
                    className="outline-none placeholder:text-[#c0c0c0] pl-3 w-[700px] max-[1280px]:w-[600px] max-[1140px]:w-[500px] max-[1025px]:w-[400px] max-[915px]:w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setFocused(true)}
                />

                {products.length > 0 && (
                    <div
                        className={cn(
                            "absolute left-0 w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
                            focused && "visible opacity-100 top-16",
                        )}
                    >
                        {products.map((item) => (
                            <Link
                                key={item.id}
                                href={`/product/${item.id}`}
                                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                                onClick={onClickItem}
                            >
                                <img
                                    className="rounded-sm h-10 w-10"
                                    src={item.imageUrl}
                                    alt={item.name}
                                />
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
