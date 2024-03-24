/**
 * this is a custom pagination component for the carousel as the pagination component provided by the library has styling limitations
 */

import { useCallback } from "react";

type PaginationProps = {
  activePage: number;
  numberOfPages: number;
  slidesPerView: number | "auto";
  onHandlePaginationClick: (index: number) => void;
  setActivePage: (index: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  activePage,
  numberOfPages,
  onHandlePaginationClick,
  setActivePage,
  slidesPerView,
}) => {
  const handlePageClick = useCallback(
    (index: number) => {
      onHandlePaginationClick(index);
      setActivePage(index / (slidesPerView === "auto" ? 1 : slidesPerView));
    },
    [onHandlePaginationClick, setActivePage, slidesPerView]
  );

  return (
    <div
      className="w-full flex items-center justify-center gap-8 font-24 mt-16 lg:hidden"
      role="tablist"
    >
      {Array.from({ length: numberOfPages }).map((_, index) => (
        <span
          onClick={() => handlePageClick(index)}
          key={index}
          role="tab"
          aria-selected={index === activePage}
          aria-controls={`page-${index + 1}`}
          id={`page-${index + 1}`}
          tabIndex={index === activePage ? -1 : 0}
          style={{
            color: index === activePage ? "#000" : "#ddd",
            cursor: "pointer",
          }}
        >
          •
        </span>
      ))}
    </div>
  );
};

export default Pagination;
