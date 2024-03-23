type PaginationProps = {
  activePage: number;
  numberOfPages: number;
};

const Pagination: React.FC<PaginationProps> = ({
  activePage,
  numberOfPages,
}) => {
  return (
    <div className="w-full flex items-center justify-center gap-8 font-24 mt-16">
      {Array.from({ length: numberOfPages }).map((_, index) => (
        <span
          key={index}
          style={{
            color: index === activePage ? "#000" : "#ddd",
          }}
        >
          •
        </span>
      ))}
    </div>
  );
};

export default Pagination;
