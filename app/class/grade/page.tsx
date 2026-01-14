import { Suspense } from "react";
import GradeClient from "../../class/grade/GradeClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-white">Loading...</div>}>
      <GradeClient />
    </Suspense>
  );
}
