import React from "react";

const TableRow = ({ ticket }) => {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-3 py-3 text-slate-500">{ticket.id}</td>
      <td className="px-3 py-3">
        <p className="font-medium">{ticket.subject}</p>
        <p className="text-xs text-slate-400">{ticket.category}</p>
      </td>
      <td className="px-3 py-3">
        <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700">
          {ticket.status}
        </span>
      </td>
      <td className="px-3 py-3">{ticket.priority}</td>
      <td className="px-3 py-3">{ticket.assignee}</td>
      <td className="px-3 py-3 text-slate-500">{ticket.updated}</td>
    </tr>
  );
};

export default TableRow;
