"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const subjectsGrades: Record<string, { title: string; grades: number[] }> = {
  khmer: { title: "Khmer", grades: Array.from({ length: 12 }, (_, i) => i + 1) },
  math: { title: "Math", grades: Array.from({ length: 12 }, (_, i) => i + 1) },
  english: { title: "English", grades: Array.from({ length: 12 }, (_, i) => i + 1) },
  other: { title: "Other", grades: Array.from({ length: 12 }, (_, i) => i + 1) },
};

export default function GradeClient() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject") ?? "other";
  const subjectKey = subjectParam.toLowerCase();
  const subject = subjectsGrades[subjectKey] || subjectsGrades.other;

  return (
    <section className="min-h-screen flex flex-col items-center py-24 px-4 bg-gray-900 text-white">
      <div className="w-full max-w-3xl text-center">
        <Link
          href="/class/current"
          className="flex items-center gap-2 text-indigo-400 mb-8 hover:underline"
        >
          <FaArrowLeft /> Back to Subjects
        </Link>

        <h1 className="text-4xl font-bold mb-8">
          {subject.title} Grades
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {subject.grades.map((grade) => (
            <Link
              key={grade}
              href={`/class/${subjectKey}/grade-${grade}`}
              className="bg-gray-800 p-6 rounded-xl hover:border-indigo-500 border border-gray-700"
            >
              Grade {grade}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
