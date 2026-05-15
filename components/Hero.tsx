"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#340463] text-white pt-28 md:pt-32 lg:pt-36 pb-24 md:pb-32 lg:pb-40"
    >
      {/* Background gradient roxo premium */}
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 bg-gradient-to-br from-[#1a052e] via-[#2a0a4a] to-[#340463]"
      />

      {/* Glow roxo */}
      <motion.div
        style={{ y: yBg }}
        className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl"
      />

      {/* Glow laranja suave */}
      <motion.div
        style={{ y: yBg }}
        className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-3xl"
      />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-2 text-sm backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            Atendimento presencial em Aracaju
          </div>

          {/* Title */}
          <h1 className="max-w-3xl text-5xl font-black text-[#f89808] leading-[1] tracking-[-3px] md:text-7xl">
            Seus óculos
            <span className="block bg-gradient-to-r from-white to-[#f89808] bg-clip-text text-transparent">
              prontos em até 1h
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-200/80">
            Armações Exclusivas Com Garantia de Quebra
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://abrir.link/HChOM"
              target="_blank"
              className="group relative overflow-hidden rounded-2xl bg-[#f89808] px-8 py-4 text-center text-lg font-semibold text-black transition duration-300 hover:scale-[1.03]"
            >
              Fale Conosco
            </a>

            <a
              href="#gallery"
              className="rounded-2xl border border-purple-400/20 bg-purple-500/10 px-8 py-4 text-center text-lg backdrop-blur-xl transition duration-300 hover:border-purple-300/30 hover:bg-purple-500/20"
            >
              Ver galeria
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          {/* Glow da imagem */}
          <div className="absolute inset-0 rounded-[40px] bg-purple-500/20 blur-3xl" />

          {/* Image card */}
          <div className="relative overflow-hidden rounded-[40px] border border-purple-400/20 bg-purple-500/10 shadow-2xl">
            <img
              src="/img/hero.jpg"
              alt="Ótica Premium"
              className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[420px] md:h-[500px]"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-6 -left-6 rounded-3xl border border-purple-400/20 bg-[#2a0a4a]/60 p-6 backdrop-blur-2xl"
          >
            <h3 className="mt-1 text-3xl text-[#f89808] font-bold">
              A partir de R$ 79,90
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}