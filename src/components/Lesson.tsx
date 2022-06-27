import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import pt_BR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

import _classnames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson = ({ title, slug, type, availableAt }: LessonProps) => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  let isAvailableAt = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: pt_BR,
    }
  );

  const isActiveLesson = routeSlug === slug;

  return (
    <Link to={`/plataforma/aula/${slug}`} className={"group"}>
      <span className={"text-gray-300 "}>{availableDateFormatted}</span>
      <div
        className={_classnames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          {
            "bg-green-500": isActiveLesson,
          }
        )}
      >
        <header className={"flex items-center justify-between"}>
          {isAvailableAt ? (
            <span
              className={_classnames(
                "text-sm font-medium flex items-center gap-2",
                {
                  "text-blue-500": !isActiveLesson,
                  "text-white": isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span
              className={
                "text-sm text-orange-500 font-medium flex items-center gap-2"
              }
            >
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={_classnames(
              "text-xs py-[0.125rem] px-2 text-white rounded border font-bold uppercase",
              {
                "border-green-300": !isActiveLesson,
                "border-white": isActiveLesson,
              }
            )}
          >
            {type === "live" ? "ao vivo" : "aula prática"}
          </span>
        </header>

        <strong
          className={_classnames("block mt-5", {
            "text-gray-500": !isActiveLesson,
            "text-white": isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};

export { Lesson };
