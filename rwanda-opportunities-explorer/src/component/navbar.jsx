function Navbar({ savedCount, onAddClick }) {
  return (
    <nav className="bg-blue-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo and application name */}
        <a href="/" className="text-xl font-bold tracking-wide">
          <span className="text-blue-300">Rwanda</span> Opportunities
        </a>

        {/* Navigation links */}
        <div className="hidden items-center gap-6 text-sm md:flex">
          <a href="#home" className="hover:text-blue-300">
            Home
          </a>

          <a href="#opportunities" className="hover:text-blue-300">
            Opportunities
          </a>

          <a href="#about" className="hover:text-blue-300">
            About
          </a>
        </div>

        {/* Saved count and add button */}
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-blue-900 px-3 py-2 text-sm">
            Saved: {savedCount}
          </span>

          <button
            type="button"
            onClick={onAddClick}
            className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-blue-950 hover:bg-blue-100"
          >
            + Add
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;