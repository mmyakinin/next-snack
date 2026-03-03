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
        <main className="min-h-screen pb-8 bg-[#f4f1ee]">
            <Header hasSearch={false} hasRightSide={false} />
            {children}
        </main>
    );
}
