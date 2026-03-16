import "./globals.css";

import { Providers } from "@/components/shared";
import { Nunito } from "next/font/google";

const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["cyrillic"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="shortcut icon"
                    href="/kebab.png"
                    type="image/x-icon"
                />
            </head>
            <body className={`${nunito.variable} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
