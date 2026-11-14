import OpportunityCard from "./OpportunityCard";
import Button from "./Button";

function OpportunityList({
  opportunities = [],
  savedIds = [],
  onToggleSave,
  onReset,
}) {
  if (opportunities.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <h3 className="mb-2 text-lg font-bold text-slate-800">
          No opportunities found
        </h3>

        <p className="mb-5 text-sm text-slate-500">
          Try changing your search or removing some filters.
        </p>

        <Button onClick={onReset}>
          Reset filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {opportunities.map((opportunity) => (
        <OpportunityCard
          key={opportunity.id}
          opportunity={opportunity}
          isSaved={savedIds.includes(opportunity.id)}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
}

export default OpportunityList;