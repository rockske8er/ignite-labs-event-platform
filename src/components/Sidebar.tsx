import { useGetLessonsQuery } from "../graphql/types";

import { Lesson } from "./Lesson";

const Sidebar = () => {
  const { data } = useGetLessonsQuery();
  return (
    <aside className={"w-[348px] p-6 bg-gray-700 border-l border-gray-600 "}>
      <span
        className={
          "text-2xl pb-6 mb-6 font-bold border-b border-gray-500 block "
        }
      >
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  );
};

export { Sidebar };
