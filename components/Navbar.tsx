"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:py-4">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="img/logopng.png"
            alt="Ótica Premium"
            className="h-16 md:h-20 lg:h-24 w-auto object-contain"
          />

        </a>

        {/* Desktop Menu */}
        <nav className="hidden gap-8 md:flex">
          <a href="#benefits" className="text-sm text-zinc-300 transition hover:text-white">
            Diferenciais
          </a>

          <a href="#gallery" className="text-sm text-zinc-300 transition hover:text-white">
            Instagram
          </a>

          <a href="#footer" className="text-sm text-zinc-300 transition hover:text-white">
            Contato
          </a>
        </nav>

        {/* CTA Desktop */}
        <a
          href="https://wa.me/5579999380945"
          target="_blank"
          className="hidden md:inline-flex rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
        >
          WhatsApp
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6 px-6 py-6">

              <a href="#benefits" onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white">
                Diferenciais
              </a>

              <a href="#gallery" onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white">
                Instagram
              </a>

              <a href="#footer" onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white">
                Contato
              </a>

              <a
                href="https://wa.me/5579999380945"
                target="_blank"
                className="mt-2 rounded-2xl bg-white px-5 py-3 text-center text-sm font-semibold text-black"
              >
                WhatsApp
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}