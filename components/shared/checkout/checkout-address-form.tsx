import React from "react";

import { FormInput, WhiteBlock } from "..";
import { Input, Textarea } from "@/components/ui";

interface Props {
    className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
    return (
        <WhiteBlock title="3. Адрес доставки" className={className}>
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
    );
};
