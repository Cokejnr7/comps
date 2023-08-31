import Table from "./Table";
import { useState } from "react";
import { GoArrowUp, GoArrowDown } from "react-icons/go";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;

  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => {
      return column.label === sortBy;
    });

    sortedData = [...sortedData].sort((a, b) => {
      const sortValueA = sortValue(a);
      const sortValueB = sortValue(b);

      const order = sortBy === "asc" ? 1 : -1;

      if (typeof sortValueA === "string") {
        return sortValueA.localeCompare(sortValueB) * order;
      }
      return (sortValueA - sortValueB) * order;
    });
  }

  const updatedConfig = config.map((col) => {
    if (col.sortValue)
      return {
        ...col,
        header: () => (
          <th
            onClick={() => handleClick(col.label)}
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
