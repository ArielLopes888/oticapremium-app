export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-purple-400/20 bg-[#340463] px-6 py-20 text-white"
    >
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

      <div className="relative mx-auto grid max-w-7xl gap-16 md:grid-cols-3">

        {/* Marca */}
        <div>
          <h2 className="text-3xl font-bold text-[#f89808]">
            Ótica Premium
          </h2>

          <p className="mt-6 max-w-sm text-zinc-200/70">
            Elegância, qualidade e agilidade para transformar
            sua experiência com óculos.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Navegação
          </h3>

          <div className="flex flex-col gap-4 text-zinc-300/70">
            <a href="#benefits" className="transition hover:text-[#f89808]">
              Diferenciais
            </a>

            <a href="#" className="transition hover:text-[#f89808]">
              Produtos
            </a>

            <a href="#gallery" className="transition hover:text-[#f89808]">
              Instagram
            </a>

            <a href="#footer" className="transition hover:text-[#f89808]">
              Contato
            </a>
          </div>
        </div>

        {/* Contato */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Contato
          </h3>

          <div className="flex flex-col gap-4 text-zinc-300/70">
            <a
              href="https://abrir.link/KRAoQ"
              target="_blank"
              className="transition hover:text-[#f89808]"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/oticapremium_aju/"
              target="_blank"
              className="transition hover:text-[#f89808]"
            >
              Instagram
            </a>

            <p>Aracaju • Sergipe</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-purple-400/20 pt-8 text-sm text-zinc-400 md:flex-row">

        <p>
          © 2026 Ótica Premium. Todos os direitos reservados.
        </p>

        <a
          href="https://ariellisboalopes.netlify.app"
          target="_blank"
          className="transition hover:text-[#f89808]"
        >
          Feito por Ariel Lopes
        </a>
      </div>
    </footer>
  );
}