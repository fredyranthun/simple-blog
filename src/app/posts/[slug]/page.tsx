import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fullPath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <article className="prose prose-invert lg:prose-xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-white">{data.title}</h1>
      <p className="text-gray-400 mb-8">{new Date(data.date).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} className="text-gray-300" />
    </article>
  );
}
