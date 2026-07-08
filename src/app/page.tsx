import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>
        Welcome home!
      </h1>
      <Link href="/products">Product</Link>
      <Link href="/about">About</Link>
      <Link href="/article/breaking-news-123?lang=ta">Read in Tamil</Link>
      <Link href="/article/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/article/breaking-news-123?lang=sp">Read in Spanish</Link>

    </>
  );
}
