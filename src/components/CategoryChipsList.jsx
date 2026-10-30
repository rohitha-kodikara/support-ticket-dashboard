import React from "react";

const CategoryChipsList = () => {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm text-slate-500">Category</span>
      <button className="cursor-pointer rounded-full border border-indigo-600 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white">
        All
      </button>
      <button className="cursor-pointer rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700 hover:border-indigo-400 hover:text-indigo-600">
        Billing
      </button>
      <button className="cursor-pointer rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700 hover:border-indigo-400 hover:text-indigo-600">
        Bug
      </button>
      <button className="cursor-pointer rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700 hover:border-indigo-400 hover:text-indigo-600">
        Account
      </button>
      <button className="cursor-pointer rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700 hover:border-indigo-400 hover:text-indigo-600">
        Feature request
      </button>
    </div>
  );
};

export default CategoryChipsList;
