import { mediumPosts } from "@/data/blogPosts";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function BlogSection() {
  // Get the first 3 posts for the homepage
  const featuredPosts = [...mediumPosts].reverse().slice(0, 3);

  return (
    <section id="blog">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold">Blog</h2>
        <Link
          className="text-primary font-semibold flex items-center gap-1 group"
          href="/blog"
        >
          View All
          <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPosts.map((post, index) => (
          <Link
            key={index}
            href={post.node.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="mb-4 overflow-hidden rounded-2xl">
              <div className="w-full h-48 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl group-hover:scale-105 transition-transform duration-300 relative">
                {post.node.Img && (
                  <Image
                    src={post.node.Img}
                    alt={post.node.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                )}
              </div>
            </div>
            <p className="text-sm text-subtle-light dark:text-subtle-dark mb-1">
              {post.node.publishedDate}
            </p>
            <h3 className="text-xl font-bold mb-2">{post.node.title}</h3>
            <p className="text-subtle-light dark:text-subtle-dark">
              {post.node.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
