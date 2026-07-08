import Link from "next/link"

type Props = {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "ta" | "en" | "sp" }>;
}

const NewsArticle = async ({ params, searchParams }: Props) => {

    const { articleId } = await params;
    const { lang = "en" } = await searchParams;
    return (
        <>
            <h1>News article {articleId}</h1>
            <p>Reading in {lang}</p>

            <div>
                <Link href="/articles/{articleId}?lang=ta">Tamil</Link>
                <Link href="/articles/{articleId}?lang=en">English</Link>
                <Link href="/articles/{articleId}?lang=sp">Spanish</Link>
            </div>
        </>
    )
}

export default NewsArticle