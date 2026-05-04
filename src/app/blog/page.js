import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BrainLightning from "@/components/BrainLightning";
import { getMediumPosts } from "@/lib/medium";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const posts = getMediumPosts();

  return (
    <div className="bg-background-light dark:bg-background-dark text-heading-light dark:text-heading-dark font-body antialiased min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="my-12">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-subtle-light dark:text-subtle-dark">
              My thoughts on engineering, product development, and career
              growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
        </main>
        <Footer />
      </div>
    </div>
  );
}
