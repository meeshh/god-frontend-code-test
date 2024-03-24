/**
 * this is a custom pagination component for the carousel as the pagination component provided by the library has styling limitations
 */

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
  const handlePageClick = (index: number) => {
    onHandlePaginationClick(index);
    setActivePage(index / (slidesPerView === "auto" ? 1 : slidesPerView));
  };

  return (
    <div className="w-full flex items-center justify-center gap-8 font-24 mt-16 lg:hidden">
      {Array.from({ length: numberOfPages }).map((_, index) => (
        <span
          onClick={() => handlePageClick(index)}
          key={index}
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
