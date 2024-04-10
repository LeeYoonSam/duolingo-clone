import { getCourses, getUserProgress } from "@/db/queries";

import { List } from "./list";

const Coursespage = async () => {
  // const courses = await getCourses();
  // const userProgress = await getUserProgress();


  // Promise 로 폭포수 방식으로 가져오는 방법
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [
    courses,
    userProgress
  ] = await Promise.all([
    coursesData,
    userProgressData,
  ]);


  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">
        Langauge Courses
      </h1>
      <List
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
};

export default Coursespage;