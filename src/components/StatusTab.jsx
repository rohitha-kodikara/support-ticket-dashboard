import React from "react";

const StatusTab = ({ tab, updateSearchParams, isSelected, statusCount }) => {
  return (
    <button
      value={tab.name}
      onClick={(e) => updateSearchParams("status", e.target.value)}
      type="button"
      className={`-mb-px cursor-pointer whitespace-nowrap border-b-2 border-indigo-600  pb-2.5 font-semibold ${isSelected ? "flex justify-center bg-fuchsia-800 rounded-3xl py-1 px-2 text-white" : "text-slate-500"}`}
    >
      {tab.name}{" "}
      <span className="ml-1 font-normal text-black">{statusCount}</span>
    </button>
  );
};

export default StatusTab;
