import React from "react";

const ResultBar = () => {
  return (
    <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
      <p className="text-sm text-slate-500">42 tickets found</p>
      <button className="cursor-pointer text-sm text-slate-500 hover:text-slate-900">
        ✕ Clear filters
      </button>
    </div>
  );
};

export default ResultBar;
