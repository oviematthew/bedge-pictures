import Link from "next/link";
import React, { lazy } from "react";
import { getAllPosts } from "../utils/Posts";
import FadeUpAnimation from "../components/FadeUpAnimation";

export const metadata = {
  title: "Blog - Bedge Pictures",
  description: "blog",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <FadeUpAnimation>
        <div className="bg-white dark:bg-black sm:py-0 md:py-24 fade-up">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="w-full hidden md:block">
              <img
                src="/blog/blog-hero-img.jpg"
                alt="hero-img"
                width={1200}
                height={300}
                className="w-full h-[250px] object-cover rounded-2xl"
              />
            </div>
            <div className="mx-auto max-w-4xl lg:mx-0 mt-10">
              <h2 className="text-6xl font-cormorant font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                The Blog.
              </h2>
            </div>
            <div className="mx-auto bg-white dark:bg-black mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="w-full object-contain mb-5">
                    <Link href={`/posts/${post.slug}`}>
                      <img
                        src={post.featuredImg}
                        alt="post-featured-img"
                        width={100}
                        height={300}
                        className="w-full h-[250px] object-cover rounded-2xl"
                      />
                    </Link>
                  </div>
                  <div className="flex items-center gap-x-4 text-xs">
                    {/* Time */}
                    <time
                      dateTime={post.date}
                      className="text-gray-500 dark:text-white"
                    >
                      {/* Date */}
                      {post.date}
                    </time>

                    {/* Category */}
                    <a
                      href={`/posts/${post.slug}`}
                      className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category}
                    </a>
                  </div>
                  <div className="group ">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white font-poppins">
                      <a href={`/posts/${post.slug}`}>{post.title}</a>
                    </h3>
                    <p className="mt-5 mb-5 font-poppins line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">
                      <a href={`/posts/${post.slug}`}>{post.excerpt}</a>
                    </p>

                    <Link
                      href={`/posts/${post.slug}`}
                      className="text-base font-semibold  text-gray-900 dark:text-white shadow-xs  italic hover:scale-110"
                    >
                      Read article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </FadeUpAnimation>
    </>
  );
}
