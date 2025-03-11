import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { getAllPosts } from "../../utils/Posts";

const md = new MarkdownIt();

async function fetchPosts(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export default async function Post({ params }) {
  // fix dynamic route issues with newer nextjs dynamic routing by awaiting params first
  const { slug } = await params;

  // redirect to 404 if no slug
  if (!slug) notFound();

  const post = await fetchPosts(slug);

  // redirect to 404 if no post
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
