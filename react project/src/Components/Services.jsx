function Services() {
  return (
    <section
      aria-labelledby="coffee-hour-title"
      className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#342016] bg-cover bg-center text-[#fff8ef] sm:min-h-[340px]"
      id="location"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#21140e]/85 via-[#21140e]/55 to-[#21140e]/10"
      />
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e4b77e]">
            Take a moment for yourself
          </p>
          <h2
            className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl"
            id="coffee-hour-title"
          >
            Make It Your Coffee Hour
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/85">
            Slow down, sip something delicious, and enjoy the little moments.
            Your favorite table and a freshly brewed cup are waiting.
          </p>
          <a
            className="mt-6 inline-flex rounded-full bg-[#562e1c] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#74452d]"
            href="#contact"
          >
            Come say hello
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services