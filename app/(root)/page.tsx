import { prisma } from "@/prisma/prisma-client";
import {
    Container,
    Categories,
    ProductsGroupList,
    MobileCartButton,
} from "@/components/shared";
import { CategoriesProvider } from "@/context/categories-context";

export default async function Home() {
    const categories = await prisma.category.findMany({
        include: {
            products: true,
        },
    });

    return (
        <CategoriesProvider>
            <div className="sticky top-0 z-20 bg-white shadow-lg shadow-black/5">
                <Container>
                    <div className="py-4 overflow-x-auto">
                        <div className="inline-block p-2 overflow-visible">
                            <Categories items={categories} />
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="pt-10 relative">
                    <div className="flex flex-col gap-8">
                        {categories.map((category, index) => {
                            return (
                                <ProductsGroupList
                                    key={category.id}
                                    categoryId={category.id}
                                    title={category.name}
                                    products={category.products}
                                />
                            );
                        })}
                    </div>
                    <MobileCartButton />
                </div>
            </Container>
        </CategoriesProvider>
    );
}
