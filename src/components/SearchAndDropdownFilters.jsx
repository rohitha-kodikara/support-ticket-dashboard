import React from "react";

const SearchAndDropdownFilters = ({
  updateSearchParams,
  searchQuery,
  selectedPriority,
  assignees,
  selectedAssignee,
}) => {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <input
        value={searchQuery}
        onChange={(e) => updateSearchParams("search", e.target.value)}
        type="text"
        placeholder="Search by subject or customer"
        className="w-full flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />
      <select
        value={selectedPriority}
        onChange={(e) => updateSearchParams("priority", e.target.value)}
        className="cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      >
        <option className="cursor-pointer" value="All">
          All priorities
        </option>
        <option className="cursor-pointer" value="Low">
          Low
        </option>
        <option className="cursor-pointer" value="Medium">
          Medium
        </option>
        <option className="cursor-pointer" value="High">
          High
        </option>
      </select>
      <select
        value={selectedAssignee}
        onChange={(e) => updateSearchParams("assignee", e.target.value)}
        className="cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      >
        {assignees.map((assignee) => (
          <option key={assignee} className="cursor-pointer" value={assignee}>
            {assignee}
          </option>
        ))}

        {/* <option className="cursor-pointer">Nimal</option>
        <option className="cursor-pointer">Sara</option>
        <option className="cursor-pointer">Kavindu</option> */}
      </select>
    </div>
  );
};

export default SearchAndDropdownFilters;
