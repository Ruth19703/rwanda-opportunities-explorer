app :::::::::::::::
import { useState } from "react";

import seedOpportunities from "./data/seedOpportunities";

import Navbar from "./component/navbar";
import OpportunityFilters from "./component/opportunityFilters";
import OpportunityList from "./component/opportunityList";
import AddOpportunityForm from "./component/opportunityform";

function App() {
  const [opportunities, setOpportunities] = useState(seedOpportunities);
  const [savedIds, setSavedIds] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [savedOnly, setSavedOnly] = useState(false);

  const [showForm, setShowForm] = useState(false);

  function toggleSave(id) {
    setSavedIds((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function addOpportunity(newOpportunity) {
    setOpportunities((previous) => [newOpportunity, ...previous]);
    setShowForm(false);
  }

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setSortBy("date");
    setAvailableOnly(false);
    setSavedOnly(false);
  }

  let filteredOpportunities = opportunities.filter((opportunity) => {
    const searchTerm = search.trim().toLowerCase();

    const matchesSearch =
      opportunity.title.toLowerCase().includes(searchTerm) ||
      opportunity.city.toLowerCase().includes(searchTerm);

    const matchesCategory =
      category === "All" || opportunity.category === category;

    const matchesAvailability =
      !availableOnly || opportunity.availableSeats > 0;

    const matchesSaved =
      !savedOnly || savedIds.includes(opportunity.id);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesAvailability &&
      matchesSaved
    );
  });

  filteredOpportunities = [...filteredOpportunities];

  if (sortBy === "date") {
    filteredOpportunities.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  } else if (sortBy === "title") {
    filteredOpportunities.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortBy === "seats") {
    filteredOpportunities.sort(
      (a, b) => b.availableSeats - a.availableSeats
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar
        savedCount={savedIds.length}
        onAddClick={() => setShowForm(true)}
      />

      <main className="mx-auto max-w-7xl px-5 py-8">
        <h1 className="mb-6 text-3xl font-bold text-blue-950">
          Rwanda Opportunities Explorer
        </h1>

        {showForm && (
          <AddOpportunityForm
            onAdd={addOpportunity}
            onCancel={() => setShowForm(false)}
          />
        )}

        <OpportunityFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          availableOnly={availableOnly}
          setAvailableOnly={setAvailableOnly}
          savedOnly={savedOnly}
          setSavedOnly={setSavedOnly}
          onReset={resetFilters}
        />

        <p className="my-5 font-semibold text-slate-700">
          {filteredOpportunities.length} opportunities found
        </p>

        <OpportunityList
          opportunities={filteredOpportunities}
          savedIds={savedIds}
          onToggleSave={toggleSave}
          onReset={resetFilters}
        />
      </main>
    </div>
  );
}

export default App;