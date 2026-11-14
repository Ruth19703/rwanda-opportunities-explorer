import Button from "./Button";

function OpportunityFilters({
  search,
  setSearch,
  category,
  setCategory,
  sortBy,
  setSortBy,
  availableOnly,
  setAvailableOnly,
  savedOnly,
  setSavedOnly,
  onReset,
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-slate-900">
        Find opportunities
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-medium"
          >
            Search by title or city
          </label>

          <input
            id="search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="e.g. Kigali, marketing..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-medium"
          >
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="All">All categories</option>
            <option value="Workshops">Workshops</option>
            <option value="Career Events">Career Events</option>
            <option value="Community Activities">Community Activities</option>
            <option value="Short Courses">Short Courses</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="sort"
            className="mb-2 block text-sm font-medium"
          >
            Sort opportunities
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="date">Earliest date</option>
            <option value="title">Title A–Z</option>
            <option value="seats">Most available places</option>
          </select>
        </div>

        <div className="flex items-end">
          <Button variant="secondary" onClick={onReset}>
            Reset filters
          </Button>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={availableOnly}
            onChange={(event) => setAvailableOnly(event.target.checked)}
            className="h-4 w-4 accent-blue-700"
          />
          Available only
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={savedOnly}
            onChange={(event) => setSavedOnly(event.target.checked)}
            className="h-4 w-4 accent-blue-700"
          />
          Saved only
        </label>
      </div>
    </section>
  );
}

export default OpportunityFilters;