import React from "react";

const StatusTabList = () => {
  return (
    <nav className="mt-6 flex gap-6 overflow-x-auto border-b border-slate-200 text-sm">
      <button className="-mb-px cursor-pointer whitespace-nowrap border-b-2 border-indigo-600 pb-2.5 font-semibold text-indigo-600">
        All <span className="ml-1 font-normal text-slate-500">42</span>
      </button>
      <button className="cursor-pointer whitespace-nowrap pb-2.5 text-slate-500 hover:text-slate-800">
        Open <span className="ml-1 text-slate-400">18</span>
      </button>
      <button className="cursor-pointer whitespace-nowrap pb-2.5 text-slate-500 hover:text-slate-800">
        In progress <span className="ml-1 text-slate-400">11</span>
      </button>
      <button className="cursor-pointer whitespace-nowrap pb-2.5 text-slate-500 hover:text-slate-800">
        Resolved <span className="ml-1 text-slate-400">13</span>
      </button>
    </nav>
  );
};

export default StatusTabList;
