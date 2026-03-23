import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface Props {
    title: string;
    text: string;
    imageUrl: string;
}

export const InfoBlock: React.FC<Props> = ({ title, text, imageUrl }) => {
    return (
        <div className="flex items-center justify-between w-[840px] gap-12 max-[830px]:flex max-[830px]:flex-col-reverse max-[830px]:items-center max-[830px]:justify-center max-[830px]:gap-8">
            <div className="flex flex-col max-[830px]:items-center max-[830px]:justify-center">
                <div className="w-[445px] max-[830px]:flex max-[830px]:flex-col max-[830px]:items-center max-[830px]:justify-center max-[450px]:w-full">
                    <h2 className="text-[32px] font-extrabold mb-2 max-[640px]:text-[24px]">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-base max-[830px]:text-center">
                        {text}
                    </p>
                </div>
                <div className="flex gap-4 mt-4">
                    <Link href="/">
                        <Button variant="outline" className="gap-2">
                            <ArrowLeft />
                            На главную
                        </Button>
                    </Link>
                    <a href="">
                        <Button
                            variant="outline"
                            className="text-gray-500 border-gray-400 hover:bg-gray-50"
                        >
                            Обновить
                        </Button>
                    </a>
                </div>
            </div>
            <Image src={imageUrl} alt={title} width={300} height={300} />
        </div>
    );
};
