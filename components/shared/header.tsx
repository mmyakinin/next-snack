"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
    AuthModal,
    CartButton,
    Container,
    ProfileButton,
    SearchInput,
} from "./";

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
    const [openAuthModal, setOpenAuthModal] = React.useState<boolean>(false);

    return (
        <header className={cn(className)}>
            <Container className="flex justify-between items-center py-8">
                {/* Left Side - Logo */}
                <Link href={"/"} className="flex items-center gap-2">
                    <Image src="/kebab.png" alt="Logo" width={45} height={45} />
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
                        <AuthModal
                            open={openAuthModal}
                            onClose={() => setOpenAuthModal(false)}
                        />

                        {/* <Button
                            variant={"outline"}
                            className="flex items-center gap-1"
                        >
                            <User size={20} />
                            Войти
                        </Button> */}

                        <ProfileButton
                            onClickProfile={() => setOpenAuthModal(true)}
                        />

                        <div className="max-[768px]:hidden">
                            <CartButton />
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
};
