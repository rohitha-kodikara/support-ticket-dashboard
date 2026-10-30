import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center gap-1.5">
      <button className="cursor-pointer rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
        ‹ Prev
      </button>
      <button className="h-9 w-9 cursor-pointer rounded-lg bg-indigo-600 text-sm font-semibold text-white">
        1
      </button>
      <button className="h-9 w-9 cursor-pointer rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50">
        2
      </button>
      <button className="h-9 w-9 cursor-pointer rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50">
        3
      </button>
      <span className="px-1 text-slate-400">…</span>
      <button className="h-9 w-9 cursor-pointer rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50">
        7
      </button>
      <button className="cursor-pointer rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
        Next ›
      </button>
    </div>
  );
};

export default Pagination;
