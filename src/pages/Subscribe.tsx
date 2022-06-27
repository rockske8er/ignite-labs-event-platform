import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/types";
import code from "./../assets/desktop.png";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const [createSubsciber, { loading }] = useCreateSubscriberMutation();

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();

    await createSubsciber({
      variables: {
        name,
        email,
      },
    });

    navigate("/plataforma");
  };

  return (
    <div
      className={
        "min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center"
      }
    >
      <div
        className={
          "w-full flex items-center justify-between mt-20 mx-auto max-w-[1100px]"
        }
      >
        <div className={"max-w-[640px]"}>
          <Logo />
          <h1 className={"mt-8 text-[2.5rem] leading-tight"}>
            Construa uma{" "}
            <strong className={"text-blue-500"}> aplicação completa</strong>, do
            zero, com
            <strong className={"text-blue-500"}> React</strong>
          </h1>
          <p className={"mt-4 text-gray-200 leading-relaxed"}>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className={"p-8 bg-gray-700 border border-gray-500 rounded"}>
          <strong className={"mb-6 block text-2xl"}>
            Inscreva-se Gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className={"flex flex-col gap-2 w-full"}
          >
            <input
              className={"bg-gray-900 rounded px-5 h-14"}
              type="text"
              placeholder="Digite seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={"bg-gray-900 rounded px-5 h-14"}
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setemail(e.target.value)}
            />

            <button
              type={"submit"}
              disabled={loading}
              className={
                "mt-4 bg-green-500 py-4 rounded uppercase font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              }
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={code} alt="" className={"mt-10"} />
    </div>
  );
};

export { Subscribe };
