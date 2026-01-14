"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaBook, FaLaptop, FaFlask, FaGlobe, FaHistory, FaCalculator, FaMicroscope, FaUsers } from "react-icons/fa";

const subjects = [
  { title: "Khmer", lessons: 24, level: "Beginner – Advanced", icon: FaBook },
  { title: "Math", lessons: 30, level: "Grade 1 – 12", icon: FaCalculator },
  { title: "English", lessons: 28, level: "Beginner – Intermediate", icon: FaBook },
  { title: "History", lessons: 18, level: "Grade 4 – 12", icon: FaHistory },
  { title: "Geography", lessons: 16, level: "Grade 4 – 10", icon: FaGlobe },
  { title: "Science", lessons: 22, level: "Grade 1 – 9", icon: FaFlask },
  { title: "Physics", lessons: 20, level: "Grade 7 – 12", icon: FaFlask },
  { title: "Chemistry", lessons: 19, level: "Grade 8 – 12", icon: FaFlask },
  { title: "Biology", lessons: 21, level: "Grade 6 – 12", icon: FaMicroscope },
  { title: "Computer", lessons: 26, level: "Beginner – Intermediate", icon: FaLaptop },
  { title: "Civics", lessons: 14, level: "Grade 4 – 12", icon: FaUsers },
];

export default function ClassPage() {
  const [search, setSearch] = useState("");

  const filteredSubjects = subjects.filter((subj) =>
    subj.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-linear-to-br from-[#0b1220] via-[#0e1628] to-[#0b1220] flex flex-col items-center justify-start py-24 px-4 md:px-8 text-white">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-400 tracking-tight">
          Explore All Classes
        </h1>
        <p className="text-gray-300 mb-12 text-lg md:text-xl">
          Discover subjects, track lessons, and start learning today!
        </p>

        {/* Search */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-12 justify-center">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search classes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSubjects.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center text-lg">
              No classes found.
            </p>
          ) : (
            filteredSubjects.map((subj) => {
              const Icon = subj.icon;
              return (
                  <Link
                    key={subj.title}
                    href={`/class/grade?subject=${subj.title.toLowerCase()}`}
                    className="group bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-700 hover:shadow-xl hover:border-indigo-500 transition-all flex flex-col justify-between"
                  >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="text-indigo-400 text-3xl" />
                    <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {subj.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-2">{subj.level}</p>
                  <p className="text-gray-400 text-sm">📘 Lessons: {subj.lessons}</p>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}