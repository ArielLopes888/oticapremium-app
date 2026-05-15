"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "+2000",
    label: "Clientes satisfeitos",
  },
  {
    number: "+9000",
    label: "Óculos vendidos",
  },
  {
    number: "2h",
    label: "Prazo de entrega",
  },
  {
    number: "5★",
    label: "Avaliação média",
  },
];

export default function Stats() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#f89808]/20 bg-[#f89808]/5 p-10 text-center transition hover:-translate-y-2 hover:border-[#f89808]/40 hover:bg-[#f89808]/10"
          >
            <h3 className="text-5xl font-bold text-[#f89808]">
              {item.number}
            </h3>

            <p className="mt-4 text-lg text-neutral-600">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}