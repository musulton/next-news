import { getAllNews } from "@/lib/news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
  const slug = params?.slug;
  const newsItem = getAllNews().find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
