import Link from "next/link";
import * as style from "../styles/Article.module.scss";

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={style.card}>
        <h3>{article.title} &rarr;</h3>
      </a>
    </Link>
  );
};

export default ArticleItem;
