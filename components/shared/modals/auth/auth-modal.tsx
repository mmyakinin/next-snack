"use client";

import React from "react";
import { LoginForm } from "./forms/login-form";
import { RegisterForm } from "./forms/register-form";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button, Dialog, DialogContent, DialogTitle } from "@/components/ui";

interface Props {
    open: boolean;
    onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
    const [type, setType] = React.useState<"login" | "register">("login");

    const onSwithType = () => {
        setType(type === "login" ? "register" : "login");
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="bg-white w-[450px] p-10 rounded-4xl">
                <VisuallyHidden>
                    <DialogTitle></DialogTitle>
                </VisuallyHidden>

                {type === "login" ? (
                    <LoginForm onClose={handleClose} />
                ) : (
                    <RegisterForm />
                )}

                <div className="text-center">
                    {type === "login" ? (
                        <p>
                            Нет аккаунта?{" "}
                            <button
                                onClick={onSwithType}
                                className="text-primary hover:underline"
                            >
                                Зарегистрироваться
                            </button>
                        </p>
                    ) : (
                        <p>
                            Уже есть аккаунт?{" "}
                            <button
                                onClick={onSwithType}
                                className="text-primary hover:underline"
                            >
                                Войти
                            </button>
                        </p>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};
