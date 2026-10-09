const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our story', href: '#story' },
  { label: 'Visit us', href: '#location' },
]

function Footer() {
  return (
    <footer className="bg-[#321d13] text-[#f4ece2]" id="contact">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-8 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-12 md:py-14">
        <div>
          <a
            aria-label="Coffee home"
            className="text-2xl font-extrabold tracking-tight"
            href="#home"
          >
            Coffee<span className="text-[#c88743]">.</span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-6 text-[#ead8c6]/75">
            Good coffee, warm company, and a little pause in the middle of your
            day. We look forward to welcoming you.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8a76e]">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  className="text-sm text-[#ead8c6]/80 transition-colors hover:text-white"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8a76e]">
            Your next coffee
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#ead8c6]/75">
            Stop by for your favorite cup or discover something new from our
            menu.
          </p>
          <a
            className="mt-5 inline-flex rounded-full bg-[#c88743] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#2b1a10] transition-colors hover:bg-[#e0a85f]"
            href="#menu"
          >
            Explore the menu
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-xs text-[#ead8c6]/60 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Coffee. Made with care.</p>
          <a className="transition-colors hover:text-white" href="#home">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer