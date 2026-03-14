import React from "react";

import { FormInput, FormTextarea, WhiteBlock } from "..";

interface Props {
    className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
    return (
        <WhiteBlock title="3. Адрес доставки" className={className}>
            <div className="flex flex-col gap-6 pb-10 pt-8 ">
                <FormInput
                    name="address"
                    placeholder="Введите адрес доставки"
                />
                <FormTextarea
                    name="comment"
                    className="text-base h-[100px]"
                    placeholder="Комментарий к заказу"
                />
            </div>
        </WhiteBlock>
    );
};
