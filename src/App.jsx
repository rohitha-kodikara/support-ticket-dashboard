import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-slate-200 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
              D
            </div>
            <h1 className="text-xl font-bold text-slate-900">Deskly</h1>
          </div>
          <span className="text-sm text-slate-500">Support tickets</span>
        </header>

        {/* Search + dropdown filters */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Search by subject or customer"
            className="w-full flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          <select className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
            <option>All priorities</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <select className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
            <option>All assignees</option>
            <option>Nimal</option>
            <option>Sara</option>
            <option>Kavindu</option>
          </select>
        </div>

        {/* Status tabs */}
        <nav className="mt-6 flex gap-6 overflow-x-auto border-b border-slate-200 text-sm">
          <button className="-mb-px whitespace-nowrap border-b-2 border-indigo-600 pb-2.5 font-semibold text-indigo-600">
            All <span className="ml-1 font-normal text-slate-500">42</span>
          </button>
          <button className="whitespace-nowrap pb-2.5 text-slate-500 hover:text-slate-800">
            Open <span className="ml-1 text-slate-400">18</span>
          </button>
          <button className="whitespace-nowrap pb-2.5 text-slate-500 hover:text-slate-800">
            In progress <span className="ml-1 text-slate-400">11</span>
          </button>
          <button className="whitespace-nowrap pb-2.5 text-slate-500 hover:text-slate-800">
            Resolved <span className="ml-1 text-slate-400">13</span>
          </button>
        </nav>

        {/* Category chips */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm text-slate-500">Category</span>
          <button className="rounded-full border border-indigo-600 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white">
            All
          </button>
          <button className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700 hover:border-indigo-400 hover:text-indigo-600">
            Billing
          </button>
          <button className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700 hover:border-indigo-400 hover:text-indigo-600">
            Bug
          </button>
          <button className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700 hover:border-indigo-400 hover:text-indigo-600">
            Account
          </button>
          <button className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700 hover:border-indigo-400 hover:text-indigo-600">
            Feature request
          </button>
        </div>

        {/* Results bar */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
          <p className="text-sm text-slate-500">42 tickets found</p>
          <button className="text-sm text-slate-500 hover:text-slate-900">
            ✕ Clear filters
          </button>
        </div>

        {/* Table */}
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
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
            <tbody className="text-slate-800">
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-3 py-3 text-slate-500">#1042</td>
                <td className="px-3 py-3">
                  <p className="font-medium">Payment failed at checkout</p>
                  <p className="text-xs text-slate-400">Billing</p>
                </td>
                <td className="px-3 py-3">
                  <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700">
                    Open
                  </span>
                </td>
                <td className="px-3 py-3">High</td>
                <td className="px-3 py-3">Nimal</td>
                <td className="px-3 py-3 text-slate-500">2h ago</td>
              </tr>

              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-3 py-3 text-slate-500">#1041</td>
                <td className="px-3 py-3">
                  <p className="font-medium">Cannot reset my password</p>
                  <p className="text-xs text-slate-400">Account</p>
                </td>
                <td className="px-3 py-3">
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                    In progress
                  </span>
                </td>
                <td className="px-3 py-3">Medium</td>
                <td className="px-3 py-3">Sara</td>
                <td className="px-3 py-3 text-slate-500">5h ago</td>
              </tr>

              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-3 py-3 text-slate-500">#1040</td>
                <td className="px-3 py-3">
                  <p className="font-medium">Invoice shows wrong amount</p>
                  <p className="text-xs text-slate-400">Billing</p>
                </td>
                <td className="px-3 py-3">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    Resolved
                  </span>
                </td>
                <td className="px-3 py-3">Low</td>
                <td className="px-3 py-3">Kavindu</td>
                <td className="px-3 py-3 text-slate-500">Yesterday</td>
              </tr>

              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-3 py-3 text-slate-500">#1039</td>
                <td className="px-3 py-3">
                  <p className="font-medium">Dark mode toggle not saving</p>
                  <p className="text-xs text-slate-400">Bug</p>
                </td>
                <td className="px-3 py-3">
                  <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700">
                    Open
                  </span>
                </td>
                <td className="px-3 py-3">Low</td>
                <td className="px-3 py-3">Sara</td>
                <td className="px-3 py-3 text-slate-500">Yesterday</td>
              </tr>

              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-3 py-3 text-slate-500">#1038</td>
                <td className="px-3 py-3">
                  <p className="font-medium">Add CSV export for reports</p>
                  <p className="text-xs text-slate-400">Feature request</p>
                </td>
                <td className="px-3 py-3">
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                    In progress
                  </span>
                </td>
                <td className="px-3 py-3">High</td>
                <td className="px-3 py-3">Nimal</td>
                <td className="px-3 py-3 text-slate-500">2 days ago</td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-3 py-3 text-slate-500">#1037</td>
                <td className="px-3 py-3">
                  <p className="font-medium">Update billing email address</p>
                  <p className="text-xs text-slate-400">Account</p>
                </td>
                <td className="px-3 py-3">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    Resolved
                  </span>
                </td>
                <td className="px-3 py-3">Medium</td>
                <td className="px-3 py-3">Kavindu</td>
                <td className="px-3 py-3 text-slate-500">3 days ago</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer: rows per page + pagination */}
        <footer className="mt-5 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-5 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            Rows per page
            <select className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-700 outline-none focus:border-indigo-500">
              <option>6</option>
              <option>10</option>
              <option>25</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
              ‹ Prev
            </button>
            <button className="h-9 w-9 rounded-lg bg-indigo-600 text-sm font-semibold text-white">
              1
            </button>
            <button className="h-9 w-9 rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50">
              2
            </button>
            <button className="h-9 w-9 rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50">
              3
            </button>
            <span className="px-1 text-slate-400">…</span>
            <button className="h-9 w-9 rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50">
              7
            </button>
            <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
              Next ›
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
