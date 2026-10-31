import React from "react";
import StatusTab from "./StatusTab";

const statusTabs = [
  { name: "All", count: 42 },
  { name: "Open", count: 18 },
  { name: "In progress", count: 11 },
  { name: "Resolved", count: 13 },
];

const StatusTabList = ({ updateSearchParams }) => {
  return (
    <nav className="mt-6 flex gap-6 overflow-x-auto border-b border-slate-200 text-sm">
      {statusTabs.map((tab) => (
        <StatusTab
          key={tab.name}
          tab={tab}
          updateSearchParams={updateSearchParams}
        />
      ))}
    </nav>
  );
};

export default StatusTabList;
