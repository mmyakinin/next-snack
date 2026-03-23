import { Container, InfoBlock } from "@/components/shared";

export const metadata = {
    title: "Next Snack | Страница не найдена",
};

export default function NotFound() {
    return (
        <Container className="flex justify-center items-center pt-20 pb-10">
            <InfoBlock
                title="Страница не найдена"
                text="Проверьте корректность введённого адреса или повторите попытку позже"
                imageUrl="/assets/images/not-found.png"
            />
        </Container>
    );
}
