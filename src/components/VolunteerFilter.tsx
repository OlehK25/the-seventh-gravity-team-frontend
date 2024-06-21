import * as React from "react";

function VolunteerFilter({
  type,
  text,
  categories,
}: {
  type: string;
  text: string;
  categories: string[];
}) {
  return (
    <div className="mb-16">
      <h2 className="text-lg font-semibold my-6">{text}</h2>

      <div className="flex flex-wrap items-center jsutify-start gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-1 bg-white rounded-xl hover:bg-gray-50"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VolunteerFilter;
