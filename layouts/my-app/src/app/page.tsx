import Link from "next/link";

export default async function Home() {

  const data = await fetch("http://localhost:5000/post");
  const res = await data.json();
  console.log(res);
  
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


      <div className="border-2 border-green-500 p-2">
        {res.map((item)=>(
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </>
  );
}
