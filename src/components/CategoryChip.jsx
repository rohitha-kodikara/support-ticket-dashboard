import React from "react";

const CategoryChip = ({ category, updateSearchParams, isSelected }) => {
  return (
    <button
      className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium ${
        isSelected
          ? "border-indigo-600 bg-indigo-600 text-white"
          : "border-slate-300 bg-white text-slate-700 hover:border-indigo-400 hover:text-indigo-600"
      }`}
      onClick={() => updateSearchParams("category", category)}
    >
      {category}
    </button>
  );
};

export default CategoryChip;
