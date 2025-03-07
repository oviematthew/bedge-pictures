import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { getAllPosts } from "../../utils/Posts";

const md = new MarkdownIt();

async function fetchPosts(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export default async function Post({ params }) {
  const post = await fetchPosts(params.slug);

  if (!post) notFound();

  const htmlConverter = md.render(post.content);

  return (
    <article className="mb-5">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlConverter }} />
    </article>
  );
}
