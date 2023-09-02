import Table from "./Table";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import useSort from "../hook/use-sort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((col) => {
    if (col.sortValue)
      return {
        ...col,
        header: () => (
          <th
            onClick={() => setSortColumn(col.label)}
            className="cursor-pointer hover:bg-gray-100"
          >
            <div className="flex items-center">
              {getIcons(col.label, sortBy, sortOrder)}
              {col.label}
            </div>
          </th>
        ),
      };
    return col;
  });
  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

function getIcons(label, sortBy, sortOrder) {
  if (sortBy !== label) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowDown />
      </div>
    );
  }
}

export default SortableTable;
