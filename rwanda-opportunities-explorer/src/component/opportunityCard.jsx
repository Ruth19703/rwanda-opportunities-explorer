import Button from "./Button";
import Badge from "./Badge";

function OpportunityCard({ opportunity, isSaved, onToggleSave }) {
  const {
    title,
    category,
    city,
    date,
    description,
    availableSeats,
    price,
    featured,
  } = opportunity;

  const isFullyBooked = availableSeats === 0;

  const formattedDate = new Date(`${date}T00:00:00`).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge color="blue">{category}</Badge>

        {featured && <Badge color="yellow">Featured</Badge>}

        {isFullyBooked ? (
          <Badge color="red">Fully booked</Badge>
        ) : (
          <Badge color="green">Available</Badge>
        )}
      </div>

      <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>

      <p className="mb-4 flex-grow text-sm leading-6 text-slate-600">
        {description}
      </p>

      <div className="space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
        <p>
          <strong>Location:</strong> {city}, Rwanda
        </p>

        <p>
          <strong>Date:</strong> {formattedDate}
        </p>

        <p>
          <strong>Available places:</strong> {availableSeats}
        </p>

        <p>
          <strong>Price:</strong>{" "}
          {price === 0 ? (
            <span className="font-semibold text-green-700">Free</span>
          ) : (
            `${price.toLocaleString()} RWF`
          )}
        </p>
      </div>

      <div className="mt-5">
        <Button
          variant={isSaved ? "secondary" : "outline"}
          onClick={() => onToggleSave(opportunity.id)}
        >
          {isSaved ? "Unsave opportunity" : "Save opportunity"}
        </Button>
      </div>
    </article>
  );
}

export default OpportunityCard;