import BrainLightning from "@/components/BrainLightning";
import { getMediumPosts } from "@/lib/medium";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function BlogSection() {
  const posts = getMediumPosts();
  const featuredPosts = posts.slice(0, 3);

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
        {featuredPosts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="mb-4 overflow-hidden rounded-2xl">
              <div className="w-full h-48 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl group-hover:scale-105 transition-transform duration-300 relative">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-900 rounded-2xl">
                    <BrainLightning />
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm text-subtle-light dark:text-subtle-dark mb-1">
              {post.publishedDate}
            </p>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-subtle-light dark:text-subtle-dark">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
