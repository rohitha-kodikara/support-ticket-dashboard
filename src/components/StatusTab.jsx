import React from "react";

const StatusTab = ({ tab, updateSearchParams }) => {
  return (
    <button
      value={tab.name}
      onClick={(e) => updateSearchParams("status", e.target.value)}
      type="button"
      className={`-mb-px cursor-pointer whitespace-nowrap border-b-2 border-indigo-600  pb-2.5 font-semibold text-indigo-600  hover:text-slate-800`}
    >
      {tab.name}{" "}
      <span className="ml-1 font-normal text-slate-500">{tab.count}</span>
    </button>
  );
};

export default StatusTab;
