import React from "react";
import CategoryChip from "./CategoryChip";

const CategoryChipsList = ({
  categories,
  updateSearchParams,
  selectedCategory,
}) => {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm text-slate-500">Category</span>

      {categories.map((category) => (
        <CategoryChip
          key={category}
          category={category}
          updateSearchParams={updateSearchParams}
          isSelected={selectedCategory === category}
        />
      ))}
    </div>
  );
};

export default CategoryChipsList;
