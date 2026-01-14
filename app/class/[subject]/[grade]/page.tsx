"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const subjectData: Record<string, { title: string; lessons: number }> = {
  khmer: { title: "Khmer", lessons: 10 },
  math: { title: "Math", lessons: 12 },
  english: { title: "English", lessons: 10 },
  history: { title: "History", lessons: 8 },
  geography: { title: "Geography", lessons: 8 },
  science: { title: "Science", lessons: 9 },
  physics: { title: "Physics", lessons: 7 },
  chemistry: { title: "Chemistry", lessons: 7 },
  biology: { title: "Biology", lessons: 8 },
  computer: { title: "Computer", lessons: 10 },
  civics: { title: "Civics", lessons: 6 },
  other: { title: "Other", lessons: 5 },
};

export default function ClassPage() {
  const params = useParams();
  const { subject, grade } = params;

  const subjKey = typeof subject === "string" ? subject.toLowerCase() : "other";
  const subj = subjectData[subjKey] || subjectData.other;

  const [progress, setProgress] = useState(0);

  return (
    <div className="max-w-5xl mx-auto p-6 mt-24">
      {/* Back button with subject query */}
      <Link
        href={`/class/grade?subject=${subjKey}`}
        className="inline-flex items-center gap-2 text-red-600 font-semibold mb-6 hover:text-red-800"
      >
        <FaArrowLeft /> Back to Grades
      </Link>

      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        {subj.title} - Grade {grade}
      </h1>
      <p className="text-gray-600 mb-6">
        Learn {subj.title}. Start from basic lessons and progress to advanced topics.
      </p>

      {/* Progress bar */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Progress</label>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-indigo-500 h-4 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gray-500 mt-1">{progress}% completed</p>
        <button
          className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          onClick={() => setProgress(Math.min(progress + 10, 100))}
        >
          Increase Progress
        </button>
      </div>

      {/* Lessons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: subj.lessons }).map((_, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl p-4 shadow hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold text-gray-800 mb-2">
              Lesson {idx + 1}
            </h3>
            <p className="text-gray-600 mb-2">
              Introduction to {subj.title} content.
            </p>
            <button className="text-indigo-500 font-semibold hover:underline">
              Start Lesson →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
