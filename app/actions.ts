"use server";

import { OrderSummaryTemplate } from "@/components/shared";
import { CheckoutFormValues } from "@/constants/checkout-form-schema";
import { sendEmail } from "@/lib/send-email";
import { prisma } from "@/prisma/prisma-client";
import { CartItemDTO } from "@/services/dto/cart.dto";
import { OrderStatus, Prisma } from "@prisma/client";
import { cookies } from "next/headers";

export async function createOrder(data: CheckoutFormValues) {
    try {
        const cookiesStore = cookies();
        const cartToken = (await cookiesStore).get("cartToken")?.value;

        if (!cartToken) {
            throw new Error("Cart Token is not found!");
        }

        console.log(cartToken);

        const userCart = await prisma.cart.findUnique({
            where: {
                token: cartToken,
            },
            include: {
                user: true,
                items: {
                    include: {
                        product: true,
                    },
                },
            },
        });

        if (!userCart) {
            throw new Error("User cart is not found!");
        }

        if (userCart.totalAmount === 0) {
            throw new Error("User cart is empty!");
        }

        // Create an order
        const order = await prisma.order.create({
            data: {
                fullName: data.firstName + " " + data.lastName,
                email: data.email,
                phone: data.phone,
                address: data.address,
                comment: data.comment,
                token: cartToken,
                totalAmount: userCart.totalAmount,
                items: JSON.stringify(userCart.items),
                status: OrderStatus.PENDING,
            },
        });

        await prisma.cartItem.deleteMany({
            where: {
                cartId: userCart.id,
            },
        });

        await prisma.cart.update({
            where: {
                id: userCart.id,
            },
            data: {
                totalAmount: 0,
            },
        });

        await sendEmail(
            data.email,
            "Next Snack | Подтвержедение вашего заказа 🌯",
            await OrderSummaryTemplate({
                totalAmount: order.totalAmount,
                fullName: order.fullName,
                items: JSON.parse(order.items as string) as CartItemDTO[],
                paymentUrl: "https://next-snack.vercel.app/",
            }),
        );

        return "http://localhost:3000/checkout";
    } catch (err) {
        console.error("[CREATE_ORDER_ERROR]", err);
        throw err;
    }
}

export async function updateUserInfo(body: Prisma.UserUpdateInput){
    
};
