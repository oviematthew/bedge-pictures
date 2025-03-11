import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { getAllWeddingPosts } from "../../utils/WeddingStories";
import Wedding from "../../portfolio/wedding/page";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
    <div className="px-10 md:px-5 md:w-1/2 mx-auto mt-10">
      <div className="flex justify-between mb-5">
        <Link
          href={"/wedding-stories"}
          className="flex items-center gap-2 hover:scale-90"
        >
          <ArrowLeft />
          <p className="font-poppins">go home</p>
        </Link>

        <p className="font-poppins">{weddingPost.date}</p>
      </div>
      <h1 className="text-center font-bold font-cormorant text-2xl md:text-5xl mb-7">
        {weddingPost.title}
      </h1>

      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: htmlConverter }}
      />
    </div>
  );
}
