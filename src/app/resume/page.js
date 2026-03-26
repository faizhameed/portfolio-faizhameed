import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdWork, MdSchool, MdTrendingUp } from "react-icons/md";

const timelineData = [
  // --- Work Experience ---
  {
    id: 1,
    year: "Oct 2022 – Present",
    type: "work",
    role: "Software Engineer",
    company: "Google",
    description:
      "Working on distributed systems for Cloud Redis — implementing canary phases, CAS checks, proactive VM metrics, improving Grow platform endpoints, and enhancing Googlers' Learning Collection platform.",
  },
  {
    id: 2,
    year: "May 2022 – Oct 2022",
    type: "work",
    role: "Frontend Developer",
    company: "Callsign Technologies",
    description:
      "Built permission systems, authentication dashboards, and role-based UI features. Improved security posture and UI component architecture.",
  },
  {
    id: 3,
    year: "Dec 2020 – May 2022",
    type: "work",
    role: "Software Engineer",
    company: "Paytm",
    description:
      "Developed UI for a stock trading mini-app with 10k+ DAU, improved reusability, optimized performance, and added test coverage for reliability.",
  },
  {
    id: 4,
    year: "Jun 2019 – Aug 2020",
    type: "work",
    role: "Full Stack Developer",
    company: "Corefactors",
    description:
      "Led CRM frontend development using React & Redux. Collaborated with UX teams and contributed backend APIs with Django REST.",
  },
  {
    id: 5,
    year: "Oct 2016 – May 2019",
    type: "work",
    role: "Quality & Maintenance Engineer",
    company: "Al Qahtani Pipe Coating Co",
    description:
      "Ensured operational efficiency and equipment reliability in manufacturing workflows.",
  },

  {
    id: 6,
    year: "2024 – Present",
    type: "project",
    role: "Founder & Engineer",
    company: "Flovy (AI Verdict Passive System)",
    description:
      "An AI-powered system that analyzes how your time is structured and issues a verdict highlighting patterns that quietly block progress.",
  },
  {
    id: 7,
    year: "2022 May – 2025 March",
    type: "project",
    role: "Founder",
    company: "Payezy.io",
    description:
      "Built a crypto-powered money transfer platform enabling US → India transfers at competitive FX rates using Node.js, Express, DynamoDB, and React.",
  },
  {
    id: 8,
    year: "2022 January – 2022 July",
    type: "project",
    role: "Full Stack Engineer",
    company: "Gloqal Chat Widget",
    description:
      "Built a full production chat widget system from scratch using React and Express for a Silicon Valley startup.",
  },
  {
    id: 9,
    year: "2020 June – 2020 December",
    type: "project",
    role: "Full Stack Developer",
    company: "Online Clothing Cart",
    description:
      "Created a full eCommerce platform using React, Firebase, Stripe payments, and Redux state management.",
  },

  // --- Education ---
  {
    id: 10,
    year: "Jan 2017 – Jul 2017",
    type: "education",
    degree: "Software Engineering Bootcamp",
    institution: "Zero to Mastery / Code Academy",
    description:
      "Completed an intensive full-stack bootcamp focused on JavaScript, React, APIs, and cloud fundamentals.",
  },
  {
    id: 11,
    year: "May 2011 – Jun 2015",
    type: "education",
    degree: "Bachelor of Mechanical Engineering",
    institution: "Calicut University Institute of Engineering & Technology",
    description:
      "Graduated with a strong foundation in engineering principles, mathematics, and mechanical systems.",
  },
];

// Function to extract year from year string for sorting
function extractYear(yearString) {
  // Handle "Present" as current year + 1 to sort it first
  if (yearString.includes("Present")) {
    return new Date().getFullYear() + 1;
  }

  // Extract year from various formats
  const yearMatch = yearString.match(/\d{4}/);
  if (yearMatch) {
    return parseInt(yearMatch[0]);
  }

  return 0;
}

// Sort timeline data by year (most recent first)
const sortedTimelineData = [...timelineData].sort((a, b) => {
  const yearA = extractYear(a.year);
  const yearB = extractYear(b.year);
  return yearB - yearA;
});

// Function to get icon based on type
function getTimelineIcon(type) {
  switch (type) {
    case "work":
      return <MdWork className="text-white text-sm" />;
    case "education":
      return <MdSchool className="text-white text-sm" />;
    case "project":
      return <MdTrendingUp className="text-white text-sm" />;
    default:
      return <div className="size-2 rounded-full bg-white"></div>;
  }
}

export default function ResumePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-heading-light dark:text-heading-dark font-body antialiased min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="py-12 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                My Journey
              </h1>
              <p className="text-lg text-subtle-light dark:text-subtle-dark">
                A chronological overview of my career and education
              </p>
            </div>

            {/* Timeline */}
            <div className="relative w-full px-4">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-primary/20 dark:bg-primary/30"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {sortedTimelineData.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative grid grid-cols-2 gap-x-8 group"
                  >
                    {/* Left side content (even indices: 0, 2, 4...) */}
                    {index % 2 === 0 ? (
                      <div className="flex flex-col items-end text-right transition-all duration-300 group-hover:scale-105 group-hover:-translate-x-5">
                        <p className="pt-2 text-sm font-medium text-subtle-light dark:text-subtle-dark">
                          {item.year}
                        </p>
                        <div className="mt-2 flex flex-col gap-2 pb-8">
                          <p className="text-lg font-bold leading-normal text-heading-light dark:text-heading-dark">
                            {item.type === "education"
                              ? item.degree
                              : item.role}
                          </p>
                          <p className="text-heading-light dark:text-heading-dark text-base font-normal leading-normal">
                            {item.type === "education"
                              ? item.institution
                              : item.company}
                          </p>
                          <p className="text-subtle-light dark:text-subtle-dark text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    {/* Center icon */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 transform transition-all duration-300 group-hover:scale-125 z-10">
                      <div className="flex-shrink-0 size-6 rounded-full bg-gray-500 dark:bg-gray-800 flex items-center justify-center ring-8 ring-background-light dark:ring-background-dark">
                        {getTimelineIcon(item.type)}
                      </div>
                    </div>

                    {/* Right side content (odd indices: 1, 3, 5...) */}
                    {index % 2 === 1 ? (
                      <div className="flex flex-col items-start text-left transition-all duration-300 group-hover:scale-105 group-hover:translate-x-5">
                        <p className="pt-2 text-sm font-medium text-subtle-light dark:text-subtle-dark">
                          {item.year}
                        </p>
                        <div className="mt-2 flex flex-col gap-2 pb-8">
                          <p className="text-lg font-bold leading-normal text-heading-light dark:text-heading-dark">
                            {item.type === "education"
                              ? item.degree
                              : item.role}
                          </p>
                          <p className="text-heading-light dark:text-heading-dark text-base font-normal leading-normal">
                            {item.type === "education"
                              ? item.institution
                              : item.company}
                          </p>
                          <p className="text-subtle-light dark:text-subtle-dark text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Section */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/faizhameed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-surface-light dark:bg-surface-dark px-6 py-3 rounded-lg border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FaLinkedin className="text-2xl text-primary" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/faizhameed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-surface-light dark:bg-surface-dark px-6 py-3 rounded-lg border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FaGithub className="text-2xl text-primary" />
                  <span className="font-semibold">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
