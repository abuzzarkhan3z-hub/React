const testimonials = [
  {
    name: 'Olivia R.',
    title: 'A lovely daily ritual',
    quote:
      'The coffee is always wonderful, and the team makes every visit feel like a warm welcome.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    name: 'Matthew C.',
    title: 'My new favorite café',
    quote:
      'Thoughtful service, a cozy atmosphere, and the best flat white in the neighborhood.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    name: 'Sophia D.',
    title: 'Coffee made with care',
    quote:
      'You can taste the care in every cup. I always leave with a smile and a coffee for later.',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&h=120&q=80',
  },
]

function Testi() {
  return (
    <section
      aria-label="What our customers say"
      className="bg-[#f4ece2] px-6 py-8 text-[#25170f] sm:px-8 sm:py-10"
    >
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-0">
        {testimonials.map(({ name, title, quote, image }, index) => (
          <figure
            className={`flex items-center gap-4 md:px-6 ${
              index > 0 ? 'md:border-l md:border-[#d5c2aa]' : 'md:pl-0'
            }`}
            key={name}
          >
            <img
              alt=""
              className="size-14 shrink-0 rounded-full object-cover"
              height="56"
              loading="lazy"
              src={image}
              width="56"
            />
            <figcaption>
              <p className="text-sm font-bold">{name}</p>
              <p className="mt-0.5 text-xs font-semibold text-[#80522f]">{title}</p>
              <blockquote className="mt-2 text-xs leading-5 text-[#78685a]">
                “{quote}”
              </blockquote>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Testi