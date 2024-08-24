import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((itemNews) => (
        <li key={itemNews.id}>
          <Link href={`/news/${itemNews.slug}`}>
            <img src={`/images/news/${itemNews.image}`} alt={itemNews.title} />
            <span>{itemNews.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
