const coffeeStyles = [
  {
    name: 'Espresso',
    description: 'Bold, rich, and brewed fresh for a perfect start.',
    image:
      'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=160&q=80',
  },
  {
    name: 'Latte',
    description: 'Smooth espresso balanced with silky steamed milk.',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=160&q=80',
  },
  {
    name: 'Cappuccino',
    description: 'A classic blend finished with a soft layer of foam.',
    image:
      'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=160&q=80',
  },
  {
    name: 'Cold Brew',
    description: 'Slow-steeped, mellow, and wonderfully refreshing.',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=160&q=80',
  },
]

const coffeeGallery = [
  {
    name: 'Caramel Latte',
    detail: 'Espresso, milk & caramel',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=85',
  },
  {
    name: 'Vanilla Flat White',
    detail: 'Double shot & silky milk',
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=85',
  },
  {
    name: 'Classic Cappuccino',
    detail: 'Rich espresso & foam',
    image:
      'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=85',
  },
  {
    name: 'Mocha',
    detail: 'Chocolate, espresso & milk',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=85',
  },
]

function About() {
  return (
    <div className="bg-[#f4ece2] text-[#25170f]">
      <section aria-labelledby="coffee-favorites" className="px-6 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2
            className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl"
            id="coffee-favorites"
          >
            Coffee Favorites
          </h2>
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {coffeeStyles.map(({ name, description, image }, index) => (
              <article
                className={`px-4 text-center lg:px-7 ${
                  index > 0 ? 'lg:border-l lg:border-[#d5c2aa]' : ''
                }`}
                key={name}
              >
                <img
                  alt=""
                  className="mx-auto size-16 rounded-full border-4 border-[#c58a48] object-cover p-0.5 shadow-sm"
                  height="64"
                  src={image}
                  width="64"
                />
                <h3 className="mt-3 text-lg font-bold">{name}</h3>
                <p className="mx-auto mt-2 max-w-56 text-xs leading-5 text-[#78685a]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="why-choose-us"
        className="grid md:min-h-[310px] md:grid-cols-2"
        id="story"
      >
        <div className="grid bg-[#422517] text-[#fff8ef] sm:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-8 py-12 sm:px-10 lg:px-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8a76e]">
              A little more than coffee
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight" id="why-choose-us">
              Why Choose Us?
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#f1dfce]/80">
              We source thoughtful ingredients, roast in small batches, and make
              every cup with care. Good coffee is even better when shared.
            </p>
            <a
              className="mt-6 rounded-full bg-[#f4ece2] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#382113] transition-colors hover:bg-white"
              href="#menu"
            >
              Explore our menu
            </a>
          </div>
          <img
            alt="Freshly made latte with beautiful milk art"
            className="h-56 w-full object-cover sm:h-full"
            height="620"
            loading="lazy"
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
            width="700"
          />
        </div>

        <div className="flex flex-col items-center justify-center bg-[#e8d2b9] px-8 py-12 text-center sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#85562f]">
            Your morning, made better
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            20% off before 10 am
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#675447]">
            Start your day with your favorite freshly brewed coffee. Stop by in
            the morning and enjoy a little something on us.
          </p>
          <a
            className="mt-6 rounded-full bg-[#48291a] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#68402a]"
            href="#location"
          >
            Find your café
          </a>
        </div>
      </section>

      <section
        aria-labelledby="morning-happy"
        className="px-6 py-12 sm:px-8 sm:py-16"
        id="menu"
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.6fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b6738]">
              Made fresh every day
            </p>
            <h2
              className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl"
              id="morning-happy"
            >
              Morning Happy
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#78685a]">
              Find your new favorite in our collection of handcrafted coffee.
              From a smooth latte to a bold espresso, there is a good morning
              waiting in every cup.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full border border-[#b68d69] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#422517] transition-colors hover:bg-white"
                href="#location"
              >
                Visit our café
              </a>
              <a
                className="rounded-full bg-[#422517] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#68402a]"
                href="#contact"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {coffeeGallery.map(({ name, detail, image }) => (
              <article key={name}>
                <img
                  alt={name}
                  className="aspect-square w-full rounded-xl object-cover shadow-sm"
                  height="300"
                  loading="lazy"
                  src={image}
                  width="300"
                />
                <h3 className="mt-3 text-sm font-bold">{name}</h3>
                <p className="mt-1 text-xs text-[#78685a]">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About