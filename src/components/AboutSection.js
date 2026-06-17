import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="about">
      <section className="lg:col-span-1 p-8 bg-surface-light dark:bg-surface-dark rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">The Short Version</h2>
        <p className="text-subtle-light dark:text-subtle-dark leading-relaxed mb-6">
          I&apos;m a product-minded engineer with a passion for creating
          impactful technology. My focus is on AI, developer tools, and building
          high-performing engineering cultures. I believe in transparency and
          share my learnings publicly.
        </p>
        <Link
          href="/resume"
          className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-subtle-light dark:text-subtle-dark font-semibold py-2.5 px-5 rounded-xl hover:text-heading-light dark:hover:text-heading-dark hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
        >
          <HiOutlineDocumentText className="text-lg" /> View My Journey
        </Link>
      </section>
      <section
        className="lg:col-span-2 p-8 bg-surface-light dark:bg-surface-dark rounded-3xl"
        id="work"
      >
        <h2 className="text-3xl font-bold mb-6">My Work</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-background-light dark:hover:bg-background-dark transition-colors">
            <div className="w-12 h-12 rounded-lg bg-red-500 flex-shrink-0 flex items-center justify-center">
              <FaGoogle className="text-2xl text-white rounded-full" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Engineering @ Google</h3>
              <p className="text-subtle-light dark:text-subtle-dark">
                Leading teams to build and scale core products used by millions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-background-light dark:hover:bg-background-dark transition-colors">
            <div className="w-12 h-12 rounded-lg bg-indigo-500 flex-shrink-0"></div>
            <div>
              <h3
                href="https://flovy.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg"
              >
                Flovy.ai
              </h3>
              <p className="text-subtle-light dark:text-subtle-dark">
                AI powered coaching platform.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-background-light dark:hover:bg-background-dark transition-colors">
            <div className="w-12 h-12 rounded-lg bg-emerald-500 flex-shrink-0"></div>
            <div>
              <h3 className="font-bold text-lg">Building Products</h3>
              <p className="text-subtle-light dark:text-subtle-dark">
                From side-projects to startups, I love bringing ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
