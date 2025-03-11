import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { getAllPosts } from "../../utils/Posts";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import FadeUpAnimation from "../../components/FadeUpAnimation";

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
    <FadeUpAnimation key={slug}>
      <div className="px-10 md:px-5 md:w-1/2 mx-auto mt-10 bg-white dark:bg-black ">
        <div className="flex justify-between mb-5 fade-up">
          <Link
            href={"/blog"}
            className="flex items-center gap-2 hover:scale-90"
          >
            <ArrowLeft />
            <p className="font-poppins">go home</p>
          </Link>

          <p className="font-poppins">{post.date}</p>
        </div>
        <h1 className="text-center font-bold font-cormorant text-2xl md:text-5xl mb-7">
          {post.title}
        </h1>

        <article
          className="article fade-up"
          dangerouslySetInnerHTML={{ __html: htmlConverter }}
        />
      </div>
    </FadeUpAnimation>
  );
}
