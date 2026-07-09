import Link from "next/link";

export const metadata = {
  title: "Product page",
}
const ProductList = () => {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product list</h1>
      <h1>
        <Link href="/products/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="/products/2">Product 2</Link>
      </h1>
      <h1>
        <Link href="/products/3" replace>Product 3</Link>
      </h1>
      <h1>
        <Link href={`/products/${productId}`}>{`Product ${productId}`}</Link>
      </h1>
    </>
  );
};

export default ProductList;
