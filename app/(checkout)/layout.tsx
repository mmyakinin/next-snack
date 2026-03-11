import { Header } from "@/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next Snack | Офоромление Заказа",
};

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-primary-foreground">
            <Header hasSearch={false} hasRightSide={false} />
            {children}
        </main>
    );
}
