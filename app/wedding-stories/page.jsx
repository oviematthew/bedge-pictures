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
      <div className="hero">hello wedding stories</div>
      <h1>Blog Posts</h1>
      <ul>
        {weddingPosts.map((weddingPost) => (
          <li className="mb-5" key={weddingPost.slug}>
            {/* <Image
              src="https://bedgepictures.com/wp-content/uploads/2021/05/0B2A5303copy-scaled.jpg"
              alt="picture"
              width={50}
              height={50}
            /> */}
            <Link
              className="font-cormorant"
              href={`/wedding-story/${weddingPost.slug}`}
            >
              {weddingPost.title}
            </Link>
            <p>{weddingPost.date}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
