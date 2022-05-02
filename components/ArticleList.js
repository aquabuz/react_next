import { useEffect } from "react";
import * as style from "../styles/Article.module.scss";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  useEffect(() => {
    const masonryContainerStyle = getComputedStyle(
      document.querySelector(`.${style.grid}`)
    );
    const columnGap = parseInt(
      masonryContainerStyle.getPropertyValue("column-gap")
    );
    const autoRows = parseInt(
      masonryContainerStyle.getPropertyValue("grid-auto-rows")
    );

    let CD = document.querySelectorAll(`.${style.card}`);

    CD.forEach((el) => {
      el.style.gridRowEnd = `span ${Math.ceil(
        el.querySelector("h3").scrollHeight / autoRows + columnGap / autoRows
      )}`;
    });
  });

  return (
    <div className={style.grid}>
      {articles.map((article) => {
        return <ArticleItem article={article} key={article.id} />;
      })}
    </div>
  );
};

export default ArticleList;
