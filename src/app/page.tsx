import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Home() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug: fileName.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        excerpt: content.split("\n").slice(0, 3).join(" ").slice(0, 150) + "...",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white">Latest Posts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="block">
            <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-white">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-gray-300">{post.excerpt}</p>
              </div>
              <div className="px-6 py-4 bg-gray-700">
                <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2">
                  #nextjs
                </span>
                <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                  #blog
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
