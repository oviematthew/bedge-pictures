import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getAllWeddingPosts } from "../utils/WeddingStories";

export const metadata = {
  title: "Wedding Stories - Bedge Pictures",
  description: "Wedding Stories",
};

export default function WeddingStories() {
  const weddingPosts = getAllWeddingPosts();

  return (
    <>
      <>
        <div className="bg-white dark:bg-black sm:py-0 md:py-24 ">
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
                Our Wedding Stories.
              </h2>
            </div>
            <div className="mx-auto bg-white dark:bg-black mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {weddingPosts.map((weddingPost) => (
                <article
                  key={weddingPost.slug}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="w-full object-contain mb-5">
                    <Link href={`/wedding-story/${weddingPost.slug}`}>
                      <img
                        src={weddingPost.featuredImg}
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
                      dateTime={weddingPost.date}
                      className="text-gray-500 dark:text-white"
                    >
                      {/* Date */}
                      {weddingPost.date}
                    </time>

                    {/* Category */}
                    <a
                      href={`/wedding-story/${weddingPost.slug}`}
                      className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {weddingPost.category}
                    </a>
                  </div>
                  <div className="group ">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white font-poppins">
                      <a href={`/wedding-story/${weddingPost.slug}`}>
                        {weddingPost.title}
                      </a>
                    </h3>
                    <p className="mt-5 mb-5 font-poppins line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">
                      <a href={`/wedding-story/${weddingPost.slug}`}>
                        {weddingPost.excerpt}
                      </a>
                    </p>

                    <Link
                      href={`/wedding-story/${weddingPost.slug}`}
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
      </>
    </>
  );
}
