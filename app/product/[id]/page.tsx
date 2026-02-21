export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    console.log(id);

    return <h1>Product {id}</h1>;
}
