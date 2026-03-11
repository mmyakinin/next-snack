import React from "react";

import { FormInput, WhiteBlock } from "..";

interface Props {
    className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
    return (
        <WhiteBlock title="2. Персональная информация" className={className}>
            <div className="grid grid-cols-2 gap-6 pb-10 pt-8 max-[768px]:grid-cols-1">
                <FormInput
                    name="firstName"
                    className="text-base"
                    placeholder="Ваше Имя"
                />
                <FormInput
                    name="lastName"
                    className="text-base"
                    placeholder="Ваша Фамилия"
                />
                <FormInput
                    name="email"
                    className="text-base"
                    placeholder="Ваш E-Mail"
                />
                <FormInput name="phone" placeholder="Номер Телефона" />
            </div>
        </WhiteBlock>
    );
};
