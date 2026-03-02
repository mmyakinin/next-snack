import React from "react";
import Link from "next/link";
import Image from "next/image";

import { CartButton, Container, SearchInput } from "./";
import { Button } from "../ui";

import { ArrowRight, ShoppingCart, User } from "lucide-react";

import { cn } from "@/lib/utils";

interface Props {
    hasSearch?: boolean;
    hasRightSide?: boolean;
    className?: string;
}

export const Header: React.FC<Props> = ({
    hasSearch = true,
    hasRightSide = true,
    className,
}) => {
    return (
        <header className={cn(className)}>
            <Container className="flex justify-between items-center py-8">
                {/* Left Side - Logo */}
                <Link href={"/"} className="flex items-center gap-4">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <div className="max-[600px]:hidden">
                        <h1 className="text-2xl font-black">Next Snack</h1>
                    </div>
                </Link>

                {/* Search Input */}
                {hasSearch && (
                    <div className="max-[920px]:hidden">
                        <SearchInput />
                    </div>
                )}

                {/* Right Side */}
                {hasRightSide && (
                    <div className="flex items-center gap-3">
                        <Button
                            variant={"outline"}
                            className="flex items-center gap-1"
                        >
                            <User size={20} />
                            Войти
                        </Button>

                        <div className="max-[768px]:hidden">
                            <CartButton />
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
};
