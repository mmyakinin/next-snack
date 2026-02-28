import "./globals.css";

import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

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
                    href="/logo.png"
                    type="image/x-icon"
                />
            </head>
            <body className={`${nunito.variable} antialiased`}>
                {children}
                <Toaster />
                <NextTopLoader color="#ff5e00" />
            </body>
        </html>
    );
}
