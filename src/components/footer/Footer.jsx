import React from "react";
import RowsPerPage from "./RowsPerPage";
import Pagination from "./Pagination";

const Footer = ({ totalPages, currentPage, updateSearchParams }) => {
  return (
    <footer className="mt-5 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-5 sm:flex-row">
      <RowsPerPage />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        updateSearchParams={updateSearchParams}
      />
    </footer>
  );
};

export default Footer;
