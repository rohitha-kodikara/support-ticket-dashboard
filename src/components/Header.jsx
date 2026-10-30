import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 pb-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
          D
        </div>
        <h1 className="text-xl font-bold text-slate-900">Deskly</h1>
      </div>
      <span className="text-sm text-slate-500">Support tickets</span>
    </header>
  );
};

export default Header;
