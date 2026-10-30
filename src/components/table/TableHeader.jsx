import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr className="border-b border-slate-300 text-slate-500">
        <th className="w-20 px-3 py-3 font-medium">ID</th>
        <th className="px-3 py-3 font-medium">Subject</th>
        <th className="w-32 px-3 py-3 font-medium">Status</th>
        <th className="w-28 cursor-pointer px-3 py-3 font-medium hover:text-slate-900">
          Priority <span className="text-xs">↕</span>
        </th>
        <th className="w-28 px-3 py-3 font-medium">Assignee</th>
        <th className="w-32 cursor-pointer px-3 py-3 font-medium text-indigo-600">
          Updated <span className="text-xs">↓</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
