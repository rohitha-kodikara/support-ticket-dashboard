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
  const selectedStatusTab = searchParams.get("status") || "All";
  const selectedCategory = searchParams.get("category") || "All";
  const selectedPriority = searchParams.get("priority") || "All";
  const selectedAssignee = searchParams.get("assignee") || "All";

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
      ticket.subject === searchQuery ||
      ticket.assignee.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.assignee === searchQuery;

    const matchesStatusTab =
      selectedStatusTab === "All" || ticket.status === selectedStatusTab;

    const matchesCategory =
      selectedCategory === "All" || ticket.category === selectedCategory;

    const matchesPriority =
      selectedPriority.toLowerCase() === "all" ||
      ticket.priority.toLowerCase() === selectedPriority.toLowerCase();

    const matchesAssignee =
      selectedAssignee.toLowerCase() === "all" ||
      ticket.assignee.toLowerCase() === selectedAssignee.toLowerCase();

    return (
      matchesSearchQuery &&
      matchesStatusTab &&
      matchesCategory &&
      matchesPriority &&
      matchesAssignee
    );
  });

  const countsByStatus = tickets.reduce((acc, ticket) => {
    acc[ticket.status] = (acc[ticket.status] || 0) + 1;
    return acc;
  }, {});

  const statusCount = {
    All: tickets.length,
    ...countsByStatus,
  };

  const categories = ["All", "Billing", "Bug", "Account", "Feature request"];

  const assignees = [
    "All",
    ...new Set(tickets.map((ticket) => ticket.assignee)),
  ];

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {/* Header */}
        <Header />

        {/* Search + dropdown filters */}
        <SearchAndDropdownFilters
          updateSearchParams={updateSearchParams}
          searchQuery={searchQuery}
          selectedPriority={selectedPriority}
          assignees={assignees}
          selectedAssignee={selectedAssignee}
        />

        {/* Status tabs */}

        <StatusTabList
          updateSearchParams={updateSearchParams}
          selectedStatusTab={selectedStatusTab}
          statusCount={statusCount}
        />

        {/* Category chips */}
        <CategoryChipsList
          categories={categories}
          updateSearchParams={updateSearchParams}
          selectedCategory={selectedCategory}
        />

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
