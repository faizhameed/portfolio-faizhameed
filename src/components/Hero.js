import Image from "next/image";

import { HiOutlinePlayCircle, HiOutlineDocumentText } from "react-icons/hi2";
import { MdWorkOutline } from "react-icons/md";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-24">
      <div className="order-2 lg:order-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight md:leading-tight mb-6">
          Building AI Products, Scaling Teams &amp; Growing in Public
        </h1>
        <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-subtle-light dark:text-subtle-dark mb-10">
          I&apos; m Faiz Hameed, Software Engineer at Google and
          founder, sharing my journey of building great products and teams.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
          <a
            className="w-full sm:w-auto bg-primary text-white font-semibold py-3.5 px-7 rounded-xl flex items-center justify-center gap-2.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-primary/20 whitespace-nowrap"
            href="#youtube"
          >
            <HiOutlinePlayCircle className="text-xl" /> Watch My YouTube
          </a>
          <a
            className="w-full sm:w-auto bg-surface-light dark:bg-surface-dark text-heading-light dark:text-heading-dark font-semibold py-3.5 px-7 rounded-xl border-2 border-border-light dark:border-border-dark flex items-center justify-center gap-2.5 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            href="/contact"
          >
            <MdWorkOutline className="text-xl" /> Work With Me
          </a>
          <a
            className="w-full sm:w-auto bg-gray-100 dark:bg-gray-800 text-subtle-light dark:text-subtle-dark font-semibold py-3.5 px-7 rounded-xl flex items-center justify-center gap-2.5 hover:text-heading-light dark:hover:text-heading-dark hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            href="/resume"
          >
            <HiOutlineDocumentText className="text-xl" /> My Journey
          </a>
        </div>
      </div>
      <div className="order-1 lg:order-2 flex justify-center">
        <div className="blob-container w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
          <div className="blob-shape absolute inset-0 bg-primary/20 blur-3xl"></div>
          <Image
            alt="Faiz Hameed"
            className="blob-image w-full h-full object-cover"
            src="/static/profile.png"
            width={384}
            height={384}
            priority
          />
        </div>
      </div>
    </section>
  );
}
