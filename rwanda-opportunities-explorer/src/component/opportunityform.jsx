import { useState } from "react";
import Button from "./Button";

const initialForm = {
  title: "",
  category: "Workshops",
  city: "",
  date: "",
  availableSeats: "",
  price: "",
  description: "",
};

function AddOpportunityForm({ onAdd, onCancel }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Please enter an opportunity title.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter a city.";
    }

    if (!formData.date || Number.isNaN(Date.parse(formData.date))) {
      newErrors.date = "Please enter a valid date.";
    }

    if (
      formData.availableSeats === "" ||
      !Number.isInteger(Number(formData.availableSeats)) ||
      Number(formData.availableSeats) < 0
    ) {
      newErrors.availableSeats = "Enter a whole number of 0 or more.";
    }

    if (
      formData.price === "" ||
      !Number.isFinite(Number(formData.price)) ||
      Number(formData.price) < 0
    ) {
      newErrors.price = "Enter a price of 0 or more.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newOpportunity = {
      id: crypto.randomUUID(),
      title: formData.title.trim(),
      category: formData.category,
      city: formData.city.trim(),
      date: formData.date,
      description: formData.description.trim() || "No description provided.",
      availableSeats: Number(formData.availableSeats),
      price: Number(formData.price),
      featured: false,
    };

    onAdd(newOpportunity);
    setFormData(initialForm);
    setErrors({});
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-bold text-slate-900">
        Add a new opportunity
      </h2>

      <p className="mb-6 text-sm text-slate-500">
        Complete the form to add an opportunity to the local demo.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
              Opportunity title *
            </label>

            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />

            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium"
            >
              Category *
            </label>

            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            >
              <option>Workshops</option>
              <option>Career Events</option>
              <option>Community Activities</option>
              <option>Short Courses</option>
            </select>
          </div>

          <div>
            <label htmlFor="city" className="mb-2 block text-sm font-medium">
              City *
            </label>

            <input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Kigali"
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />

            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city}</p>
            )}
          </div>

          <div>
            <label htmlFor="date" className="mb-2 block text-sm font-medium">
              Date *
            </label>

            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />

            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="availableSeats"
              className="mb-2 block text-sm font-medium"
            >
              Available places *
            </label>

            <input
              id="availableSeats"
              name="availableSeats"
              type="number"
              min="0"
              step="1"
              value={formData.availableSeats}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />

            {errors.availableSeats && (
              <p className="mt-1 text-sm text-red-600">
                {errors.availableSeats}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="price" className="mb-2 block text-sm font-medium">
              Price (RWF) *
            </label>

            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="1"
              value={formData.price}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />

            {errors.price && (
              <p className="mt-1 text-sm text-red-600">{errors.price}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="submit">Add opportunity</Button>

          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setFormData(initialForm);
              setErrors({});
            }}
          >
            Clear form
          </Button>

          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AddOpportunityForm;