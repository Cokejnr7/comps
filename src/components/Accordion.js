import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    setExpandedIndex((currentIndex) => {
      if (currentIndex == index) return -1;
      return index;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index;

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className="flex p-3 bg-gray-50 cursor-pointer items-center justify-between"
        >
          {item.title}
          <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
