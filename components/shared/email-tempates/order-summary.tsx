import React from "react";
import { CartItemDTO } from "@/services/dto/cart.dto";
import { CheckoutFormValues } from "@/constants/checkout-form-schema";

interface Props {
    fullName: string;
    totalAmount: number;
    items: CartItemDTO[];
    paymentUrl: string;
}

const TAX = 3;
const DELEVERY_TAX = 5;

export const OrderSummaryTemplate: React.FC<Props> = ({
    fullName,
    totalAmount,
    items,
    paymentUrl,
}) => {
    const taxAmount = Number(((totalAmount * TAX) / 100).toFixed(2));
    const deliveryAmount = Number(
        ((totalAmount * DELEVERY_TAX) / 100).toFixed(2),
    );
    const totalPrice = (totalAmount + taxAmount + deliveryAmount).toFixed(2);
    return (
        <div>
            <h3>Здравствуйте, {fullName}</h3>

            <p>
                {`Благодарим вас за оформление заказа на общую сумму ${totalPrice} ₼ (с учетом процента и доставки)`}
            </p>

            <p>Ваш заказ:</p>

            <ul style={{ margin: 0, paddingLeft: 0 }}>
                {items.map((item) => (
                    <li key={item.id}>
                        {`${item.product.name} | ${item.product.price} ₼ * ${item.quantity} шт = ${
                            item.product.price * item.quantity
                        } ₼`}
                    </li>
                ))}
            </ul>

            <p>
                Для оформления заказа и оплаты, пожалуйста перейдите{" "}
                <a href={paymentUrl}>по этой ссылке</a>
            </p>

            <p>Спасибо, что выбрали нас!</p>
        </div>
    );
};
