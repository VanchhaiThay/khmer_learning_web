import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const subjectsGrades: Record<string, { title: string; grades: number[] }> = {
  khmer: { title: "Khmer", grades: Array.from({ length: 12 }, (_, i) => i + 1) },
  math: { title: "Math", grades: Array.from({ length: 12 }, (_, i) => i + 1) },
  english: { title: "English", grades: Array.from({ length: 12 }, (_, i) => i + 1) },
  history: { title: "History", grades: [4,5,6,7,8,9,10,11,12] },
  geography: { title: "Geography", grades: [4,5,6,7,8,9,10] },
  science: { title: "Science", grades: [1,2,3,4,5,6,7,8,9] },
  physics: { title: "Physics", grades: [7,8,9,10,11,12] },
  chemistry: { title: "Chemistry", grades: [8,9,10,11,12] },
  biology: { title: "Biology", grades: [6,7,8,9,10,11,12] },
  computer: { title: "Computer", grades: Array.from({ length: 12 }, (_, i) => i + 1) },
  civics: { title: "Civics", grades: [4,5,6,7,8,9,10,11,12] },
  other: { title: "Other", grades: Array.from({ length: 12 }, (_, i) => i + 1) },
};

export default function GradePage() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject") || "other"; 
  const subjectKey = subjectParam.toLowerCase();
  const subject = subjectsGrades[subjectKey] || subjectsGrades["other"];

  return (
    <section className="min-h-screen bg-linear-to-br from-[#0b1220] via-[#0e1628] to-[#0b1220] flex flex-col items-center py-24 px-4 md:px-8 text-white">
      <div className="w-full max-w-3xl text-center">
        <Link
          href="/class/current"
          className="flex items-center gap-2 text-indigo-400 mb-8 hover:underline"
        >
          <FaArrowLeft /> Back to Subjects
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-indigo-400">
          {subject.title} Grades
        </h1>
        <p className="text-gray-300 mb-12 text-lg md:text-xl">
          Select your grade to start learning!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {subject.grades.map((grade) => (
            <Link
              key={grade}
              href={`/class/${subjectKey}/${grade}`}
              className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700 hover:shadow-xl hover:border-indigo-500 transition-all text-center font-semibold text-white"
            >
              Grade {grade}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
