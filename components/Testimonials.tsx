"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mariana Silva",
    text: "Atendimento impecável e meus óculos ficaram prontos no mesmo dia. Experiência incrível.",
  },
  {
    name: "Carlos Henrique",
    text: "As armações são muito diferenciadas. Qualidade acima do que eu esperava.",
  },
  {
    name: "Fernanda Souza",
    text: "A melhor ótica que já fui em Aracaju. Atendimento premium de verdade.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-28 text-black">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-[#f89808] rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium">
            Depoimentos
          </span>

          <h2 className="text-4xl font-bold text-[#f89808] md:text-6xl">
            Quem compra,
            <br />
            recomenda.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8"
            >
              <div className="mb-6 flex text-yellow-400">
                ★★★★★
              </div>

              <p className="text-lg leading-relaxed text-neutral-700">
                “{item.text}”
              </p>

              <div className="mt-8">
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <span className="text-sm text-neutral-500">
                  Cliente Ótica Premium
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}