import { BODY_TYPES } from "../../utils/constants";

type FilterProps = {
  handleFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Filter: React.FC<FilterProps> = ({ handleFilter }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-4" htmlFor="carTypeSelector">
        Select a Car Type
      </label>
      <select
        id="carTypeSelector"
        className="mb-16 px-16 py-4 border rounded w-xs"
        defaultValue=""
        onChange={handleFilter}
      >
        <option value="">None</option>
        {BODY_TYPES.map((bodyType) => (
          <option key={bodyType} value={bodyType.toLowerCase()}>
            {bodyType}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
