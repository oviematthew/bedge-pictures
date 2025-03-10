import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { getAllWeddingPosts } from "../../utils/WeddingStories";
import Wedding from "../../portfolio/wedding/page";

const md = new MarkdownIt();

async function fetchweddingPosts(slug) {
  const weddingPosts = getAllWeddingPosts();
  return weddingPosts.find((weddingPost) => weddingPost.slug === slug);
}

export default async function weddingPost({ params }) {
  // fix dynamic route issues with newer nextjs dynamic routing by awaiting params first
  const { slug } = await params;

  if (!slug) notFound();

  const weddingPost = await fetchweddingPosts(slug);

  //go to 404 if error in naviagtion
  if (!weddingPost) notFound();

  const htmlConverter = md.render(weddingPost.content);

  return (
    <article className="mb-5">
      <h1>{weddingPost.title}</h1>
      <p>{weddingPost.date}</p>
      <p>{weddingPost.slug}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlConverter }} />
    </article>
  );
}
