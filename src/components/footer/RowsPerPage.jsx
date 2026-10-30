import React from "react";

const RowsPerPage = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-500">
      Rows per page
      <select className="cursor-pointer rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-700 outline-none focus:border-indigo-500">
        <option className="cursor-pointer">6</option>
        <option className="cursor-pointer">10</option>
        <option className="cursor-pointer">25</option>
      </select>
    </div>
  );
};

export default RowsPerPage;
