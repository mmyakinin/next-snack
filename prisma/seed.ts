import { categories, products } from "./constant";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "Maksim Myakinin",
                email: "example@gmail.com",
                password: hashSync("MYaksyeager071623$", 10),
                role: "ADMIN",
                verifed: true,
            },
            {
                fullName: "Fuad Mammadov",
                email: "user@example.com",
                password: hashSync("12345678", 10),
                role: "USER",
                verifed: true,
            },
        ],
    });

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.product.createMany({
        data: products,
    });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 15.5,
                token: "qwe1234",
            },
            {
                userId: 2,
                totalAmount: 5,
                token: "rtx4060",
            },
        ],
    });

    await prisma.cartItem.createMany({
        data: [
            {
                cartId: 1,
                productId: 1,
                quantity: 1,
            },
            {
                cartId: 1,
                productId: 3,
                quantity: 1,
            },
            {
                cartId: 1,
                productId: 14,
                quantity: 2,
            },
        ],
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (err) {
        console.error(err);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
