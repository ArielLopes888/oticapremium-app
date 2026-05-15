const brands = [
  "/img/Kodak.png",
  "/img/hoya.png",
  "/img/haytek.png",
  "/img/zeiss.png",
  "/img/varilux.png",
  "/img/transitions.png",
  "/img/crizal.png",
];

export default function Brands() {
  return (
    <section className="bg-neutral-100 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-8 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium">
            Marcas parceiras
          </span>

          <h2 className="text-4xl text-[#f89808] font-bold text-black md:text-6xl">
            Trabalhamos com
            <br />
            as melhores lentes.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-36 items-center justify-center rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2"
            >
              <img
                src={brand}
                alt="Marca parceira"
                className="max-h-16 w-auto object-contain grayscale transition hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}