import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Pagination = ({ totalPages, currentPage, updateSearchParams }) => {
  const pageItems =
    totalPages <= 4
      ? Array.from({ length: totalPages }, (_, index) => index + 1)
      : currentPage <= 3
        ? [1, 2, 3, "ellipsis", totalPages]
        : currentPage >= totalPages - 2
          ? [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages]
          : [
              1,
              "ellipsis",
              currentPage - 1,
              currentPage,
              currentPage + 1,
              "ellipsis",
              totalPages,
            ];

  const goToPage = (event, page) => {
    event.preventDefault();
    updateSearchParams("page", page);
  };

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={currentPage === 1}
            onClick={(event) => {
              if (currentPage > 1) {
                goToPage(event, currentPage - 1);
              } else {
                event.preventDefault();
              }
            }}
          />
        </PaginationItem>

        {pageItems.map((pageItem, index) =>
          pageItem === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={pageItem}>
              <PaginationLink
                href="#"
                isActive={pageItem === currentPage}
                onClick={(event) => goToPage(event, pageItem)}
              >
                {pageItem}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={currentPage === totalPages}
            onClick={(event) => {
              if (currentPage < totalPages) {
                goToPage(event, currentPage + 1);
              } else {
                event.preventDefault();
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
};

export default Pagination;
