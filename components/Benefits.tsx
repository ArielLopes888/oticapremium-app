"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  ShieldCheck,
  Sparkles,
  Glasses,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Óculos em até 1h",
    description:
      "Agilidade premium para você sair enxergando no mesmo dia.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de quebra",
    description:
      "Mais segurança e tranquilidade para o seu investimento.",
  },
  {
    icon: Sparkles,
    title: "Atendimento sofisticado",
    description:
      "Experiência personalizada com foco em conforto e estilo.",
  },
  {
    icon: Glasses,
    title: "Armações exclusivas",
    description:
      "Modelos modernos, elegantes e alinhados às tendências.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#340463] px-6 py-32 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-orange-400/10 blur-3xl" />

      {/* Soft radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#8b5cf6_0%,transparent_60%)] opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-[#f89808] backdrop-blur-xl">
            ✦ Nosso diferencial
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#f89808] tracking-[-2px]">
            Uma experiência
            <span className="block bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              acima do comum
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            Mais do que vender óculos, entregamos estilo,
            tecnologia e atendimento premium.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-purple-400/20 bg-[#2a0a4a]/60 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-purple-300/30 hover:bg-purple-500/20"
              >
                {/* Glow Hover */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-zinc-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}