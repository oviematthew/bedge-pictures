import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDir = path.join(process.cwd(), "public/weddingStories");

export const getAllWeddingPosts = () => {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((fileName) => {
    // remove md part of post
    const slug = fileName.replace(/\.md$/, "");

    const filePath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    // transform filecontents to readable data
    const { content, data } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    };
  });
};
