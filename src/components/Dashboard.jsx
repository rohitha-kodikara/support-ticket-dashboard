import Header from "./Header";
import SearchAndDropdownFilters from "./SearchAndDropdownFilters";
import StatusTabList from "./StatusTabList";
import CategoryChipsList from "./CategoryChipsList";
import ResultBar from "./ResultBar";
import Table from "./table/Table";
import Footer from "./footer/Footer";
import { tickets } from "../data/data";
import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  function updateSearchParams(key, value) {
    const params = new URLSearchParams(searchParams);
    if (value == "" || value == null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    setSearchParams(params);
  }

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearchQuery =
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.subject === searchQuery;
    return matchesSearchQuery;
  });

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {/* Header */}
        <Header />

        {/* Search + dropdown filters */}
        <SearchAndDropdownFilters
          updateSearchParams={updateSearchParams}
          searchQuery={searchQuery}
        />

        {/* Status tabs */}

        <StatusTabList />

        {/* Category chips */}
        <CategoryChipsList />

        {/* Results bar */}
        <ResultBar />

        {/* Table */}
        <Table tickets={filteredTickets} />

        {/* Footer: rows per page + pagination */}
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
