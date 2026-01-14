"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FaSearch, FaLanguage, FaCalculator, FaBook, FaLandmark, FaGlobeAsia, FaFlask, FaAtom, FaVial, FaDna, FaLaptopCode, FaBalanceScale, FaEllipsisH, FaCopy } from "react-icons/fa";

const categories = [
  { title: "Khmer", slug: "khmer", icon: FaLanguage, description: "Learn Khmer reading, writing, and speaking skills.", lessons: 24, level: "Beginner – Advanced" },
  { title: "Math", slug: "math", icon: FaCalculator, description: "Numbers, algebra, geometry, and problem solving.", lessons: 30, level: "Grade 1 – 12" },
  { title: "English", slug: "english", icon: FaBook, description: "Improve grammar, vocabulary, and communication.", lessons: 28, level: "Beginner – Intermediate" },
  { title: "History", slug: "history", icon: FaLandmark, description: "World and Cambodian historical events.", lessons: 18, level: "Grade 4 – 12" },
  { title: "Geography", slug: "geography", icon: FaGlobeAsia, description: "Maps, countries, environment, and resources.", lessons: 16, level: "Grade 4 – 10" },
  { title: "Science", slug: "science", icon: FaFlask, description: "Basic science concepts and experiments.", lessons: 22, level: "Grade 1 – 9" },
  { title: "Physics", slug: "physics", icon: FaAtom, description: "Motion, force, energy, and electricity.", lessons: 20, level: "Grade 7 – 12" },
  { title: "Chemistry", slug: "chemistry", icon: FaVial, description: "Atoms, reactions, and chemical equations.", lessons: 19, level: "Grade 8 – 12" },
  { title: "Biology", slug: "biology", icon: FaDna, description: "Life science, plants, animals, and humans.", lessons: 21, level: "Grade 6 – 12" },
  { title: "Computer", slug: "computer", icon: FaLaptopCode, description: "Basic IT, programming, and digital skills.", lessons: 26, level: "Beginner – Intermediate" },
  { title: "Civics", slug: "civics", icon: FaBalanceScale, description: "Citizenship, law, and social responsibility.", lessons: 14, level: "Grade 4 – 12" },
];

const newsEvents = [
  { title: "National Math Olympiad 2026", date: "Jan 20, 2026", description: "Registration open for students across Phnom Penh." },
  { title: "Khmer Language Curriculum Update", date: "Feb 1, 2026", description: "New textbooks released for Grade 6 students." },
  { title: "Science Fair Winners Announced", date: "Mar 5, 2026", description: "Top students recognized in Phnom Penh Science Fair." },
  { title: "Coding Workshops for Students", date: "Apr 10, 2026", description: "IT workshops held for high school students." },
];

export default function Categories() {
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
  const [search, setSearch] = useState("");
  const [levelFilter] = useState("All");
   const [copied, setCopied] = useState(false);

  // Filtered categories based on search and level
  const filteredCategories = useMemo(() => {
    return categories.filter((cat) => {
      const matchSearch = cat.title.toLowerCase().includes(search.toLowerCase());
      const matchLevel = levelFilter === "All" || cat.level.includes(levelFilter);
      return matchSearch && matchLevel;
    });
  }, [search, levelFilter]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Show "Copied!" for 1.5 seconds
    });
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#0b1220] via-[#0e1628] to-[#0b1220] py-24 px-4 md:px-8">
      {/* LEFT CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-sm font-medium shadow-sm">
            🚀 What’s new
            <span className="text-gray-200 ml-2 font-normal text-sm">Just launched v1.0</span>
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
            Supercharge <br />
            <span className="text-indigo-400 bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              your learning
            </span>{" "}
            <br />
            with Khmer Learning
          </h1>

          <p className="text-gray-300 max-w-xl mb-8 text-lg">
            Learn Khmer, English, Math, Science, and more with a modern platform
            designed for students of all levels. Simple, fast, and effective.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/class/current"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Learning
            </Link>

            <Link
              href="/about"
              className="text-white border border-white/20 hover:border-white/40 px-6 py-3 rounded-xl transition-all hover:bg-white/10"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* RIGHT CODE CARD */}
        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-500/30 blur-3xl rounded-3xl" />
          <div className="relative bg-[#0f172a] rounded-3xl p-6 shadow-2xl border border-white/10 overflow-hidden">
            {/* TAB HEADERS */}
            <div className="flex items-center gap-3 mb-4 text-sm text-gray-400 cursor-pointer">
              <span
                className={`px-3 py-1 rounded-full ${activeTab === "code" ? "bg-indigo-600 text-white" : "bg-white/10"}`}
                onClick={() => setActiveTab("code")}
              >
                LessonPreview.jsx
              </span>
              <span
                className={`px-3 py-1 rounded-full ${activeTab === "preview" ? "bg-indigo-600 text-white" : "bg-white/10"}`}
                onClick={() => setActiveTab("preview")}
              >
                KhmerLearning.tsx
              </span>
            </div>

            {/* TAB CONTENT */}
            {activeTab === "code" ? (
              <div className="relative">
                <pre className="text-sm leading-relaxed text-gray-200 overflow-x-auto rounded-lg bg-[#1c273b] p-4">
                  <code>
                    <span className="text-indigo-400">import</span> &#123; Knowledge &#125; <span className="text-indigo-400">from</span> Khmer_Learning;
                    <br />
                    <span className="text-indigo-400">export default</span> function Lesson() &#123;
                    <br />
                    &nbsp;&nbsp;<span className="text-indigo-400">const</span> [progress, setProgress] = useState(0);
                    <br />
                    &nbsp;&nbsp;<span className="text-indigo-400">return</span> (
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;This web you can learn for free.&lt;/h1&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Progress: &#123;progress&#125;%&lt;/p&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                    <br />
                    &nbsp;&nbsp;);
                    <br />
                    &#125;
                  </code>
                </pre>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `import { Knowledge } from Khmer_Learning;\nexport default function Lesson() { ... }`
                    )
                  }
                  className="absolute top-4 right-4 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-lg flex items-center gap-1 transition-all"
                >
                  <FaCopy />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg p-6 text-gray-200">
                <h1 className="text-xl font-bold mb-2">This web you can learn for free.</h1>
                <p>Progress: 100%</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* SEARCH & FILTER */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-12 gap-4">
        {/* Search Input with Icon */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full p-4 pl-12 rounded-2xl border border-gray-700 bg-gray-900 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* React Search Icon */}
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      {/* CATEGORY GRID */}
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-100 mt-12">
        Explore Our Courses
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredCategories.map((item) => {
          const Icon = item.icon;
          return (
              <Link
                key={item.slug}
                href="/class/current"
                className="group bg-gray-900 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer flex flex-col"
              >
              <div className="flex justify-center mb-4">
                <Icon className="text-4xl text-indigo-400 group-hover:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h4 className="text-xl font-semibold text-center text-gray-100 mb-2">{item.title}</h4>

              <p className="text-sm text-gray-400 text-center mb-4">{item.description}</p>

              <div className="mt-auto text-sm text-gray-500 space-y-1">
                <p>📘 Lessons: {item.lessons}</p>
                <p>🎯 Level: {item.level}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* NEWS & EVENTS */}
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-100 mt-20">
        News & Events in Cambodia Education
      </h3>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsEvents.map((news, idx) => (
          <div key={idx} className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
            <h4 className="text-lg font-semibold text-yellow-400 mb-2">{news.title}</h4>
            <p className="text-gray-400 text-sm mb-2">{news.date}</p>
            <p className="text-gray-300 text-sm">{news.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
