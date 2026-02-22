import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Container, SearchInput } from "./";
import { Button } from "../ui";

import { ArrowRight, ShoppingCart, User } from "lucide-react";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn("border border-b", className)}>
            <Container className="flex justify-between items-center py-8">
                {/* Left Side - Logo */}
                <Link href={"/"} className="flex items-center gap-4">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <div className="max-[600px]:hidden">
                        <h1 className="text-2xl font-black">Next Snack</h1>
                    </div>
                </Link>

                {/* Search Input */}
                <div className="max-[920px]:hidden">
                    <SearchInput />
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    <Button
                        variant={"outline"}
                        className="flex items-center gap-1"
                    >
                        <User size={20} />
                        Войти
                    </Button>

                    <Button className="group relative">
                        <b className="text-[16px] font-bold border-r-[2px] border-solid border-[rgba(255,240,240,0.4)] pr-2">
                            Корзина
                        </b>
                        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                            <b className="text-[16px] font-bold pt-[2px] pl-3">
                                3
                            </b>
                        </div>
                        <ArrowRight
                            size={20}
                            className="absolute right-4 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        />
                    </Button>
                </div>
            </Container>
        </header>
    );
};
