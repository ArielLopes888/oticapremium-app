"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FinalCTA() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappLink = `https://wa.me/5579999380945?text=${encodeURIComponent(
    `Olá! Me chamo ${name}.\n\nTenho interesse em: ${message}`
  )}`;

  return (
    <section className="relative overflow-hidden bg-[#340463] px-6 py-32 text-white">

      {/* Background gradient igual Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a052e] via-[#2a0a4a] to-[#340463]" />

      {/* Glow roxo */}
      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl" />

      {/* Glow laranja (identidade da marca) */}
      <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-[#f89808]/10 blur-3xl" />

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

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl rounded-[40px] border border-purple-400/20 bg-purple-500/10 p-10 backdrop-blur-xl md:p-20"
      >
        <div className="mx-auto max-w-2xl text-center">

          <span className="mb-6 inline-block rounded-full border border-[#f89808]/20 bg-[#f89808]/10 px-4 py-2 text-sm text-[#f89808]">
            Atendimento Premium
          </span>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Solicite seu
            <br />
            atendimento.
          </h2>

          <p className="mx-auto mt-8 text-lg leading-relaxed text-zinc-200/70">
            Preencha rapidamente e continue o atendimento direto pelo WhatsApp.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-14 grid max-w-2xl gap-6">

          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-16 rounded-2xl border border-purple-400/20 bg-white/5 px-6 text-lg text-white outline-none placeholder:text-zinc-400 focus:border-[#f89808]/40"
          />

          <textarea
            placeholder="O que você procura?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[180px] rounded-2xl border border-purple-400/20 bg-white/5 p-6 text-lg text-white outline-none placeholder:text-zinc-400 focus:border-[#f89808]/40"
          />

          <a
            href={whatsappLink}
            target="_blank"
            className="flex h-16 items-center justify-center rounded-2xl bg-[#f89808] text-lg font-semibold text-black transition hover:scale-[1.02] hover:brightness-110"
          >
            Continuar no WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}