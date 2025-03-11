import fs from "fs";
import path from "path";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const folder = url.searchParams.get("folder");

    if (!folder) {
      return new Response(
        JSON.stringify({ error: "Folder path is required" }),
        { status: 400 }
      );
    }

    const directoryPath = path.join(process.cwd(), "public", folder);
    const files = fs.readdirSync(directoryPath);
    const images = files
      .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map((file) => ({ src: `/${folder}/${file}` }));

    return new Response(JSON.stringify({ images }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch images" }), {
      status: 500,
    });
  }
}
