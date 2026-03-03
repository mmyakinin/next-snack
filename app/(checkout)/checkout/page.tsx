"use client";

import {
    CartDrawerItem,
    CheckoutItemDetails,
    Container,
    Title,
    WhiteBlock,
} from "@/components/shared";
import { CheckoutItem } from "@/components/shared/checkout-item";
import { Button, Input, Textarea } from "@/components/ui";
import { useCartStore } from "@/store/cart";
import { Box, Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage() {
    const items = useCartStore((state) => state.items);
    return (
        <Container>
            <h3 className="py-13 font-extrabold text-[36px] max-[786px]:py-8 max-[786px]:pt-6 max-[450px]:text-[30px]">
                Оформление заказа
            </h3>
            <div className="flex justify-between items-start gap-8 max-[1300px]:flex-col max-[1300px]:items-center">
                {/* Left Side */}
                <div className="flex flex-col gap-8 ">
                    <WhiteBlock title="1. Корзина">
                        <div>
                            {items.map((item) => {
                                return (
                                    <CheckoutItem
                                        key={item.id}
                                        name={item.name}
                                        id={item.id}
                                        imageUrl={item.imageUrl}
                                        price={item.price}
                                        quantity={item.quantity}
                                    />
                                );
                            })}
                        </div>
                    </WhiteBlock>
                    <WhiteBlock title="2. Персональная информация">
                        <div className="grid grid-cols-2 gap-6 pb-10 pt-8 max-[768px]:grid-cols-1">
                            <Input
                                name="firstName"
                                className="text-base"
                                placeholder="Ваше Имя"
                            />
                            <Input
                                name="lastName"
                                className="text-base"
                                placeholder="Ваша Фамилия"
                            />
                            <Input
                                name="e-mail"
                                className="text-base"
                                placeholder="Ваш E-Mail"
                            />
                            <Input
                                name="phone"
                                className="text-base"
                                placeholder="Номер Телефона"
                            />
                        </div>
                    </WhiteBlock>
                    <WhiteBlock title="3. Адрес доставки">
                        <div className="flex flex-col gap-6 pb-10 pt-8">
                            <Input
                                name="address"
                                className="text-base"
                                placeholder="Введите адрес доставки"
                            />
                            <Textarea
                                name="comment"
                                className="text-base h-[100px]"
                                placeholder="Комментарий к заказу"
                            />
                        </div>
                    </WhiteBlock>
                </div>

                {/* Right Side */}
                <div className="w-[450px] rounded-4xl bg-white p-[40px] sticky top-4 z-10 max-[1300px]:w-screen max-[1300px]:max-w-[752px] max-[787px]:w-screen max-[787px]:rounded-none">
                    <div className="flex flex-col gap-4 pb-5">
                        <CheckoutItemDetails
                            beginAdortment={
                                <Package size={24} className="text-gray-400" />
                            }
                            title="Стоимость товаров:"
                            value={5}
                        />
                        <CheckoutItemDetails
                            beginAdortment={
                                <Percent size={24} className="text-gray-400" />
                            }
                            title="Налоги:"
                            value={5}
                        />
                        <CheckoutItemDetails
                            beginAdortment={
                                <Truck size={24} className="text-gray-400" />
                            }
                            title="Доставка:"
                            value={5}
                        />
                    </div>
                    <div className="flex justify-between items-center pt-4 pb-5 border-b-[1px] border-solid border-[#a1a1a1]">
                        <p className="text-[22px] font-bold">Итого:</p>
                        <h4 className="text-[24px] font-extrabold ">25 ₼</h4>
                    </div>
                    <div className="pt-8">
                        <Button className="w-full text-base font-bold h-[50px]">
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
