import { Container, InfoBlock } from "@/components/shared";

export const metadata = {
    title: "Next Snack | Доступ запрещён",
};

export default function UnauthorizedPage() {
    return (
        <Container className="flex justify-center items-center pt-20 pb-10">
            <InfoBlock
                title="Доступ запрещён"
                text="Данную страницу могут просматривать только авторизованные пользователи"
                imageUrl="/assets/images/lock.png"
            />
        </Container>
    );
}
