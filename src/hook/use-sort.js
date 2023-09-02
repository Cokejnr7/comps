import { useState } from "react";

const useSort = (data, config) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy !== label && sortBy) {
      setSortBy(label);
      setSortOrder("asc");
      return;
    }

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

      const order = sortOrder === "asc" ? 1 : -1;

      if (typeof sortValueA === "string") {
        return sortValueA.localeCompare(sortValueB) * order;
      }
      return (sortValueA - sortValueB) * order;
    });
  }

  return { sortBy, sortOrder, sortedData, setSortColumn };
};

export default useSort;
