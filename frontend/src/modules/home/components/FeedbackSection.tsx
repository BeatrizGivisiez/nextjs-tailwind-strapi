"use client";

import { Quotes } from "phosphor-react";

const testimonials = [
  {
    text: "Muito obrigado por me ter enviado o convite para a peça. Adorei, emocionei-me... deve ser muito gratificante para a Ana ver o produto final de muitas horas de trabalho. É uma verdadeira “Rainha”. Parabéns!",
    author: "Maria Silva",
  },
  {
    text: "Foi uma experiência incrível assistir à peça. Senti-me completamente envolvido na história e emocionado com cada detalhe. Parabéns pelo excelente trabalho!",
    author: "Carlos Mendes",
  },
  {
    text: "A dedicação e o talento de todos os envolvidos são evidentes. Foi um privilégio poder assistir a algo tão bem executado. Obrigado por essa experiência!",
    author: "Ana Costa",
  },
  {
    text: "Fiquei muito impressionado com a qualidade da apresentação. Foi uma noite memorável cheia de emoção e talento. Continuem com esse trabalho maravilhoso!",
    author: "João Pereira",
  },
];

export const FeedbackSection = () => {
  return (
    <section className="bg-white pb-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-primary text-6xl font-extrabold mb-12">
          O QUE DIZEM DE NÓS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative border border-primary rounded-lg p-6 pt-10 text-sm flex flex-col items-center h-full"
            >
              <div className="absolute -top-5 bg-primary rounded-full p-2 flex items-center justify-center">
                <Quotes size={30} color="#fcfcfc" weight="fill" />
              </div>
              <p className="mb-4 text-center flex-grow">{testimonial.text}</p>
              <span className="font-bold text-sm text-primary mt-auto">
                {testimonial.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
