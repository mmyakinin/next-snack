import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { findOrCreateCart } from "@/lib/find-or-create-cart";
import { updateCartTotalAmount } from "@/lib/update-cart-total-amount";

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("cartToken")?.value;

        if (!token) {
            return NextResponse.json({ totalAmount: 0, items: [] });
        }

        const userCart = await prisma.cart.findUnique({
            where: {
                token,
            },
            include: {
                items: {
                    include: {
                        product: true,
                    },
                },
            },
        });

        const resp = NextResponse.json(userCart);

        return resp;
    } catch (err) {
        console.log("[CART_GET] Server error", err);
        return NextResponse.json(
            { message: "Не удалось получить корзину" },
            { status: 500 },
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        let token = req.cookies.get("cartToken")?.value;

        if (!token) {
            token = crypto.randomUUID();
        }

        const userCart = await findOrCreateCart(token);

        const data = (await req.json()) as { productId: number };

        const findCartItem = await prisma.cartItem.findFirst({
            where: {
                cartId: userCart.id,
                cart: {
                    token: userCart.token,
                },
                productId: data.productId,
            },
        });

        if (findCartItem) {
            await prisma.cartItem.update({
                where: {
                    id: findCartItem.id,
                },
                data: {
                    quantity: findCartItem.quantity + 1,
                },
            });
        } else {
            await prisma.cartItem.create({
                data: {
                    cartId: userCart.id,
                    productId: data.productId,
                    quantity: 1,
                },
            });
        }

        // ! Instead of userCart.token, you can simply pass token, since userCart.token === token
        const updatedUserCart = await updateCartTotalAmount(userCart.token);

        const response = NextResponse.json(updatedUserCart);
        response.cookies.set("cartToken", userCart.token);

        return response;
    } catch (error) {
        console.log("[CART_POST] Server error", error);
        return NextResponse.json(
            { message: "Не удалось создать корзину" },
            { status: 500 },
        );
    }
}
