import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>TheWebDev</title>
        <meta name="keyword" content="web-development, programming" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const articles = await res.json();
    return {
      props: {
        articles,
      },
      revalidate: 10,
    };
  } catch (error) {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};
