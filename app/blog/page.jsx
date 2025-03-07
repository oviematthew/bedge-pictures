import Link from "next/link";
import React from "react";
import { getAllPosts } from "../utils/Posts";
import Image from "next/image";

export const metadata = {
  title: "Blog - Bedge Pictures",
  description: "blog",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li className="mb-5" key={post.slug}>
            {/* <Image
              src="https://bedgepictures.com/wp-content/uploads/2021/05/0B2A5303copy-scaled.jpg"
              alt="picture"
              width={50}
              height={50}
            /> */}
            <Link className="font-cormorant" href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
