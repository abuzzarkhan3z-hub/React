function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-[#302018] bg-cover bg-center text-white md:min-h-[min(68vw,620px)]"
      id="home"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10"
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 md:py-28">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#f0c18e] sm:text-sm">
            Freshly brewed, made for you
          </p>
          <h1
            className="max-w-lg text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
            id="hero-title"
          >
            Savor the Perfect Brew!
          </h1>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
            Start your day with the rich aroma of freshly roasted coffee.
            Discover your new favorite cup, crafted with care in every pour.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-[#f4e8d9] px-6 py-3 text-xs font-bold uppercase tracking-wide text-[#2b1a10] transition-colors hover:bg-white"
              href="#menu"
            >
              View menu
            </a>
            <a
              className="rounded-full border border-[#c88743] bg-[#a96125] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#8d4d1c]"
              href="#story"
            >
              Our story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero