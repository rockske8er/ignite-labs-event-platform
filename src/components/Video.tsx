import { gql, useQuery } from "@apollo/client";
import "@vime/core/themes/default.css";
import { Player, Youtube, DefaultUi } from "@vime/react";

import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import { useGetLessonBySlugQuery } from "../graphql/types";

interface VideoProps {
  lessonSlug: string;
}

const Video = ({ lessonSlug }: VideoProps) => {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className={"flex-1"}>
        <p>Carregando</p>
      </div>
    );
  }
  return (
    <div className={"flex-1"}>
      <div className="bg-gray-900 flex justify-center px-6">
        <div className="h-full w-full max-w-[1040px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className={"mx-auto p-8 max-w-[1040px]"}>
        <div className={"flex items-start gap-16"}>
          <div className={"flex-1 sm:flex-col "}>
            <h1 className={"text-2xl font-bold "}>{data?.lesson.title}</h1>
            <p className={"mt-4 text-gray-200 leading-relaxed"}>
              {data?.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className={"flex items-center gap-4 mt-6 "}>
                <img
                  src={data?.lesson.teacher.avatarURL}
                  alt={data?.lesson.teacher.name}
                  className={"h-16 w-16 rounded-full border-2 bg-blue-500"}
                />

                <div className={"leading-relaxed"}>
                  <strong className={"text-2xl font-bold block"}>
                    {data?.lesson.teacher.name}
                  </strong>
                  <span className={"text-sm text-gray-200 block"}>
                    {data?.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className={"flex flex-col gap-4 "}>
            <a
              href="#"
              className={
                "p-4 text-sm bg-green-500 rounded flex items-center gap-2 font-bold justify-center uppercase hover:bg-green-700"
              }
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a
              href="#"
              className={
                "p-4 text-sm  text-blue-500 border-[1px] border-blue-500 rounded flex items-center gap-2 font-bold justify-center uppercase"
              }
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className={"grid grid-cols-2 gap-8 mt-20"}>
          <a
            className={
              "bg-gray-700 overflow-hidden rounded flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
            }
            href=""
          >
            <div className={"h-full flex items-center bg-green-700 p-6"}>
              <FileArrowDown size={40} />
            </div>
            <div className={"py-6 leading-relaxed"}>
              <strong className={"text-2xl"}>Material complementar</strong>
              <p className={"text-sm text-gray-200 mt-2"}>
                Acesse o material complementar para acelerar seu desenvolvimento
              </p>
            </div>

            <div className={"h-full flex items-center p-4 "}>
              <CaretRight size={24} />
            </div>
          </a>

          <a
            className={
              "bg-gray-700 overflow-hidden rounded flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
            }
            href=""
          >
            <div className={"h-full flex items-center bg-green-700 p-6"}>
              <FileArrowDown size={40} />
            </div>
            <div className={"py-6 leading-relaxed"}>
              <strong className={"text-2xl"}>Walpapers exclusivos</strong>
              <p className={"text-sm text-gray-200 mt-2"}>
                Acesse o material complementar para acelerar seu desenvolvimento
              </p>
            </div>

            <div className={"h-full flex items-center p-4 "}>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Video };
