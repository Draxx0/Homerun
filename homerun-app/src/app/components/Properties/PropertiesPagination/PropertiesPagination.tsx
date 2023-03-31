import { IPaginationProps } from "../../../../api/utils/property";

const PropertiesPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  reference,
}: IPaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
    reference.current?.scrollIntoView();
  };

  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber) => (
        <div
          className={`page-number ${
            pageNumber === currentPage ? "page-number__active" : ""
          }`}
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </div>
      ))}
    </div>
  );
};

export default PropertiesPagination;
