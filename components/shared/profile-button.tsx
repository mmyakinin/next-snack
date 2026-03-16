import React from "react";

import Link from "next/link";
import { useSession } from "next-auth/react";

import { Button } from "../ui";
import { User } from "lucide-react";

interface Props {
    onClickProfile: () => void;
}

export const ProfileButton: React.FC<Props> = ({ onClickProfile }) => {
    const { data: session } = useSession();

    return (
        <>
            {!session ? (
                <Button
                    variant={"outline"}
                    className="flex items-center gap-1"
                    onClick={onClickProfile}
                >
                    <User size={20} />
                    Войти
                </Button>
            ) : (
                <Link href={"/profile"}>
                    <Button
                        variant={"outline"}
                        className="flex items-center gap-1"
                    >
                        <User size={20} />
                        Профиль
                    </Button>
                </Link>
            )}
        </>
    );
};
