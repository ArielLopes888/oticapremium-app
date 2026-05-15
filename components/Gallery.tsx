"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function Gallery() {
  return (
    <section
    id = "gallery"
    className="relative overflow-hidden bg-[#340463] px-6 py-28 text-white">

      {/* Background gradient (igual Hero) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a052e] via-[#2a0a4a] to-[#340463]" />

      {/* Glow roxo */}
      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl" />

      {/* Glow laranja suave (consistência com Hero) */}
      <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-3xl" />

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

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* <span className="mb-4 inline-block rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm backdrop-blur-xl">
            Instagram
          </span> */}

          <h2 className="text-4xl font-bold text-[#f89808] md:text-6xl">
            Acompanhe nosso
            <br />
            estilo no Instagram.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-200/70">
            Novidades, promoções, tendências e clientes reais
            usando Ótica Premium.
          </p>
        </motion.div>

        {/* Feed */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] border border-purple-400/20 bg-purple-500/10 p-4 backdrop-blur-xl"
        >
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            strategy="lazyOnload"
          />

          <div
            className="elfsight-app-762ed7a7-31c4-44b2-84d3-6de1646c0ee3"
            data-elfsight-app-lazy
          ></div>
        </motion.div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://www.instagram.com/oticapremium_aju/"
            target="_blank"
            className="inline-flex rounded-2xl bg-[#f89808] px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
          >
            Seguir no Instagram
          </a>
        </div>

      </div>
    </section>
  );
}