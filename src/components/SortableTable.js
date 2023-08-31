import Table from "./Table";
import { useState } from "react";

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
          <th onClick={() => handleClick(col.label)} className="cursor-pointer">
            isSortable {col.label}
          </th>
        ),
      };
    return col;
  });
  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

export default SortableTable;
