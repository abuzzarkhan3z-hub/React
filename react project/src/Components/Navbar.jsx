import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-10 bg-[#ead3b7] text-[#21160f]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-14 max-w-6xl items-center justify-between px-6 sm:px-8"
      >
        <a
          className="text-2xl font-extrabold tracking-tight"
          href="#home"
          aria-label="Coffee home"
        >
          Coffee
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="flex size-10 items-center justify-center rounded-md md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
          </span>
        </button>

        <div
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-1 bg-[#ead3b7] px-6 pb-4 pt-2 shadow-md md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none`}
          id="primary-navigation"
        >
          {links.map(({ label, href }, index) => (
            <a
              aria-current={index === 0 ? 'page' : undefined}
              className={`rounded px-2 py-2 text-sm font-semibold transition-colors hover:text-[#9b5b2b] md:px-0 md:py-1 ${
                index === 0
                  ? 'underline decoration-2 underline-offset-4'
                  : ''
              }`}
              href={href}
              key={label}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar