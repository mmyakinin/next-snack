import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const userId = 1;
        const token = req.cookies.get("cartToken")?.value;

        if (!token) {
            return NextResponse.json({ totalAmount: 0, items: [] });
        }

        const userCart = await prisma.cart.findFirst({
            where: {
                token,
            },
            include: {
                items: {
                    orderBy: {
                        createdAt: "desc",
                    },

                    include: {
                        product: true,
                    },
                },
            },
        });

        return NextResponse.json(userCart);
    } catch (err) {
        console.error(err);
    }
}
